import { get, handleContentType, handleError, request } from '.';
import { ErrorMessage, HTTPResponseHeader, defaultRequestSettings } from './Constants';

describe('Api Client Network Layer Test Suite', () => {
	it('returns response if ok', () => {
		const response = new Response(null, { status: 200 });
		expect(handleError(response)).toEqual(response);
	});

	it('test rejects promise with status text if not ok', () => {
		const response = new Response(null, { status: 404, statusText: 'Not Found' });
		expect(handleError(response)).rejects.toEqual('Not Found');
	});

	it('test json response', () => {
		const mockResponse = new Response('{"name": "John Doe"}', {
			headers: {
				'content-type': 'application/json'
			}
		});

		return handleContentType(mockResponse).then(data => {
			expect(data).toEqual({name: 'John Doe'});
		});
	});

	it('test unsupported content type rejection', () => {
		const headers: HeadersInit = [[HTTPResponseHeader.contentType, 'text/html']];
		const res = new Response(null, {
			headers
		});

		expect(handleContentType(res)).rejects.toEqual(ErrorMessage.unsupportedContentType);
	});

	it('test rejects with error message if no content type header', () => {
		const res = new Response(null, { status: 200 });

		expect(handleContentType(res)).rejects.toEqual(ErrorMessage.unsupportedContentType);
	});

	it('test default request settings', () => {
		const url = './';
		const fetchSpy = jest.spyOn(window, 'fetch');
	
		request(url);
	
		expect(fetchSpy).toHaveBeenCalledWith(url, defaultRequestSettings);
	});

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
