const {orgnization_1,service_1,user_1, register_1}= require('./../db/Schema');
// Promises Yes
// Promises (Yes)

const test=(req,res)=>{
  res.json("ok")
}

//function to Add Admin
const AdminAddService=(req,res)=>{
  const newService = new service_1(req.body);
  console.log('NEWPRODUCT: ', newProduct);
  newService
    .save()
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success Create new Service');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}
const AdminAddOrganisation=(req,res)=>{
 const newOrganisation = new orgnization_1(req.body);
  console.log('NEWPRODUCT: ', newProduct);
  newOrganisation
    .save()
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success Create new Organisation');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}
const AdminAddUser=(req,res)=>{
 const newuser = new user_1(req.body);
  console.log('NEWPRODUCT: ', newProduct);
  newuser
    .save()
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success Create new user');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);});
}

// delete function Addmin
const AdminDeleteService=(req,res)=>{
  service_1.deleteMany({})
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success Delete all');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}
const AdminDeleteOrganisation=(req,res)=>{
  orgnization.deleteMany({})
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success Delete all');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}
const AdminDeleteUser=(req,res)=>{
  user.deleteMany({})
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success Delete all');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}

//query user
/*const organaization=(req,res)=>{

}
const Service=(req,res)=>{

}*/
// delete function Addmin
const updateOrganaization=(req,res)=>{
 Product.findOneAndUpdate(
    { title: req.params.title },
    { price: req.body.newPrice }
  )
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success update ');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}
const updateService=(req,res)=>{
 Product.findOneAndUpdate(
    { title: req.params.title },
    { price: req.body.newPrice }
  )
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success update ');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}
const updateUser=(req,res)=>{
 Product.findOneAndUpdate(
    { title: req.params.title },
    { price: req.body.newPrice }
  )
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success update ');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}


module.exports = {
  //organaization,
 //Service,
  // "getAllProducts":getAllProducts
 AdminAddService    ,
AdminAddOrganisation,
AdminAddUser,
  AdminDeleteService,
AdminDeleteOrganisation,
AdminDeleteUser,
updateOrganaization,
updateService,
updateUser,
test
};

/* 
 .then((result) => {
      // console.log('RESULT: ',result)
      res.json(result);
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });

// Async Await (Go Slower)
const getAllProducts2 = async () => {
  let allData = await Product.find({});
  return allData;
};
// Callbacks (No)
const getAllProducts3 = (req, res) => {
  Product.find({}, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}; 
*/
/*const addNewProduct = (req, res) => {
  console.log('addNewProduct');
  console.log('REQ.BODY: ', req.body);
  const newProduct = new Product(req.body);
  console.log('NEWPRODUCT: ', newProduct);
  newProduct
    .save()
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success Create new Product');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
};*/

/*const deleteAllProducts = (req, res) => {
  Product.deleteMany({})
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success Delete all');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
};*/

/*const getAllProducts = (req, res) => {
  Product.find({})
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json(result);
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
};*/
/*const updateOneProduct = (req, res) => {
  console.log('PARAMS: ', req.params);
  console.log('BODY: ', req.body);
  // {title:'ships',price=>20}
  Product.findOneAndUpdate(
    { title: req.params.title },
    { price: req.body.newPrice }
  )
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success update ');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
};

const deleteOneProduct = (req, res) => {
  console.log('PARAMS: ', req.params);

  Product.findOneAndDelete(
    { title: req.params.title },
  )
    .then((result) => {
      // console.log('RESULT: ',result)
      res.json('Success delete 1 item ');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
};*/