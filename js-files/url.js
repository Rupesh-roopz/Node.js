const url = require('url')

// console.log(url.URL===URL)

// const myURL = new URL('https://example.org');
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh';
// // console.log(myURL.href)

// //new URL(input[,base])
// const myURL1 = new URL( '/foo', 'https://example.org' );
// // console.log(myURL1.href)

// //url hash
// const myURL2 = new URL("https://example.org")
// myURL2.hash = "rupesh"
// console.log(myURL2.hash);
// console.log(myURL2.href);

const myurlObj =new URL("https://nodejs.org/dist/latest-v14.x/docs/api/url.html#url_class_urlsearchparams");
console.log(myurlObj.href)

myurlObj.username = "Rupesh";
myurlObj.password = "user123"
console.log(myurlObj)
myurlObj.port = 99
console.log(myurlObj)