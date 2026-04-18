import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { SPLIT_LAYOUT_GAP_MAP as GAP_MAP } from '$stylist/layout/const/map/split-layout-gap-map';
import { SPLIT_LAYOUT_SIZE_MAP as SIZE_MAP } from '$stylist/layout/const/map/split-layout-size-map';
import { SPLIT_LAYOUT_SIZE_RESPONSIVE_MAP as SIZE_RESPONSIVE_MAP } from '$stylist/layout/const/map/split-layout-size-responsive-map';
import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
import type { SplitLayoutDirection } from '$stylist/layout/type/enum/split-layout-direction';
import type { SplitLayoutPanelSize } from '$stylist/layout/type/enum/split-layout-panel-size';

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
