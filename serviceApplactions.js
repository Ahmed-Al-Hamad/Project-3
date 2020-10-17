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
if(id_body>0&&id_body!==0){
  informationUser.id=id_body
}else return "pleas the id is importent you should insert it"
if(firstName_body!==" "){
  informationUser.firstName=firstName_body
}else return " the first name is requrid"
if(middleName_body!==" "){
  informationUser.middleName=middleName_body
}else return " the middle name is requrid"
if(lasteName_body!==" "){
  informationUser.lastName=lasteName_body
}else return " the last name is requrid"
if(phNum_body!==" "){
  informationUser.phNum=phNum_body
}else return " the phon number is requrid"
if(address_body!==" "){
  informationUser.address=address_body
}else return " the address is requrid"
if(email_body!==" "){
  informationUser.email=email_body
}else return " the email is requrid"
if(password_body!==" "){
  informationUser.passowrd=password_body
}else return " the password is requrid"
}
app.post("/registerNewUser",(req,res)=>{
  registerUser(req.body.id,req.body.firstName,req.body.middleName,req.body.lastName,req.body.phNum,req.body.address,req.body.email,req.body.passowrd)
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