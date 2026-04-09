import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ButtonSpecificProps } from '$stylist/control/interface/recipe/button-specific-props';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface ButtonRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IBadgeSlot,
		IClickable,
		IFocusable,
		ISized,
		IShapeable,
		ProtoTheme,
		HTMLAttributes<HTMLButtonElement>
	]>,
		ButtonSpecificProps
{}
