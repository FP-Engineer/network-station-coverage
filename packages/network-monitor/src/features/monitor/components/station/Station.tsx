import { summary, details, info } from './Station.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

export type Props = Components.Schemas.Station;

export const Station: React.FC<Props> = ({ location, reach }) => {

	return (
		<details className={ summary }>
			<summary className={ details }>
				<FontAwesomeIcon icon={ faServer } />
			</summary>
			<ul className={ info }>
				<li>location: ({ location.x }, { location.y })</li>
				<li>reach: { reach }</li>
			</ul>
		</details>
	);
};

export default Station;