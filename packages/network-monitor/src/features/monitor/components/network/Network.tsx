import { Device } from '../device';
import { Station } from '../station';
import { container } from './Network.css';
import { NetworkItem } from './NetworkItem';

export interface Props {
	stations: Components.Schemas.Station[];
	devices: Components.Schemas.Device[];
}

export const Network: React.FC<Props> = ({ stations, devices }) => {

	const locations: Components.Schemas.Location[] = [...stations, ...devices].map(({ location }) => location);
	const maxX = Math.max(...locations.map(({ x }) => x));
	const maxY = Math.max(...locations.map(({ y }) => y));

	return (
		<div
			className={ container }
			style={{
				gridTemplateColumns: `repeat(${maxX}, auto)`,
				gridTemplateRows: `repeat(${maxY}, auto)`,
			}}
		>
			{stations?.map((station) => (
				<NetworkItem key={`station_${station.location.x}_${station.location.y}`} location={station.location}>
					<Station {...station} />
				</NetworkItem>
			))}
			{devices?.map((device) => (
				<NetworkItem key={`device${device.location.x}_${device.location.y}`} location={device.location}>
					<Device {...device} />
				</NetworkItem>
			))}
		</div>
	);
		
};

export default Network;