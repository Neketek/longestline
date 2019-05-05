const express = require('express');


router = express.Router();

router.get('/',(req, res)=>{
  res.send("Index page. Hello there:)")
});


module.exports = router;
