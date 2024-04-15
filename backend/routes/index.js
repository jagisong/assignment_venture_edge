const { Router } = require('express');
const userRoutes = require('./userRoutes');
const resolutionRoutes = require('./resolutionRoutes');

const appRoutes = Router();

appRoutes.use("/user", userRoutes);
appRoutes.use("/resolution", resolutionRoutes);

module.exports = appRoutes;