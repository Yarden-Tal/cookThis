var express = require('express');
var router = express.Router();
var recipeSchemaAJV = require('../../schemas/recipeSchema').recipeSchemaAJV;
var _a = require('../controllers/recipesController'), getUserRecipes = _a.getUserRecipes, postRecipe = _a.postRecipe, putRecipe = _a.putRecipe, deleteRecipe = _a.deleteRecipe;
router.get('/:userId', getUserRecipes).post('/:userId', postRecipe);
router
    .put('/:userId/:recipeId', putRecipe)["delete"](':userId/:recipeId', deleteRecipe);
module.exports = router;
