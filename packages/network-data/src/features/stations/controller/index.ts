import { Get, Route } from 'tsoa';
import { Station } from '../models/Station.js';

export interface StatonsResponse {
	stations: Station[];
}

@Route('stations')
export default class StationsController {
	@Get('/')
	public async getStations(): Promise<StatonsResponse> {

		return {
			stations: [
				{ location: { x: 0, y: 0 }, reach: 9 },
				{ location: { x: 20, y: 20 }, reach: 6 },
				{ location: { x: 10, y: 0 }, reach: 12 },
				{ location: { x: 5, y: 5 }, reach: 13 },
				{ location: { x: 99, y: 25 }, reach: 2 },
			],
		};
	}
}