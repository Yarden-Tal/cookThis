const express = require('express');
const router = express.Router();

const { recipeSchemaAJV } = require('../../schemas/recipeSchema');
const {
  getUserRecipes,
  postRecipe,
  putRecipe,
  deleteRecipe,
} = require('../controllers/recipesController');

router.get('/:userId', getUserRecipes).post('/:userId', postRecipe);
router
  .put('/:userId/:recipeId', putRecipe)
  .delete(':userId/:recipeId', deleteRecipe);

module.exports = router;
