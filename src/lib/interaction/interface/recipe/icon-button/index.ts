import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface IconButtonRecipe
	extends RecordArchitectureMerge<[
		IIconSlot,
		IClickable,
		IFocusable,
		ISized,
		IShapeable,
		ISpaced,
		ProtoTheme,
		HTMLAttributes<HTMLButtonElement>
	]>
{}
