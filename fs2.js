const {readFile,writeFile}=require("fs");
readFile('./Content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err);
  }
  else{
   const first=result;
   readFile('./Content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
     const second=result;
     writeFile("./Content/result2.txt",`resulr ${first},${second}`,(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(result)
      }
     })
    }
  })
 
  }
})
