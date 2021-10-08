var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var cookieParser = require('cookie-parser');
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(cookieParser());
// Import routes
var usersRoute = require('./api/routes/usersRoute');
var recipesRoute = require('./api/routes/recipesRoute');
// Import middleware
// const { sendCookie } = require('./middleware/sendCookie')
// Use routes:
app.use('/users', usersRoute);
app.use('/recipes', recipesRoute);
app.listen(port, function () { return console.log("Server listening on port " + port + "..."); });
