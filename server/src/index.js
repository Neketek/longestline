const express = require('express');
const index = require('routing/index.js');
const mongodb = require('model/mongo/db.js');
const mongodbInit = require('model/mongo/init.js');

mongodbInit(mongodb.client);

const PORT = 8080;

async function createApp(){

  const app = express();

  app.use(index);

  app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`));

}

createApp();
