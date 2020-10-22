var express = require('express');
var router = express.Router();
var login = require('./utils/login');
var signUp = require('./utils/signUp');
var verify = require('./utils/verify');

router.post('/signUp', signUp.signUp);

router.post('/login', login.login);

router.post('/verify', verify.verify);

module.exports = router;