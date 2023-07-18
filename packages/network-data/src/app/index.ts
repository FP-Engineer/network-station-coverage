import express, { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import PingRouter from '../features/ping/routes/index.js';
import StationsRouter from '../features/stations/routes/index.js';
import DevicesRouter from '../features/devices/routes/index.js';
import cors from 'cors';

const PORT = 8000;
const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(cors());
app.use(
	'/docs',
	swaggerUi.serve,
	swaggerUi.setup(undefined, {
		swaggerOptions: {
			url: '/swagger.json',
		},
	})
);

app.use(PingRouter);
app.use(StationsRouter);
app.use(DevicesRouter);

app.listen(PORT, () => {
	console.log('Server is running on port', PORT);
});
