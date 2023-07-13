import { container } from './ErrorMessage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

type Props = {
	children: string,
}

export const ErrorMessage: React.FC<Props> = ({ children }) => {

	return (
		<div className={ container }>
			<FontAwesomeIcon icon={ faBug } />
			{ children }
		</div>
	);
};

export default ErrorMessage;