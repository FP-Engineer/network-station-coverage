import type { Meta, StoryObj } from '@storybook/react';

import { Network } from './Network';

const meta = {
	title: 'Network',
	component: Network,
	argTypes: {},
} satisfies Meta<typeof Network>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NetworkStory: Story = {
	args: {
		stations: [{
			location: {x: 0, y: 0},
			reach: 1,
		}, {
			location: {x: 10, y: 10},
			reach: 1,
		}],
		devices: [{
			location: {x: 5, y: 5}
		}]
	},
};