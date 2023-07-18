import { render } from '@testing-library/react';
import { Monitor } from './Monitor';
import { Station } from '../../connectors';
import { Device } from '../../connectors/devices';

describe('Monitor Test Suite', () => {

	it('renders without crashing fetching data.', () => {

		render(
			<Monitor
				useStations={() => ({isLoading: true})}
				useDevices={() => ({isLoading: true})}
			/>
		);
	});

	it('renders without crashing without data.', () => {

		render(
			<Monitor
				useStations={() => ({isLoading: false})}
				useDevices={() => ({isLoading: false})}
			/>
		);
	});

	it('renders without crashing with data.', () => {

		const stations: Station[] = [{
			location: { x: 0, y: 0 },
			reach: 0,
		}];
		const devices: Device[] = [{
			location: { x: 0, y: 0 },
		}];

		render(
			<Monitor
				useStations={() => ({isLoading: false, data: stations})}
				useDevices={() => ({isLoading: false, data: devices})}
			/>
		);
	});

	it('renders without crashing with connector error.', () => {

		render(
			<Monitor
				useStations={() => ({isLoading: false, error: 'Lorem Ipsum.'})}
				useDevices={() => ({isLoading: false, error: 'Lorem Ipsum.'})}
			/>
		);
	});
});