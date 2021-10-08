"use strict";
exports.__esModule = true;
exports.Recipe = exports.Difficulty = void 0;
var uuidv4 = require('uuid').v4;
var Difficulty;
(function (Difficulty) {
    Difficulty["easy"] = "easy";
    Difficulty["medium"] = "medium";
    Difficulty["hard"] = "hard";
})(Difficulty = exports.Difficulty || (exports.Difficulty = {}));
var Recipe = /** @class */ (function () {
    function Recipe(name, prepTime, difficulty, imageUrl, ingredients, instructions) {
        this.id = uuidv4();
        this.name = name;
        this.prepTime = prepTime;
        this.difficulty = difficulty;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
