const express = require('express');
const app = express();

const usersRoutes = require('./api/routes/users');

app.use('/api/users', usersRoutes);

module.exports = app;