import { render } from '@testing-library/react';
import { Network } from './Network';

describe('Network Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Network useStations={() => ({isLoading: false})} />);
	});
});