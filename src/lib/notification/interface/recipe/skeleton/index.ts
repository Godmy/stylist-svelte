import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { SkeletonSpecificProps as LegacySkeletonProps2 } from '$stylist/notification/interface/recipe/skeleton-specific-props';
import type { RecipeSkeletonProps as LegacySkeletonProps1 } from '$stylist/notification/interface/recipe/skeleton-props';
import type { SlotSkeleton as Slot } from '$stylist/notification/interface/slot/skeleton';
import type { SlotSkeleton as SlotSkeleton } from '$stylist/notification/interface/slot/skeleton';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SkeletonSpecificProps } from '$stylist/notification/interface/recipe/skeleton-specific-props';

export interface RecipeSkeleton
	extends ComputeIntersectAll<
			[
				AnyProperty,
				AnyProperty,
				AnyProperty,
				AnyProperty,
				LegacySkeletonProps2,
				LegacySkeletonProps1,
				Slot,
				SlotSkeleton,
				ISized,
				IShapeable,
				ISpaced,
				IScrollable,
				SlotTheme,
				HTMLAttributes<HTMLDivElement>
			]
		>,
		SkeletonSpecificProps {}
