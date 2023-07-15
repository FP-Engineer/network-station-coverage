import { globalStyle, style } from "@vanilla-extract/css";

globalStyle('body', {
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
});

export const feature = style({
	inlineSize: 'clamp(16rem, 90vw, 70rem)',
	margin: '1rem auto',
});