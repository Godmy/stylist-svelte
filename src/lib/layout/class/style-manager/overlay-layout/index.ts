import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export type OverlayLayoutAlign =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'center-left'
	| 'center'
	| 'center-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right'
	| 'fill';

const OVERLAY_ALIGN_MAP: Record<OverlayLayoutAlign, string> = {
	'top-left': 'top-0 left-0',
	'top-center': 'top-0 left-1/2 -translate-x-1/2',
	'top-right': 'top-0 right-0',
	'center-left': 'top-1/2 left-0 -translate-y-1/2',
	center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
	'center-right': 'top-1/2 right-0 -translate-y-1/2',
	'bottom-left': 'bottom-0 left-0',
	'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
	'bottom-right': 'bottom-0 right-0',
	fill: 'inset-0'
};

export class OverlayLayoutStyleManager {
	static getBaseClass(className?: string): string {
		return mergeClassNames('relative', className);
	}

	static getOverlayClass(
		align: OverlayLayoutAlign,
		zIndex: number,
		pointerEvents: boolean
	): string {
		return mergeClassNames(
			'absolute',
			OVERLAY_ALIGN_MAP[align],
			`z-[${zIndex}]`,
			!pointerEvents && 'pointer-events-none'
		);
	}

	static getOverlayAlignClass(align: OverlayLayoutAlign): string {
		return OVERLAY_ALIGN_MAP[align];
	}
}
