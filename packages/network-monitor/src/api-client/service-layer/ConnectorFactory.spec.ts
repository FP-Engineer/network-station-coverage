import { renderHook } from '@testing-library/react-hooks';
import { connectRemoteData } from '.';

describe('Api Client Service Layer Test Suite', () => {
	it('should indicate fetching data.', async () => {
		const connector = connectRemoteData('/success_json');
		const { result, waitForNextUpdate } = renderHook(connector);
		
		expect(result.current.isLoading).toBeTruthy();

		await waitForNextUpdate();

		expect(result.current.isLoading).toBeFalsy();
	});

	it('should fetched data.', async () => {
		const connector = connectRemoteData('/success_json');
		const { result, waitForNextUpdate } = renderHook(connector);
		
		expect(result.current.data).toBeUndefined();
		expect(result.current.error).toBeUndefined();

		await waitForNextUpdate();

		expect(result.current.data).toBeDefined();
		expect(result.current.error).toBeUndefined();
	});

	it('should communicate errors.', async () => {
		const connector = connectRemoteData('/failure');
		const { result, waitForNextUpdate } = renderHook(connector);
		
		expect(result.current.data).toBeUndefined();
		expect(result.current.error).toBeUndefined();

		await waitForNextUpdate();

		expect(result.current.data).toBeUndefined();
		expect(result.current.error).toBeDefined();
	});
});
