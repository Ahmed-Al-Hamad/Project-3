const express = require("express");
const app = express();
const port = 3000;
const db={orgnization:{},
          service:{},
          user:{} } 
  const register={}
const informationUser={};
app.use(express.json())
app.get("/h/:typ",(req,res)=>{
  if(req.params.typ==="add"){
res.json("true") ; 
console.log(req.params.typ)
  }else res.json("false")
})

app.post('/',(req,res)=>{
 
console.log(req.body.name)
res.json(req.body.name)
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});