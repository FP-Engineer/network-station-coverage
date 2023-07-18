import { DeviceViewModel } from '../../models';

type Station = Components.Schemas.Station;
type Stations = Components.Schemas.Station[];
type Device = Components.Schemas.Device;
type Location = Components.Schemas.Location;

export interface ICoverageDecorator {
	(device: Components.Schemas.Device): DeviceViewModel
}

export interface ICoverageFactory {
	(stations: Stations): ICoverageDecorator;
}

export interface IConnection {
	toStationAt: Location,
	withSpeed: number,
}

export function calculateDistance(lhs: Device, rhs: Station): number {

	const dx = rhs.location.x - lhs.location.x;
	const dy = rhs.location.y - lhs.location.y;
	const distance = Math.sqrt(
		Math.pow(dx, 2) + Math.pow(dy, 2)
	);

	return distance;
}

export function calculateSpeed(lhs: Device, rhs: Station): number {

	const distance = calculateDistance(lhs, rhs);
	const speed = distance <= rhs.reach
		? Math.pow(rhs.reach - distance, 2)
		: 0;

	return speed;
}

export function determineBestConnection(stations: Stations, device: Device): IConnection | null {

	const calculateSpeedToStation = (station: Station) => calculateSpeed(device, station);
	const createConnection = (station: Station): IConnection => ({
		toStationAt: station.location,
		withSpeed: calculateSpeedToStation(station)
	});
	const sortBySpeed = (lhs: IConnection, rhs: IConnection) => rhs.withSpeed - lhs.withSpeed;
	const connections: IConnection[] = stations.map(createConnection);
	const sortedConnections: IConnection[] = connections.sort(sortBySpeed);
	const functionalConnections: IConnection[] = sortedConnections.filter(({ withSpeed }) => withSpeed > 0);
	const bestConnectionOptional = functionalConnections[0] ?? null;

	return bestConnectionOptional;
}

export const createCoverageDecorator: ICoverageFactory = (stations: Stations) => {

	return (device: Components.Schemas.Device) => {

		const connection: IConnection | null = determineBestConnection(stations, device);

		return {
			...device,
			coveredByStationAt: connection?.toStationAt,
			withSpeed: connection?.withSpeed,
		};
	};
}