export interface Scale {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
}

export const Scale: Scale = {
	50: '50',
	100: '100',
	200: '200',
	300: '300',
	400: '400',
	500: '500',
	600: '600',
	700: '700',
	800: '800',
	900: '900'
};

export type ScaleKey = keyof typeof Scale;
