"use strict";
exports.__esModule = true;
exports.deleteRecipe = exports.putRecipe = exports.postRecipe = exports.getUserRecipes = void 0;
var dataHandler_1 = require("../../data/dataHandler");
var recipesModel_1 = require("../../models/recipesModel");
// Get recipes for a user ** WORKS **
exports.getUserRecipes = function (req, res) {
    try {
        var userId = req.params.userId;
        var user = dataHandler_1.findUserOnDb(userId);
        res.status(200).send(user.recipes);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
// Add recipe
exports.postRecipe = function (req, res) {
    try {
        var userId = req.params.userId;
        var user = dataHandler_1.findUserOnDb(userId);
        var data = req.body;
        var name = data.name, prepTime = data.prepTime, difficulty = data.difficulty, imageUrl = data.imageUrl, ingredients = data.ingredients, instructions = data.instructions;
        if (!name ||
            !prepTime ||
            !difficulty ||
            !imageUrl ||
            !ingredients ||
            !instructions) {
            return res.status(400).send('Invalid params');
        }
        var newRecipe = new recipesModel_1.Recipe(name, prepTime, difficulty, imageUrl, ingredients, instructions);
        dataHandler_1.addRecipeToJson(userId, newRecipe);
        res.status(201).send(newRecipe);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
// Edit recipe
exports.putRecipe = function (req, res) {
    try {
        var truckId = req.params.truckId;
        if (!truckId)
            return res.status(404).send('Id not found');
        var data = req.body;
        var type = data.type, price = data.price, image = data.image;
        if (!type || !price || !image)
            return res.status(400).send('Invalid params');
        console.log('Data for PUT:', type, price, image);
        var truck = { type: type, price: price, image: image, id: truckId };
        var trucksAfterEdit = editTruck(truck);
        res.status(200).send(trucksAfterEdit);
        console.log('After edit:', trucksAfterEdit);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
// Delete recipe
exports.deleteRecipe = function (req, res) {
    try {
        var truckId = req.params.truckId;
        if (!truckId)
            return res.status(404).send('Id not found');
        var trucksAfterDelete = deleteTruck(truckId);
        if (trucksAfterDelete === false)
            return res.status(404).send('Not deleted!');
        res.status(204).send(readAllTrucks());
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
