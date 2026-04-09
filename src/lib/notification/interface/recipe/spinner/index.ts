import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { LoadingSpecificProps } from '$stylist/notification/interface/recipe/loading-specific-props';

export interface LoadingRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ISized,
		IShapeable,
		ISpaced,
		ProtoTheme,
		HTMLAttributes<HTMLDivElement>
	]>,
		LoadingSpecificProps
{}
