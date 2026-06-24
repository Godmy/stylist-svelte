import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotZoomControls } from '$stylist/control/interface/slot/zoom-controls';
import type { ZoomSpecificProps } from '$stylist/control/interface/recipe/zoom-specific-props';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeZoomControls
	extends ComputeIntersectAll<
			[
				SlotZoomControls,
				SlotText,
				SlotIcon,
				BehaviorClickable,
				BehaviorFocusable,
				BehaviorSized,
				BehaviorShapeable,
				BehaviorSpaced,
				SlotTheme,
				HTMLAttributes<HTMLDivElement>
			]
		>,
		ZoomSpecificProps {}
