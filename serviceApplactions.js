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
 addmin_Opration(req.params.typOperation,req.body)
 res.json("Added successfully")
})
// delete function
const addmin_Delete=typOperation=>{
  if(typOperation==="delete-service") {
    db.service=" "
    console.log(db.service)
  }
  if(typOperation==="delete-organisation"){
    db.orgnization=" "
    console.log(db.orgnization)
  }
  if(typOperation==="delete-user"){
    db.user=" "
    console.log(db.user)
  }
  if(typOperation==="info-user"){
    db.informationUser=" "
    console.log(db.informationUser)
  }
}
app.delete('/addminOperation/:typOperation',(req,res)=>{
  addmin_Delete(req.params.typOperation)
  res.json("Delete successfully")
})
app.get("/",(req,res)=>{

})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});