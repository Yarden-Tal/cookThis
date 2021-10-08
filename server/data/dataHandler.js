"use strict";
exports.__esModule = true;
exports.addRecipeToJson = exports.findUserOnDb = exports.delUserFromJson = exports.editUserOnJson = exports.addUserToJson = exports.usersJson = void 0;
var fs = require('fs');
var path = require('path');
var pathToUsersJson = path.resolve(__dirname, './users.json');
// Function that updates the users JSON file
var readFile = function () {
    var users = fs.readFileSync(pathToUsersJson);
    return JSON.parse(users);
};
exports.usersJson = readFile();
var writeToFile = function () {
    process.nextTick(function () {
        fs.writeFileSync(pathToUsersJson, JSON.stringify(exports.usersJson));
    });
};
// Functions that manipulate users data
exports.addUserToJson = function (user) {
    exports.usersJson.push(user);
    writeToFile();
};
exports.editUserOnJson = function (user) {
    var editIndex = exports.usersJson.findIndex(function (u) { return u.id === user.id; });
    exports.usersJson[editIndex] = user;
    writeToFile();
};
exports.delUserFromJson = function (id) {
    var userToDelete = exports.usersJson.findIndex(function (user) { return user.id === id; });
    exports.usersJson.splice(userToDelete, 1);
    writeToFile();
};
// Functions that manipulate recipes for users
exports.findUserOnDb = function (id) {
    var userIndex = exports.usersJson.findIndex(function (user) { return user.id === id; });
    console.log(exports.usersJson[userIndex]);
    return exports.usersJson[userIndex];
};
exports.addRecipeToJson = function (id, recipe) {
    readFile();
    var user = exports.findUserOnDb(id);
    user.recipes.push(recipe);
    writeToFile();
};
