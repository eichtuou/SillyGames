// load environment variables
require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const debug = require('debug')('appDebug');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const PORT = process.env.PORT || 1337;

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', routes);

// catch 404 errors
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// centralized error handler
app.use(errorHandler);

// start server
app.listen(PORT, () => {
    debug(`Server listening on port ${PORT}`);
    console.log(`Server running at http://localhost:${PORT}`);
});
