# flower

I always forgot to enable the flow mode of node streams,
`flower` should help me to deal with that.

# install

    npm i maboiteaspam/flower --save

# Usage

`flower` is a stream object in flow mode,
`.resume()` is always called.

```js

var flower = require('flower')

process.stdin.pipe(flower(fnTransform, fnFlush));

```

### My problem with through2

I have to call for `.resume()` on each and every stream i create.

```js
var streamA = through2.obj(function (req, enc, cb) {
  cb(null, req);
})

streamA.pipe(through2.obj().resume())
  .pipe(through2.obj().resume())
  .pipe(through2.obj().resume())
  .pipe(through2.obj().resume())
  .pipe(through2.obj().resume());

for (var e=...) {
streamA.write(...);
}
streamA.resume();
```


With `flower` i want to ease that...

```js
var streamA = flower();

streamA
    .pipe(flower())
    .pipe(flower())
    .pipe(flower())
    .pipe(flower())
    .pipe(flower());

for (var e=...) {
streamA.write(...);
}
```

# Read more

- https://nodejs.org/api/stream.html#stream_compatibility_with_older_node_js_versions

