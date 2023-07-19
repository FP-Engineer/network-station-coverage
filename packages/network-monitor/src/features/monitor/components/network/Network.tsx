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
				gridTemplateColumns: `repeat(${maxX}, 1fr)`,
				gridTemplateRows: `repeat(${maxY}, 1fr)`,
			}}
		>
			{stations?.map((station) => (
				<span style={{
					gridColumnStart: station.location.x,
					gridRowStart: station.location.y,
				}}>
					<Station {...station} />
				</span>
			))}
			{devices?.map((device) => (
				<span style={{
					gridColumnStart: device.location.x,
					gridRowStart: device.location.y,
				}}>
					<Device {...device} />
				</span>
			))}
		</div>
	);
		
};

export default Network;