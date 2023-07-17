import { render } from '@testing-library/react';
import { Network } from './Network';

describe('Network Test Suite', () => {

	it('renders without crashing without data', () => {

		render(<Network stations={[]} devices={[]} />);
	});

	it('renders without crashing with data', () => {
		const stations = [{
			location: { x: 0, y: 0 },
			reach: 0,
		}];
		const devices = [{
			location: { x: 0, y: 0 },
		}]

		render(<Network stations={stations} devices={devices} />);
	});
});