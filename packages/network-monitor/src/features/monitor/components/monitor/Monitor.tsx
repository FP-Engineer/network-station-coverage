import { ErrorMessage } from '../../../../components/error-message';
import { LoadingIndicator } from '../../../../components/loading-indicator';
import { StationsConnector } from '../../connectors';
import { Network } from '../network';

export type Props = {
	useStations: StationsConnector;
}

export const Monitor: React.FC<Props> = ({ useStations }) => {

	const {
		error,
		isLoading,
		data: stations,
	} = useStations();

	if (isLoading) {
		return <LoadingIndicator />;
	}

	if (stations) {
		return <Network stations={stations} />;
	}

	if (error) {
		return <ErrorMessage>{ error }</ErrorMessage>
	}

	return null;
};

export default Monitor;