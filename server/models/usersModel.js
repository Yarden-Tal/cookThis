"use strict";
exports.__esModule = true;
exports.Users = exports.User = void 0;
var uuidv4 = require('uuid').v4;
var User = /** @class */ (function () {
    function User(name, email, password, recipes, imageUrl) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.recipes = recipes;
        this.imageUrl = imageUrl;
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        this.users = [];
    }
    return Users;
}());
exports.Users = Users;
