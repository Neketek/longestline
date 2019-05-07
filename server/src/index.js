const express = require('express');
const index = require('routing/index.js');
const mongodb = require("model/mongo/db.js");

const PORT = 8080;

async function createApp(){

  const app = express();

  app.use(mongodb);

  app.use(index);

  app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`));

}

createApp();
