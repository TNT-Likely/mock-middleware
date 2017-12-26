module.exports = function(req) {
  var obj = {
    '$$statusCode': 401,
    '$$delay': 1000,
    '$$header': {
      'Content-Type': 'text/plain'
    },
    'message': 'hello world'
  }

  //write logic here
  if (req.query.key && req.params.key && req.body.key) {
    obj = {}
  }

  return obj
}
