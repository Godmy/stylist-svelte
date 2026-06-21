import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotListWithAvatars } from '$stylist/control/interface/slot/list-with-avatars';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeListWithAvatars
	extends ComputeIntersectAll<
		[
			SlotListWithAvatars,
			InteractionHTMLAttributes<HTMLDivElement>,
			SlotChildren,
			SlotLabel,
			SlotCaption,
			BehaviorSelectable<string>,
			BehaviorFocusable,
			BehaviorSizable,
			BehaviorScrollable
		]
	> {}