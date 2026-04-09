import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StickyLayoutStyleManager {
	static getHostClass(fillHeight: boolean, className?: string): string {
		return mergeClassNames('flex flex-col', fillHeight && 'h-full', className);
	}

	static getStickyHeaderClass(shadow: boolean): string {
		return mergeClassNames('sticky top-0 z-10 shrink-0', shadow && 'shadow-sm');
	}

	static getStickyFooterClass(shadow: boolean): string {
		return mergeClassNames('sticky bottom-0 z-10 shrink-0', shadow && 'shadow-[0_-1px_3px_rgba(0,0,0,0.1)]');
	}

	static getScrollableContentClass(fillHeight: boolean): string {
		return mergeClassNames('flex-1 min-h-0', fillHeight && 'overflow-y-auto');
	}
}
