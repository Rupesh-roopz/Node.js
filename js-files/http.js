const http = require('http');

// console.log(http);
// console.log(process.env.port)

// const port = 8000;

// const server = http.createServer((req, res)=> {
//   res.statusCode = 200;
//   res.setHeader('content-type', 'text/html');
//   res.write('<h1>Hello World</h1>');
//   res.end;
// })

// server.listen(port,()=>{
//   console.log(`Server running at the port ${port}`);
// })

http.get('http://jsonplaceholder.typicode.com/users',(response) =>{
   response.on('data', (chunk) => {
    console.log("This is a chunk :\n");
    console.log(chunk.toString())
  })
  response.on('error',()=>{
    console.log("error")
  })
})
