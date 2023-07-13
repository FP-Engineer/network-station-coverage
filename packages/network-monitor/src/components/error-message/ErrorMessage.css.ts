import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	justifyContent: 'center',
	gap: '0.5rem',
	padding: '1rem',
	border: '3px solid red',
	borderRadius: '3px',
	backgroundColor: '#FFA6A6',
});