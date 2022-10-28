const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error.middleware');
const loginRouter = require('./routes/login.router');

const app = express();

app.use(express.json())
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter);

app.use(errorMiddleware);

module.exports = app;
