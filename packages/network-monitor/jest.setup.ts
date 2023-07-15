import 'cross-fetch/polyfill';
import server from './mocks/server';

jest.mock('./src/app/Constants.ts', () => ({
	networkDataServiceUrl: '',
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());