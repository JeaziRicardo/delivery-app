const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error.middleware');
const loginRouter = require('./routes/login.router');
const registerRouter = require('./routes/register.route');

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', cors(), loginRouter);
app.use('/register', cors(), registerRouter);

app.use(errorMiddleware);

module.exports = app;
