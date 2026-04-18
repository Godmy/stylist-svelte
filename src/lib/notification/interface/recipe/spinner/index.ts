import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface LoadingRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ISized,
		IShapeable,
		ISpaced,
		SlotTheme,
		HTMLAttributes<HTMLDivElement>
	]>
{}

