const router = require('express').Router();

const { recipeSchemaAJV } = require('../../schemas/recipeSchema');
const {
  getAllUsers,
  registerUser,
  editUser,
  deleteUser,
} = require('../controllers/usersController');

router.get('/', getAllUsers).post('/', registerUser);
router.put('/:userId', editUser).delete('/:userId', deleteUser);

module.exports = router;
