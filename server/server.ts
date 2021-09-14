const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// Import routes
// const booksRoute = require('./routes/booksRoute')

// Import middleware
// const { sendCookie } = require('./middleware/sendCookie')

// Use routes:
// app.use('/books', booksRoute)

app.listen(port, () => console.log(`Server listening on port ${port}...`));
