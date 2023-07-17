import { renderHook } from '@testing-library/react-hooks';
import { useDevices } from '.';
import api from 'api-schemas/src/device-api.json';

describe('Devices Connector Test Suite', () => {
	it('should fetch devices from remote source.', async () => {
		const { result, waitForNextUpdate } = renderHook(useDevices);
		const expectation = api.paths['/devices'].get.responses[200].content['application/json'].schema.example;

		expect(result.current.isLoading).toBeTruthy();
		
		await waitForNextUpdate();

		expect(result.current.isLoading).toBeFalsy();
		expect(result.current.data).toMatchObject(expectation);
	});
});