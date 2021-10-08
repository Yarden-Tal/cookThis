"use strict";
exports.__esModule = true;
exports.deleteUser = exports.editUser = exports.registerUser = exports.getAllUsers = void 0;
var dataHandler_1 = require("../../data/dataHandler");
var usersModel_1 = require("../../models/usersModel");
// Show all users ** WORKS **
exports.getAllUsers = function (req, res) {
    try {
        res.status(200).send(dataHandler_1.usersJson);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.registerUser = function (req, res) {
    try {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password, recipes = _a.recipes, imageUrl = _a.imageUrl;
        if (!name || !email || !password) {
            return res.status(400).send('Invalid params');
        }
        var newUser = new usersModel_1.User(name, email, password, recipes, imageUrl);
        dataHandler_1.addUserToJson(newUser);
        res.status(201).send({ newUser: newUser });
    }
    catch (error) {
        console.log(error.message);
    }
};
// Edit user (change username) ** WILL WAIT FOR F END **
exports.editUser = function (req, res) {
    try {
        // const { userId } = req.params;
        // if (!userId) return res.status(404).send('Id not found');
        // const data = req.body;
        // const { name, imageUrl } = data;
        // if (!name && !imageUrl) return res.status(404).send('No params found');
        // const user = { name, imageUrl };
        // editUserOnJson(user);
        // res.status(200);
    }
    catch (error) {
        console.log(error.message);
    }
};
// Delete user (close account) ** WORKS **
exports.deleteUser = function (req, res) {
    try {
        var userId = req.params.userId;
        if (!userId)
            return res.status(404).send('Id not found');
        dataHandler_1.delUserFromJson(userId);
        res.status(204).send({ ok: true });
    }
    catch (error) {
        console.log(error.message);
    }
};
