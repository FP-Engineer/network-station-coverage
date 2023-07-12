import 'cross-fetch/polyfill';
import ServiceMock from 'openapi-backend';
import type { Document } from 'openapi-backend';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import json from 'api-schemas/src/station-api.json';

const stationsApi = new ServiceMock({ definition: json as Document });
stationsApi.register('notFound', (_, res, ctx) => res(ctx.status(404)));
stationsApi.register('notImplemented', async (c, res, ctx) => {
	const { status, mock } = stationsApi.mockResponseForOperation(c.operation.operationId ?? 'no id');
	ctx.status(status);
	return res(ctx.json(mock));
});
stationsApi.register('validationFail', (c, res, ctx) => res(
	ctx.status(400),
	ctx.json({ error: c.validation.errors }),
));

const server = setupServer(
	rest.get('/success_json', (_, res, ctx) => res(
		ctx.status(200),
		ctx.json({
			payload: 'success',
		}),
	)),
	rest.get('/success_not_json', (_, res, ctx) => res(
		ctx.status(200),
		ctx.text('not a json'),
	)),
	rest.get('/failure', (_, res, ctx) => res(
		ctx.status(418),
	)),
	rest.post('/success', (_, res, ctx) => res(
		ctx.status(200),
		ctx.json({ message: 'received' }),
	)),
	rest.post('/failure', (_, res, ctx) => res(
		ctx.status(400),
		ctx.json({ code: 1000, message: 'Bad Request' }),
	)),
	rest.get('/stations', async (req, res, ctx) => stationsApi.handleRequest(
		{
			path: req.url.pathname,
			query: req.url.search,
			method: req.method,
			body: req.bodyUsed ? await req.json() : null,
			headers: { ...req.headers.raw },
		},
		res,
		ctx,
	)),
);
  
beforeAll(() => server.listen());
afterAll(() => server.close());