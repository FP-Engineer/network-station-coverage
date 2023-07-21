import cn from 'classnames';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item';
import { DeviceViewModel } from '../../models/device';
import { container, notConnected } from './Device.css'; 

export type Props = DeviceViewModel;

export const Device: React.FC<Props> = ({ location, coveredByStationAt, withSpeed }) => {

	const deviceLocationLabel = `location: (${ location.x }, ${ location.y })`;
	const isConnected = !!coveredByStationAt;
	const coverageByStationAtLabel = isConnected
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
		<div className={cn(container, { [notConnected]: !isConnected}) }>
			<Item icon={ faMobile }>
				{ labels.map((x) => <>{ x }</>) }
			</Item>
		</div>
	);
};

export default Device;