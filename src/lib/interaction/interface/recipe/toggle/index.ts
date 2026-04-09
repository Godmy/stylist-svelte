import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { ToggleSpecificProps } from '$stylist/interaction/interface/recipe/toggle-specific-props';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface ToggleRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		ISelectable<boolean>,
		IFocusable,
		ISized,
		IShapeable,
		ISpaced,
		ProtoTheme,
		HTMLAttributes<HTMLInputElement>
	]>,
		ToggleSpecificProps
{}
