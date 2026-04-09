import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export type SplitLayoutGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SplitLayoutDirection = 'horizontal' | 'vertical';
export type SplitLayoutPanelSize = '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';

const GAP_MAP: Record<SplitLayoutGap, string> = {
	none: 'gap-0',
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
};

const SIZE_MAP: Record<SplitLayoutPanelSize, string> = {
	'1/4': 'w-1/4',
	'1/3': 'w-1/3',
	'2/5': 'w-2/5',
	'1/2': 'w-1/2',
	'3/5': 'w-3/5',
	'2/3': 'w-2/3',
	'3/4': 'w-3/4'
};

const SIZE_RESPONSIVE_MAP: Record<SplitLayoutPanelSize, string> = {
	'1/4': 'lg:w-1/4',
	'1/3': 'lg:w-1/3',
	'2/5': 'lg:w-2/5',
	'1/2': 'lg:w-1/2',
	'3/5': 'lg:w-3/5',
	'2/3': 'lg:w-2/3',
	'3/4': 'lg:w-3/4'
};

export class SplitLayoutStyleManager {
	static getGapClass(gap: SplitLayoutGap): string {
		return GAP_MAP[gap];
	}

	static getDirectionClass(direction: SplitLayoutDirection, responsive: boolean): string {
		if (direction === 'horizontal') {
			return responsive ? 'flex-col lg:flex-row' : 'flex-row';
		}
		return 'flex-col';
	}

	static getPanelSizeClass(size: SplitLayoutPanelSize, responsive: boolean): string {
		return responsive ? SIZE_RESPONSIVE_MAP[size] : SIZE_MAP[size];
	}

	static getHostClass(
		direction: SplitLayoutDirection,
		gap: SplitLayoutGap,
		responsive: boolean,
		className?: string
	): string {
		return mergeClassNames(
			'flex',
			this.getDirectionClass(direction, responsive),
			this.getGapClass(gap),
			className
		);
	}
}
