import type { Meta, StoryObj } from '@storybook/react';

import { Device } from './Device';

const meta = {
	title: 'Device',
	component: Device,
	argTypes: {},
} satisfies Meta<typeof Device>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DeviceStory: Story = {
	args: {
		location: {x: 0, y: 0},
		coveredByStationAt: {x: 1, y: 1}
	},
};