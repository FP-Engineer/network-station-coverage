import { render } from '@testing-library/react';
import { Device } from './Device';

describe('Device Test Suite', () => {

	it('renders without crashing with coverage.', () => {

		render(<Device location={{x: 0, y: 0}} coveredByStationAt={{x: 0, y: 0}} />);
	});

	it('renders without crashing without coverage.', () => {

		render(<Device location={{x: 0, y: 0}} />);
	});
});