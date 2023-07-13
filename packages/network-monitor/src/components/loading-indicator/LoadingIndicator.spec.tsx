import { render } from '@testing-library/react';
import { LoadingIndicator } from './LoadingIndicator';

describe('LoadingIndicator Test Suite', () => {

	it('renders without crashing.', () => {

		render(<LoadingIndicator />);
	});
});