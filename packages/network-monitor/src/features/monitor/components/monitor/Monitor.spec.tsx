import { render } from '@testing-library/react';
import { Monitor } from './Monitor';
import { Station } from '../../connectors';

describe('Monitor Test Suite', () => {

	it('renders without crashing fetching data.', () => {

		render(<Monitor useStations={() => ({isLoading: true})} />);
	});

	it('renders without crashing without data.', () => {

		render(<Monitor useStations={() => ({isLoading: false})} />);
	});

	it('renders without crashing with data.', () => {
		const stations: Station[] = [{
			location: { x: 0, y: 0 },
			reach: 0,
		}];

		render(<Monitor useStations={() => ({isLoading: false, data: stations})} />);
	});

	it('renders without crashing with connector error.', () => {

		render(<Monitor useStations={() => ({isLoading: false, error: 'Lorem Ipsum.'})} />);
	});
});