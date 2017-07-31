var request = require('request');
var fs = require('fs');

request('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function (err) {
  throw err;
  })
.on('response', function (response) {
  console.log('Response Status Code: ', response.statusCode);
  console.log('Downloading Image');
})
.on('end', function () {
  console.log('Image Downloaded');
})
.pipe(fs.createWriteStream('./future.jpeg'))