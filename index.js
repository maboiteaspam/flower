var through = require('through2')

module.exports = function (fnT, fnF) {
  var stream = through.obj(fnT, fnF);
  process.nextTick(function(){
    stream.resume()
  })
  return through.obj(fnT, fnF)
};
