import { style, keyframes } from '@vanilla-extract/css';

export const container = style({
	display: 'grid',
	containerType: 'inline-size',
	placeContent: 'center',
});

const rotation = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
	display: 'inline-block',
	inlineSize: 'clamp(0.5rem, 10cqi, 5rem)',
	aspectRatio: '1',
	border: '5px solid #bababa',
	borderBottomColor: 'transparent',
	borderRadius: '50%',
	boxSizing: 'border-box',
	animation: `${rotation} 1s linear infinite`,
});
