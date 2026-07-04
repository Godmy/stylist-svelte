import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ShortcutsPanelProps as ShortcutsPanelProps } from '$stylist/information/type/struct/shortcuts-panel-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeShortcutsPanel
	extends ComputeIntersectAll<
		[ShortcutsPanelProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography]
	> {
	class?: string;
}
