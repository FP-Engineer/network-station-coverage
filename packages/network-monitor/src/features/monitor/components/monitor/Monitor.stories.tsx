import type { Meta, StoryObj } from '@storybook/react';

import { Monitor } from './Monitor';

const meta = {
	title: 'Monitor',
	component: Monitor,
	argTypes: {},
} satisfies Meta<typeof Monitor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MonitorStory: Story = {
	args: {
		useStations: () => ({
			isLoading: false,
			data: [{
				location: {x: 0, y: 0},
				reach: 1,
			}, {
				location: {x: 10, y: 10},
				reach: 1,
			}]
		}),
	},
};