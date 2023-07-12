import { renderHook } from '@testing-library/react-hooks';
import { useStations } from '.';
import api from 'api-schemas/src/station-api.json';

describe('Stations Connector Test Suite', () => {
	it('should fetch stations from remote source.', async () => {
		const { result, waitForNextUpdate } = renderHook(useStations);
		const expectation = api.paths['/stations'].get.responses[200].content['application/json'].schema.example;

		expect(result.current.isLoading).toBeTruthy();
		
		await waitForNextUpdate();

		expect(result.current.isLoading).toBeFalsy();
		expect(result.current.data).toMatchObject(expectation);
	});
});
