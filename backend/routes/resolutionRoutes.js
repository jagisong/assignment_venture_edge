const { Router } = require('express');
const { verifyToken } = require('../utils/tokenVerification');
const { createResolution, monthlyUpdatesResolution, getAllResolution } = require('../controllers/resolutionController');

const resolutionRoutes = Router();

resolutionRoutes.get("/getall",verifyToken, getAllResolution);
resolutionRoutes.post('/create', verifyToken, createResolution);
resolutionRoutes.put('/update/:id', verifyToken, monthlyUpdatesResolution);

module.exports = resolutionRoutes;