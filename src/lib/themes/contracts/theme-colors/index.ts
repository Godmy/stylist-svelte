import type { Scale } from '../../tokens/scale';

export interface ThemeColors {
	primary: Scale;
	secondary: Scale;
	success: Scale;
	warning: Scale;
	danger: Scale;
	neutral: Scale;
	background: {
		primary: string;
		secondary: string;
		tertiary: string;
	};
	text: {
		primary: string;
		secondary: string;
		tertiary: string;
		inverse: string;
	};
	border: {
		primary: string;
		secondary: string;
		tertiary: string;
	};
}
