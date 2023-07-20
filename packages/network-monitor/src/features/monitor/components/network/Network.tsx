import { Device } from '../device';
import { Station } from '../station';
import { container } from './Network.css';

export interface Props {
	stations: Components.Schemas.Station[],
	devices: Components.Schemas.Device[],
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
				<span style={{
					gridColumnStart: station.location.x + 1,
					gridRowStart: station.location.y + 1,
				}}>
					<Station {...station} />
				</span>
			))}
			{devices?.map((device) => (
				<span style={{
					gridColumnStart: device.location.x + 1,
					gridRowStart: device.location.y + 1,
				}}>
					<Device {...device} />
				</span>
			))}
		</div>
	);
		
};

export default Network;