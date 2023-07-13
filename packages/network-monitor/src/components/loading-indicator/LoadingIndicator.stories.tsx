import type { Meta, StoryObj } from '@storybook/react';

import { LoadingIndicator } from './LoadingIndicator';

const meta = {
	title: 'LoadingIndicator',
	component: LoadingIndicator,
	argTypes: {},
} satisfies Meta<typeof LoadingIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingIndicatorStory: Story = {
	args: {},
};