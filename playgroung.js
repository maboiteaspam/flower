
var flowerStyle = function (then){
  var flower = require('./index')

  var streamA = flower();

  streamA
    .pipe(flower())
    .pipe(flower())
    .pipe(flower())
    .pipe(flower())
    .pipe(flower(function (chunk, enc, cb) {
      console.log(chunk)
      cb(null, chunk)
    }));

  for (var e=0;e<50000;e++){
    streamA.write(' - '+e)
  }
  streamA.on('end', then)
  streamA.end()
}

var throughStyle = function (then){

  var through2 = require('through2')

  var streamB = through2();
  streamB
    .pipe(through2())
    .pipe(through2())
    .pipe(through2())
    .pipe(through2())
    .pipe(through2(function (chunk, enc, cb) {
      console.log(''+chunk)
      cb(null, chunk)
    }));

  for (var e=0;e<50000;e++){
    streamB.write(' - '+e)
  }
  streamB.on('end', then)
  streamB.end()
}

flowerStyle(function(){
  console.log('ok cool...50000 iterations youpi.')
  setTimeout(function () {
    throughStyle(function(){
      console.log('you see... hehe.... no you won t see that log on stdout.. it stopped at 2499')
    })
  }, 2500)
})
