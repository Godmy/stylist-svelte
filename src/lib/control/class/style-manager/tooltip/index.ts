import type { TokenSize } from '$stylist/layout/type/enum/size';

const TOOLTIP_POSITION_CLASSES: Record<string, string> = {
	top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
	'top-start': 'bottom-full left-0 mb-2',
	'top-end': 'bottom-full right-0 mb-2',
	bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
	'bottom-start': 'top-full left-0 mt-2',
	'bottom-end': 'top-full right-0 mt-2',
	left: 'right-full top-1/2 -translate-y-1/2 mr-2',
	'left-start': 'right-full top-0 mr-2',
	'left-end': 'right-full bottom-0 mr-2',
	right: 'left-full top-1/2 -translate-y-1/2 ml-2',
	'right-start': 'left-full top-0 ml-2',
	'right-end': 'left-full bottom-0 ml-2'
};

const TOOLTIP_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'px-2 py-1 text-xs max-w-[150px]',
	sm: 'px-2.5 py-1.5 text-xs max-w-[200px]',
	md: 'px-3 py-2 text-sm max-w-[250px]',
	lg: 'px-4 py-2.5 text-base max-w-[300px]',
	xl: 'px-5 py-3 text-base max-w-[350px]',
	'2xl': 'px-6 py-3.5 text-lg max-w-[400px]',
	'1/4': 'px-2 py-1 text-xs max-w-[150px]',
	'1/3': 'px-2.5 py-1.5 text-xs max-w-[200px]',
	'2/5': 'px-2.5 py-1.5 text-xs max-w-[200px]',
	'1/2': 'px-3 py-2 text-sm max-w-[250px]',
	'3/5': 'px-3 py-2 text-sm max-w-[250px]',
	'2/3': 'px-4 py-2.5 text-base max-w-[300px]',
	'3/4': 'px-5 py-3 text-base max-w-[350px]',
	full: 'px-6 py-3.5 text-lg max-w-none w-full'
};

export class TooltipStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getTooltipPositionClass(position: string = 'top'): string {
		return TOOLTIP_POSITION_CLASSES[position] ?? TOOLTIP_POSITION_CLASSES.top;
	}

	static getTooltipClasses(
		position: string = 'top',
		size: TokenSize = 'sm',
		className?: string
	): string {
		return this.join([
			'absolute z-50 rounded-md bg-[var(--color-neutral-900)] text-[var(--color-text-inverse)] shadow-lg',
			'pointer-events-none opacity-0 data-[state=visible]:opacity-100 transition-opacity',
			this.getTooltipPositionClass(position),
			TOOLTIP_SIZE_CLASSES[size] ?? TOOLTIP_SIZE_CLASSES.sm,
			className
		]);
	}
}
