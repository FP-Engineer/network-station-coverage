import { container } from './Network.css';
import type { StationsConnector } from '../../connectors';
import { LoadingIndicator } from '../../../../components/loading-indicator';
import { ErrorMessage } from '../../../../components/error-message';
import { Station } from '../station';

export type Location = Components.Schemas.Location;

export type Props = {
	useStations: StationsConnector
}

export const Network: React.FC<Props> = ({ useStations }) => {

	const {
		error,
		isLoading,
		data: stations,
	} = useStations();

	if (isLoading) {
		return <LoadingIndicator />;
	}

	if (error) {
		return <ErrorMessage>{ error }</ErrorMessage>
	}

	const locations: Location[] = stations?.map(({ location }) => location) ?? [];
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
		</div>
	);
		
};

export default Network;