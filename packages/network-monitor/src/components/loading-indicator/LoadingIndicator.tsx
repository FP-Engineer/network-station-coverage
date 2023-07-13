import { container, spinner } from './LoadingIndicator.css';

export const LoadingIndicator: React.FC = () => {

	return (
		<div className={ container }>
			<span className={ spinner } role='img' aria-label='a rotating cycle indicating a pending action.'></span>
		</div>
	);
};

export default LoadingIndicator;