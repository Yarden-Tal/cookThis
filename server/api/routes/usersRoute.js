var router = require('express').Router();
var recipeSchemaAJV = require('../../schemas/recipeSchema').recipeSchemaAJV;
var _a = require('../controllers/usersController'), getAllUsers = _a.getAllUsers, registerUser = _a.registerUser, editUser = _a.editUser, deleteUser = _a.deleteUser;
router.get('/', getAllUsers).post('/', registerUser);
router.put('/:userId', editUser)["delete"]('/:userId', deleteUser);
module.exports = router;
