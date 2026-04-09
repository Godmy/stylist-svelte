import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';
import type { IScrollable } from '$stylist/layout/interface/proto/scrollable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { SkeletonSpecificProps } from '$stylist/notification/interface/recipe/skeleton-specific-props';

export interface SkeletonRecipe
	extends RecordArchitectureMerge<[
		ISized,
		IShapeable,
		ISpaced,
		IScrollable,
		ProtoTheme,
		HTMLAttributes<HTMLDivElement>
	]>,
		SkeletonSpecificProps
{}
