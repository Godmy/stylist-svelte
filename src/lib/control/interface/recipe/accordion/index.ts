import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { AccordionSpecificProps } from '$stylist/control/interface/recipe/accordion-specific-props';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { IScrollable } from '$stylist/layout/interface/proto/scrollable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface AccordionRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		ISelectable<string | string[]>,
		IFocusable,
		ISized,
		IShapeable,
		ISpaced,
		IScrollable,
		ProtoTheme,
		HTMLAttributes<HTMLDivElement>
	]>,
		AccordionSpecificProps
{}
