import { render } from '@testing-library/react';
import { Network } from './Network';
import { Station } from '../../connectors';

describe('Network Test Suite', () => {

	it('renders without crashing fetching data.', () => {

		render(<Network useStations={() => ({isLoading: true})} />);
	});

	it('renders without crashing without data.', () => {

		render(<Network useStations={() => ({isLoading: false})} />);
	});

	it('renders without crashing with data.', () => {
		const stations: Station[] = [{
			location: { x: 0, y: 0 },
			reach: 0,
		}];

		render(<Network useStations={() => ({isLoading: false, data: stations})} />);
	});

	it('renders without crashing with connector error.', () => {

		render(<Network useStations={() => ({isLoading: false, error: 'Lorem Ipsum.'})} />);
	});
});