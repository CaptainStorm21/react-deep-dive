const express = require ('express');
//we need express because router comes with express
const router= express.Router();

//import controller 
const { signup } =  require ('../controllers/auth')

router.get('/signup', signup);

module.exports = router;

