import type { ColorScale } from '../../colors/scale';

export interface ThemeColors {
	primary: ColorScale;
	secondary: ColorScale;
	success: ColorScale;
	warning: ColorScale;
	danger: ColorScale;
	neutral: ColorScale;
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