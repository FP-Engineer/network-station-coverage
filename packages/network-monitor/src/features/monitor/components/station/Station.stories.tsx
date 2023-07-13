import type { Meta, StoryObj } from '@storybook/react';

import { Station } from './Station';

const meta = {
	title: 'Station',
	component: Station,
	argTypes: {},
} satisfies Meta<typeof Station>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StationStory: Story = {
	args: {
		location: { x: 0, y: 0 },
		reach: 0,
	},
};