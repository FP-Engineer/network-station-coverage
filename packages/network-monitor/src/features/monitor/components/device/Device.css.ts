import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'inline-block',
});

export const notConnected = style({
	position: 'relative',
	'::after': {
		position: 'absolute',
		pointerEvents: 'none',
		content: 'x',
		color: 'red',
		right: '0',
		bottom: '0',
	}
});