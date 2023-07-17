import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item';

export type Props = Components.Schemas.Device & {
	coveredByStationAt?: Components.Schemas.Location
};

export const Device: React.FC<Props> = ({ location, coveredByStationAt }) => {

	const coverage = coveredByStationAt
		? `covered by station at: (${coveredByStationAt.x}, ${coveredByStationAt.y})`
		: 'not connected';

	return (
		<Item icon={ faMobile }>
			<li>location: ({ location.x }, { location.y })</li>
			<li>{ coverage }</li>
		</Item>
	);
};

export default Device;