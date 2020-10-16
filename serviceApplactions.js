const express = require("express");
const app = express();
const port = 3000;
const db={orgnization:{},
          service:{},
          user:{}} 
  const register={}
const informationUser={};
app.use(express.json())
app.get("",(req,res)=>{
})
const addmin_Opration=(typOperation,data)=>{
  if(typOperation==="add-service") {
    db.service=data
    console.log(db.service)
  }
  if(typOperation==="add-organisation"){
    
  }
  if(typOperation==="add-user"){
    
  }
  if(typOperation==="info-user"){
    
  }
}
app.post('/addminOperation/:typOperation',(req,res)=>{
if(req.params.typOperation==="add-service") {
  addmin_Opration(req.params.typOperation,req.body)
  res.json("Added successfully")
}
if(req.params.typOperation==="add-organisation"){
  addmin_Opration(req.params.typOperation)
}
if(req.params.typOperation==="add-user"){
  addmin_Opration(req.params.typOperation)
}
if(req.params.typOperation==="info-user"){
  addmin_Opration(req.params.typOperation)
}
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});