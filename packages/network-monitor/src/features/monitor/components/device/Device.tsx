import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item';
import { DeviceViewModel } from '../../models/device';

export type Props = DeviceViewModel;

export const Device: React.FC<Props> = ({ location, coveredByStationAt, withSpeed }) => {

	const deviceLocationLabel = `location: (${ location.x }, ${ location.y })`
	const coverageByStationAtLabel = coveredByStationAt
		? `covered by station at: (${coveredByStationAt.x}, ${coveredByStationAt.y})`
		: 'not connected';
	const withSpeedLabel = coveredByStationAt
		? `with speed: ${withSpeed?.toFixed(2)}`
		: null;
	const labels = [
		deviceLocationLabel,
		coverageByStationAtLabel,
		withSpeedLabel,
	].filter((x): x is string => !!x);

	return (
		<Item icon={ faMobile }>
			{ labels.map((x) => <>{ x }</>) }
		</Item>
	);
};

export default Device;