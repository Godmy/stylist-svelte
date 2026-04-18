import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { InteractiveStyleManager } from '$stylist/layout/class/style-manager/interactive';
import type { LayoutShape } from '$stylist/layout/type/struct/item-layout-shape';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { CARD_SHAPE_MAP as SHAPE_MAP } from '$stylist/layout/const/map/card-shape-map';
import { CARD_PADDING_MAP as PADDING_MAP } from '$stylist/layout/const/map/card-padding-map';
import { CARD_ELEVATION_MAP as ELEVATION_MAP } from '$stylist/layout/const/map/card-elevation-map';

export class CardStyleManager {
	static getShapeClass(shape: LayoutShape): string {
		return SHAPE_MAP[shape] ?? SHAPE_MAP.rounded;
	}

	static getPaddingClass(size: TokenSize): string {
		return PADDING_MAP[size] ?? PADDING_MAP.md;
	}

	static getElevationClass(elevation: number): string {
		const clamped = Math.min(Math.max(Math.round(elevation), 0), 6);
		return ELEVATION_MAP[clamped] ?? '';
	}

	static getHostClass(
		shape: LayoutShape,
		size: TokenSize,
		elevation: number,
		clickable: boolean,
		fullWidth: boolean,
		className?: string
	): string {
		return mergeClassNames(
			'relative flex flex-col overflow-hidden',
			'bg-[--color-background-primary]',
			'border border-[--color-border-primary]',
			this.getShapeClass(shape),
			this.getPaddingClass(size),
			this.getElevationClass(elevation),
			clickable && InteractiveStyleManager.getInteractiveContainerClass(),
			fullWidth && 'w-full',
			className
		);
	}

	static getMediaClass(): string {
		return '-mx-4 -mt-4 mb-4 overflow-hidden';
	}

	static getBodyClass(): string {
		return 'flex flex-col gap-1 flex-1';
	}

	static getFooterClass(): string {
		return 'mt-4 pt-4 border-t border-[--color-border-primary]';
	}
}
