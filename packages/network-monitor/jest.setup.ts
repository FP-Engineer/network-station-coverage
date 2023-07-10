import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ServiceMock from 'openapi-backend';

// FIXME: import schema from node_modules
const stationsApi = new ServiceMock({ definition: '../api-schemas/src/station-api.json' });
stationsApi.register('notFound', (_, res, ctx) => res(ctx.status(404)));
stationsApi.register('notImplemented', async (c, res, ctx) => {
	const { status, mock } = stationsApi.mockResponseForOperation(c.operation.operationId ?? 'no id');
	ctx.status(status);
	return res(ctx.json(mock));
});

const server = setupServer(
	rest.all('/stations/*', async (req, res, ctx) => stationsApi.handleRequest(
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