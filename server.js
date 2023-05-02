const http=require('http')
http.createServer((req,resp)=>
{
  resp.write("<h1>hello radhika");
  resp.end();
}).listen(4500);