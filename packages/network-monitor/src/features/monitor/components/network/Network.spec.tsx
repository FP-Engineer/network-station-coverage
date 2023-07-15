import { render } from '@testing-library/react';
import { Network } from './Network';

describe('Network Test Suite', () => {

	it('renders without crashing without data', () => {

		render(<Network stations={[]} />);
	});

	it('renders without crashing with data', () => {

		render(<Network stations={[{
			location: { x: 0, y: 0 },
			reach: 0,
		}]} />);
	});
});