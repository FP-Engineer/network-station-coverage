import { Get, Route } from 'tsoa';
import { Device } from '../models/Device.js';

export type DevicesResponse = Device[];

@Route('devices')
export default class DevicesController {
	@Get('/')
	public async getDevices(): Promise<DevicesResponse> {

		return [
			{ location: { x: 0, y: 0 } },
			{ location: { x: 100, y: 100 } },
			{ location: { x: 15, y: 10 } },
			{ location: { x: 18, y: 18 } },
			{ location: { x: 13, y: 13 } },
			{ location: { x: 25, y: 99 } },
		];
	}
}