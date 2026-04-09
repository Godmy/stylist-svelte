import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ZoomSpecificProps } from '$stylist/control/interface/recipe/zoom-specific-props';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface ZoomRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IClickable,
		IFocusable,
		ISized,
		IShapeable,
		ISpaced,
		ProtoTheme,
		HTMLAttributes<HTMLDivElement>
	]>,
		ZoomSpecificProps
{}
