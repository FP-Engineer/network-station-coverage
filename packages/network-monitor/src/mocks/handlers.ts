import ServiceMock from 'openapi-backend';
import type { Document } from 'openapi-backend';
import { DefaultBodyType, MockedRequest, RestHandler, rest } from 'msw';

import stationSchema from 'api-schemas/src/station-api.json';
import deviceSchema from 'api-schemas/src/device-api.json';


const stationsApi = new ServiceMock({ definition: stationSchema as Document });
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

const devicesApi = new ServiceMock({ definition: deviceSchema as Document });
devicesApi.register('notFound', (_, res, ctx) => res(ctx.status(404)));
devicesApi.register('notImplemented', async (c, res, ctx) => {
	const { status, mock } = devicesApi.mockResponseForOperation(c.operation.operationId ?? 'no id');
	ctx.status(status);
	return res(ctx.json(mock));
});
devicesApi.register('validationFail', (c, res, ctx) => res(
	ctx.status(400),
	ctx.json({ error: c.validation.errors }),
));

export default [
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
	rest.get('/devices', async (req, res, ctx) => devicesApi.handleRequest(
		{
			path: req.url.pathname,
			query: req.url.search,
			method: req.method,
			body: req.bodyUsed ? await req.json() : null,
			headers: { ...req.headers.raw },
		},
		res,
		ctx,
	))
] as RestHandler<MockedRequest<DefaultBodyType>>[];