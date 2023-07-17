import { style } from '@vanilla-extract/css';

export const summary = style({
	display: 'inline-block',
	inlineSize: '3rem',
	aspectRatio: '1',
});

export const details = style({
	position: 'relative',
	display: 'inline-block',
	cursor: 'pointer',
	borderRadius: '3px',
});

export const info = style({
	position: 'absolute',
	backgroundColor: '#EEE',
	inlineSize: 'fit-content',
	borderRadius: '3px',
	listStyle: 'none',
	margin: '0',
	padding: '0.25rem',
});