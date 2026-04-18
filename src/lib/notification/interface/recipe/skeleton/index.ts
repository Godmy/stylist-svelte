import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SkeletonSpecificProps } from '$stylist/notification/interface/recipe/skeleton-specific-props';

export interface SkeletonRecipe
	extends StructIntersectAll<[
		ISized,
		IShapeable,
		ISpaced,
		IScrollable,
		SlotTheme,
		HTMLAttributes<HTMLDivElement>
	]>,
		SkeletonSpecificProps
{}

