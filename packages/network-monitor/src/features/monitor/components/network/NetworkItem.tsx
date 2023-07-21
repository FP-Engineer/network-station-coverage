import { ReactNode } from 'react';
import { item } from './NetworkItem.css';

export interface NetworkItemProps {
	location: Components.Schemas.Location;
	children:  ReactNode;
}

export const NetworkItem: React.FC<NetworkItemProps> = ({ location, children }) => {

	return (
		<span
			className={ item }
			style={{
				gridColumnStart: location.x + 1,
				gridRowStart: location.y + 1,
			}}
		>
			{ children }
		</span>
	);
};