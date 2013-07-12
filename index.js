var Transform = require('stream').Transform || require('readable-stream').Transform
var fs = require('fs')

module.exports = transformAndWrite
function transformAndWrite (target) {

  return writer.pipe(logWriter(target))
}

function logWriter (target) {
  return fs.createWriteStream(target, {'flags': 'a'});
}

