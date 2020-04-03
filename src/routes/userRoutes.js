// Importando o Express
var express = require('express');

// Importando o Router
var router = express.Router();

const UserController = require('../Controllers/userController');
// const ProjectController = require('../controllers/project');
const User = require('../models/userSchema')
const userController = new UserController(User);


console.log('userRoute');
router.get('/', (req, res) => { userController.get(req, res) }); 



router.get('/read/:id', (req, res) => { userController.getById(req, res) });
router.post('/create', (req, res) => { userController.post(req, res) }); 
//router.put('/update/:id', (req, res) => { userController.put(req, res) });
router.post('/authenticate', (req, res) => { userController.postAuthenticate(req, res) }); 
//router.post('/authenticate', (req, res) => { userController.postAuthenticate(req, res) }); 
//router.get('/projects', (req, res) => { userController.getProject(req,res) }); 
module.exports = router;




