const http=require('http');
const data=require('./CLASS12');
http.createServer((req,resp)=>
{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);


// http.createServer((req,resp)=>
// {
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify({name:'amyy kaur',email:'haha123@gmail.com'}));
//     resp.end();
// }).listen(5000);