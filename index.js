var through = require('through2')

module.exports = function (fnT, fnF) {
  return through.obj(fnT, fnF).resume()
};
