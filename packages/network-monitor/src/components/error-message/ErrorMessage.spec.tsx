import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage Test Suite', () => {

	it('renders without crashing.', () => {

		render(<ErrorMessage>Lorem Ipsum.</ErrorMessage>);
	});
});