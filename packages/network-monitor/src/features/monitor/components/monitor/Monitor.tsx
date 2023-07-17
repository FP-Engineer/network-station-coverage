import { ErrorMessage } from '../../../../components/error-message';
import { LoadingIndicator } from '../../../../components/loading-indicator';
import { StationsConnector } from '../../connectors';
import { DevicesConnector } from '../../connectors/devices';
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
		return <Network stations={stations} devices={devices} />;
	}

	return null;
};

export default Monitor;