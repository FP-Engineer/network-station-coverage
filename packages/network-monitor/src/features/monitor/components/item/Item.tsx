import { summary, details, info } from './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactElement, Children } from 'react';

export type Props = {
	icon: IconDefinition,
	children: ReactElement | ReactElement[],
}

export const Item: React.FC<Props> = ({ icon, children }) => {

	return (
		<details className={ summary }>
			<summary className={ details }>
				<FontAwesomeIcon icon={ icon } />
			</summary>
			<ul className={ info }>
				{ Children.map(children, (child: ReactElement) => <li>{ child }</li>) }
			</ul>
		</details>
	);
};

export default Item;