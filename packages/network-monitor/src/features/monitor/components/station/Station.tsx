import { faServer } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item';

export type Props = Components.Schemas.Station;

export const Station: React.FC<Props> = ({ location, reach }) => {

	return (
		<Item icon={ faServer }>
			<li>location: ({ location.x }, { location.y })</li>
			<li>reach: { reach }</li>
		</Item>
	);
};

export default Station;