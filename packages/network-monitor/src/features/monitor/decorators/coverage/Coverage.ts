import { DeviceViewModel } from '../../models';

type Station = Components.Schemas.Station;
type Stations = Components.Schemas.Station[];
type Device = Components.Schemas.Device;
type Location = Components.Schemas.Location;

export interface CoverageDecorator {
	(device: Components.Schemas.Device): DeviceViewModel
}

export interface CoverageFactory {
	(stations: Stations): CoverageDecorator;
}

export interface Connection {
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

export function determineBestConnection(stations: Stations, device: Device): Connection | null {

	const calculateSpeedToStation = (station: Station) => calculateSpeed(device, station);
	const createConnection = (station: Station): Connection => ({
		toStationAt: station.location,
		withSpeed: calculateSpeedToStation(station)
	});
	const sortBySpeed = (lhs: Connection, rhs: Connection) => rhs.withSpeed - lhs.withSpeed;
	const connections: Connection[] = stations.map(createConnection);
	const sortedConnections: Connection[] = connections.sort(sortBySpeed);
	const functionalConnections: Connection[] = sortedConnections.filter(({ withSpeed }) => withSpeed > 0);
	const bestConnectionOptional = functionalConnections[0] ?? null;

	return bestConnectionOptional;
}

export const createCoverageDecorator: CoverageFactory = (stations: Stations) => {

	return (device: Components.Schemas.Device) => {

		const connection: Connection | null = determineBestConnection(stations, device);

		return {
			...device,
			coveredByStationAt: connection?.toStationAt,
			withSpeed: connection?.withSpeed,
		};
	};
}