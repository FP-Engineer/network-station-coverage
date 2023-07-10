import { render } from '@testing-library/react';
import { App } from './App';

describe('App Test Suite', () => {

	it('renders without crashing.', () => {

		render(<App />);
	});
});