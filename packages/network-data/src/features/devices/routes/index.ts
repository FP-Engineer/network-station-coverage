import express from 'express';
import DevicesController from '../controller/index.js';

const router = express.Router();

router.get('/devices', async (_req, res) => {

	const controller = new DevicesController();
	const response = await controller.getDevices();

	return res.send(response);
});

export default router;