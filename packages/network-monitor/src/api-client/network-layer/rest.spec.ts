import { get } from '.';
import { ErrorMessage } from './Constants';

describe('Api Client Network Layer Test Suite', () => {
	it('Get Payload should be served if provided', async () => {
		const { payload } = await get('/success_json');

		expect(payload).toBe('success');
	});

	it('Should fail if no json is returned', async () => {
		expect.assertions(1);

		await expect(get('/success_not_json')).rejects.toEqual(ErrorMessage.unsupportedContentType);
	});

	it('Should return the provided error message on failure', async () => {
		expect.assertions(1);

		await expect(get('/failure')).rejects.toEqual('I\'m a Teapot');
	});
});
