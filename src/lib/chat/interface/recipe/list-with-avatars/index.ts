import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotListWithAvatars } from '$stylist/chat/interface/slot/list-with-avatars';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeListWithAvatars
	extends ComputeIntersectAll<[SlotListWithAvatars, HTMLAttributes<HTMLDivElement>, SlotChildren, SlotText, SlotText, BehaviorSelectable<string>, BehaviorFocusable, BehaviorSizable, BehaviorScrollable]> {}
