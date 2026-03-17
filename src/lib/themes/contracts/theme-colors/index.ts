import type { Scale } from '$stylist/themes/tokens/scale';

export interface ThemeColors {
	primary: Scale;
	secondary: Scale;
	success: Scale;
	info: Scale;
	warning: Scale;
	error: Scale;
	danger: Scale;
	neutral: Scale;
	background: {
		primary: string;
		secondary: string;
		tertiary: string;
		default: string;
		subtle: string;
	};
	text: {
		primary: string;
		secondary: string;
		tertiary: string;
		default: string;
		inverse: string;
	};
	border: {
		primary: string;
		secondary: string;
		tertiary: string;
	};
}


