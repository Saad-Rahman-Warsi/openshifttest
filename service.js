const express= require('express');
const app = express();

app.get('/',(req,res)=>{
   res.send("welcome");
});

app.listen(3300,function(){
    console.log("welcome to 3300");
 });