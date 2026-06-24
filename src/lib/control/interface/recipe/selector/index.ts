import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotSelector } from '$stylist/control/interface/slot/selector';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeSelector
	extends ComputeIntersectAll<
		[
			SlotSelector,
			SlotText,
			SlotText,
			SlotIcon,
			BehaviorSelectable<string | string[]>,
			BehaviorFocusable,
			BehaviorSized,
			BehaviorShapeable,
			BehaviorSpaced,
			BehaviorScrollable,
			SlotTheme,
			HTMLAttributes<HTMLSelectElement>
		]
	> {}
