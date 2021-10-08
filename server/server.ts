const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.json());
app.use(cookieParser());

// Import routes
const usersRoute = require('./api/routes/usersRoute');
const recipesRoute = require('./api/routes/recipesRoute');

// Import middleware
// const { sendCookie } = require('./middleware/sendCookie')

// Use routes:
app.use('/users', usersRoute);
app.use('/recipes', recipesRoute);

app.listen(port, () => console.log(`Server listening on port ${port}...`));
