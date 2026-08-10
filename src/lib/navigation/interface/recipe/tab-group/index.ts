import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenShape } from '$stylist/layout/type/alias/shape';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/control/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeTabGroup
	extends ComputeIntersectAll<
		[
			((HTMLAttributes<HTMLDivElement> & {
tabs: ({
id: string;
	title: string;
	content: Snippet;
	disabled?: boolean;
})[];
	activeTab?: string;
	variant?: TokenShape;
	class?: string;
	tabListClass?: string;
	tabClass?: string;
	activeTabClass?: string;
	inactiveTabClass?: string;
	panelClass?: string;
	onValueInput?: (tabId: string) => void;
	onValueChange?: (tabId: string) => void;
	/** @deprecated use onValueChange */
	onChange?: (tabId: string) => void;
})),
			SlotText,
			SlotIcon,
			BehaviorSelectable<string>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
