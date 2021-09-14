"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, imageUrl, email, password, recipes) {
        this.id = Math.random().toString(16);
        this.name = name;
        this.imageUrl = imageUrl;
        this.email = email;
        this.password = password;
        this.recipes = recipes;
    }
    return User;
}());
exports.User = User;
