var path = require('path')
var fs = require('fs')
var vm = require('vm')
var check = require('syntax-error')
var utils = require('./utils')

function DataSet(path, exts) {
  this.path = path
  this.exts = exts
}

DataSet.prototype.get = function(file, req) {
  var data = {}
  var dataExt = null

  var ext = path.extname(file)
  var regexp = new RegExp('\\' + ext + '$')

  var dataFile = file.replace(regexp, '')
  dataFile = path.resolve(this.path, dataFile)
  this.exts.some(function(ext) {
    if (fs.existsSync(dataFile + ext)) {
      dataExt = ext
      return true
    }
  })

  if (dataExt) {
    dataFile += dataExt
    var content = fs.readFileSync(dataFile).toString()
    if (content.indexOf('module.exports') >= 0) {
      var err = check(content, dataFile)
      if (err) return err
      var func = require(dataFile)
      data = func(req)
    } else {
      data = JSON.parse(content)
    }
  }

  return data
}


module.exports = DataSet