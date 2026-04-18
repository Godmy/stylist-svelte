import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { OVERLAY_ALIGN_MAP } from '$stylist/layout/const/map/overlay-align-map';
import type { OverlayLayoutAlign } from '$stylist/layout/type/enum/overlay-layout-align';

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
