var express = require('express');
var User = require('../models/userSchema.js');

// Rotas
var router = express.Router();
const userRoute = require('../routes/userRoutes');

router.use('/users', userRoute);


module.exports = router;