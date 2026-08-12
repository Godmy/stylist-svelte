import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/control/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { TokenSize } from '$stylist/theme/type/alias/size';
export interface RecipeListWithAvatars
	extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>, SlotChildren, SlotText, SlotText, BehaviorSelectable<string>, BehaviorFocusable, BehaviorSizable, BehaviorScrollable]> {
	items: {
	id: string;
	title: string;
	subtitle?: string;
	avatar?: string;
	status?: 'online' | 'offline' | 'away' | 'busy';
	description?: string;
	actions?: Array<{
		label: string;
		onClick: () => void;
		variant?: 'primary' | 'secondary' | 'danger';
	}>;
}[];
	showAvatar?: boolean;
	showStatus?: boolean;
	showSubtitle?: boolean;
	showDescription?: boolean;
	showActions?: boolean;
	/** Размер списка */
	size?: TokenSize;
	class?: string;
	itemClass?: string;
	avatarClass?: string;
	contentClass?: string;
	actionsClass?: string;
}
