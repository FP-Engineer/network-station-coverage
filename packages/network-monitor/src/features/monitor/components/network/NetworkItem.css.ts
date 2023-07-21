import { style } from '@vanilla-extract/css';
import { container } from './Network.css';

export const item = style({
	selectors: {
		[`${container}:hover > &:not(:hover)`]: {
			opacity: '0.5',
		}
	}
});
