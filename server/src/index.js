const express = require('express');
const index = require('./modules/routing/index.js');

const app = express();
const port = 8080;

app.use(index);

app.listen(port, ()=>console.log(`App listening on port ${port}`));
