const fs = require('fs');
const http=require('http');

const data=fs.readFileSync('data.json','utf-8');
const DataObj=JSON.parse(data)

const server=http.createServer((req,res)=>{
    const pathName=req.url;

    if(pathName=='/' || pathName=='/overview'){
        res.end('<h2>This is overview</h2>')
    }else if(pathName=='/fruit'){
        
            res.writeHead(200,{'Content-type':'application/json'})
            res.end(data)
         }else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'New-error'
        })
        res.end('<h1>Page not found</h1>')
    }
})

server.listen(8080,'127.0.0.1',()=>{
    console.log('Listening to port 8080')
})