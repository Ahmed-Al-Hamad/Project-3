const express = require("express");
const app = express();
const port = 3000;
const db={orgnization:{},
          service:{},
          user:{}} 
  const register={}
let informationUser={};
app.use(express.json())
// registeration user
const registerUser=(allInfo,id_body,firstName_body,middleName_body,lasteName_body,phNum_body,address_body,email_body,password_body)=>{

if(id_body>0&&id_body!==0&&firstName_body!==" "&&middleName_body!==" "&&lasteName_body!==" "&&phNum_body!==" "&&address_body!==" "&&email_body!==" "&&password_body!==" "){
  informationUser=allInfo
  console.log(informationUser)
  return "successfully registered"
}else return "All fields are requirid"
}
app.post("/registerNewUser",(req,res)=>{
let result=  registerUser(req.body,req.body.id,req.body.firstName,req.body.middleName,req.body.lastName,req.body.phNum,req.body.address,req.body.email,req.body.passowrd)
res.json(result)
})
// function login
app.get("/login",(req,res)=>{
  if(req.body.email===undefined&&req.body.passowrd===undefined){
    res.json("Please enter your email and password")
 
  }else if(req.body.email===informationUser.email&&req.body.passowrd===informationUser.passowrd){
    res.json("login successfully")
  }
  else res.json("Please create an account on the site to be able to benefit from the services")
  console.log(informationUser)
  })
  
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
//query user
app.get("/queryUser/:typQuery",(req,res)=>{
if(typQuery==="organaization"){
  res.json(orgnization)
}else if(typQuery==="service"){
  res.json(service)
}else res.json(service)
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});