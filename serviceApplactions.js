const express = require("express");
const app = express();
const port = 3000;
const db={orgnization:{},
          service:{},
          user:{}} 
  const register={}
const informationUser={};
app.use(express.json())
//function to Add Admin
const addmin_Opration=(typOperation,data)=>{
  if(typOperation==="add-service") {
    db.service=data
    console.log(db.service)
  }
  if(typOperation==="add-organisation"){
    db.orgnization=data
    console.log(db.orgnization)
  }
  if(typOperation==="add-user"){
    db.user=data
    console.log(db.user)
  }
  if(typOperation==="info-user"){
    db.informationUser=data
    console.log(db.informationUser)
  }
}
app.post('/addminOperation/:typOperation',(req,res)=>{
if(req.params.typOperation==="add-service") {
  addmin_Opration(req.params.typOperation,req.body)
  res.json("Added successfully")
}
if(req.params.typOperation==="add-organisation"){
  addmin_Opration(req.params.typOperation,req.body)
  res.json("Added successfully")
}
if(req.params.typOperation==="add-user"){
  addmin_Opration(req.params.typOperation,req.body)
  res.json("Added successfully")
}
if(req.params.typOperation==="info-user"){
  addmin_Opration(req.params.typOperation,req.body)
  res.json("Added successfully")
}
})
app.get("",(req,res)=>{
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});