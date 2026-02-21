export interface AnimatedNumberProps {
	value: number;
	format?: 'number' | 'percent' | 'currency';
	prefix?: string;
	suffix?: string;
	separator?: string;
	decimals?: number;
	class?: string;
}

export interface NumberFlowProps {
	value?: number;
	locales?: string | string[];
	format?: Intl.NumberFormatOptions;
	prefix?: string;
	suffix?: string;
	class?: string;
}
