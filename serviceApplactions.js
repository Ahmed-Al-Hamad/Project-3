const express = require("express");
const app = express();
const port = 3000;
const db={orgnization:{},
          service:{},
          user:{}} 
  const register={}
const informationUser={};
app.use(express.json())
// registeration user
const registerUser=(id_body,firstName_body,middleName_body,lasteName_body,phNum_body,address_body,email_body,password_body)=>{
  let result
if(id_body>0&&id_body!==0){
  informationUser.id=id_body
}else result+= "pleas the id is importent you should insert it"+" "
if(firstName_body!==" "){
  informationUser.firstName=firstName_body
}else result+= " the first name is requrid"+" "
if(middleName_body!==" "){
  informationUser.middleName=middleName_body
}else result+= " the middle name is requrid"+" "
if(lasteName_body!==" "){
  informationUser.lastName=lasteName_body
}else result+= " the last name is requrid"+" "
if(phNum_body!==" "){
  informationUser.phNum=phNum_body
}else result+= " the phon number is requrid"+" "
if(address_body!==" "){
  informationUser.address=address_body
}else result+= " the address is requrid"+" "
if(email_body!==" "){
  informationUser.email=email_body
}else result+=" the email is requrid"+" "
if(password_body!==" "){
  informationUser.passowrd=password_body
}else result+= " the password is requrid"+" "
return result
}
app.post("/registerNewUser",(req,res)=>{
let result=  registerUser(req.body.id,req.body.firstName,req.body.middleName,req.body.lastName,req.body.phNum,req.body.address,req.body.email,req.body.passowrd)
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
app.get("/",(req,res)=>{

})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});