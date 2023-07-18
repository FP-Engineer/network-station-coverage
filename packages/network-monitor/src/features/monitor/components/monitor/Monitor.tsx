import { ErrorMessage } from '../../../../components/error-message';
import { LoadingIndicator } from '../../../../components/loading-indicator';
import { StationsConnector } from '../../connectors';
import { DevicesConnector } from '../../connectors/devices';
import { createCoverageDecorator } from '../../decorators';
import { Network } from '../network';

export type Props = {
	useStations: StationsConnector;
	useDevices: DevicesConnector;
}

export const Monitor: React.FC<Props> = ({ useStations, useDevices }) => {

	const {
		error: stationsError,
		isLoading: isLoadingStations,
		data: stations,
	} = useStations();

	const {
		error: devicesError,
		isLoading: isLoadingDevices,
		data: devices,
	} = useDevices();

	if (isLoadingStations || isLoadingDevices) {
		return <LoadingIndicator />;
	}

	if (stationsError) {
		return <ErrorMessage>{ stationsError }</ErrorMessage>
	}

	if (devicesError) {
		return <ErrorMessage>{ devicesError }</ErrorMessage>
	}

	if (stations && devices) {

		const withCoverage = createCoverageDecorator(stations);
		const decoratedDevices = devices.map(withCoverage);

		return <Network stations={stations} devices={decoratedDevices} />;
	}

	return null;
};

export default Monitor;