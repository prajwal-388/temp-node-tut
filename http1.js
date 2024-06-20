const http=require("http")
const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    res.end("This is home");
  }
  else if(req.url==="/about"){
    res.end("This is about us")
  }
  else{

    res.end(`<h1>oops</h1>
      <a href="/">Go Back</a>`)
  }

  
})
server.listen(8000);


//console.log(req)
// res.write("welcome to home page");
// res.end()