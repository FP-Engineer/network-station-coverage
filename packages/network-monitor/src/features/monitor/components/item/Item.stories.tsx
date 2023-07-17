import type { Meta, StoryObj } from '@storybook/react';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

import { Item } from './Item';

const meta = {
	title: 'Item',
	component: Item,
	argTypes: {},
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ItemStory: Story = {
	args: {
		icon: faBomb,
		children: [
			<>'Lorem Ipsum'</>
		],
	},
};