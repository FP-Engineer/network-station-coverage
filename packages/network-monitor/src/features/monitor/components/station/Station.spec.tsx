import { render } from '@testing-library/react';
import { Station } from './Station';

describe('Station Test Suite', () => {

	it('renders without crashing.', () => {

		render(<Station location={{x: 0, y: 0}} reach={0} />);
	});
});