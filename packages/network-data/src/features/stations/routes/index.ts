import express from 'express';
import StationsController from '../controller/index.js';

const router = express.Router();

router.get('/stations', async (_req, res) => {

	const controller = new StationsController();
	const response = await controller.getStations();

	return res.send(response);
});

export default router;