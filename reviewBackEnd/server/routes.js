const express = require('express');
const {
  organaization,
  service,
  AdminAddService,
AdminAddOrganisation,
AdminAddUser,
AdminDeleteService,
AdminDeleteOrganisation,
AdminDeleteUser,
  updateOrganaization,
updateService,
updateUser,
test
} = require('./controller');
const mainRouter = express.Router();




// I have only 1 router '/products'

mainRouter.get('/test',test);
//====================================================
//function to Add Admin
mainRouter.post('/AdminAddService', AdminAddService);
mainRouter.post('/AdminAddOrganisation', AdminAddOrganisation);
mainRouter.post('/AdminAddUser', AdminAddUser);
// update Addmin                        
mainRouter.put('/organaization',updateOrganaization );
mainRouter.put('/service', updateService);
mainRouter.put('/user',updateUser);
// delete function Addmin
mainRouter.delete('/AdminDeleteService', AdminDeleteService);
mainRouter.delete('/AdminDeleteOrganisation', AdminDeleteOrganisation);
mainRouter.delete('/AdminDeleteUser', AdminDeleteUser);
//query user
//mainRouter.get('/organaization', organaization);
//mainRouter.get('/service', service);
//mainRouter.delete('/products/:title', deleteOneProduct);

module.exports = mainRouter;












// mainRouter.get('/',helloWorld)
/*
 mainRouter.get('/', (req, res) => {
  console.log('HELLO WORLD');
  res.json('GET on jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj/');
});*/

/* 
mainRouter.get('/products3', getAllProducts3);

mainRouter.get('/products2', async (req, res) => {
  res.json(await getAllProducts2());
}); */