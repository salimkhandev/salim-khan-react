var express = require('express');
var router = express.Router();
var userScema=require('../schemas/userSchemas')
/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send(`you send me ${req.body.name}`);
});
router.post('/user',(req, res) =>{
  
  const username = req.body;

  const result = userScema.validate(username);

  if (result.error) {
    console.error(result.error.message);
    res.send(`${result.error.details[0].message}`);
  } else {
// res.send("Validation successful");

    // res.send("Validation successful");
  }




 })

module.exports = router;

