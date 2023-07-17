import { render } from '@testing-library/react';
import { Item } from './Item';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';

describe('Item Test Suite', () => {

	it('renders without crashing.', () => {

		render(
			<Item icon={ faIceCream }>
				<>Lorem Ipsum</>
			</Item>
		);
	});
});