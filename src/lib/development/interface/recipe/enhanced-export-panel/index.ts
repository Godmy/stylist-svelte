import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { EnhancedExportPanelProps as EnhancedExportPanelProps } from '$stylist/development/type/struct/enhanced-export-panel-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeEnhancedExportPanel
	extends ComputeIntersectAll<
		[
			EnhancedExportPanelProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			SlotThemeBorder,
			SlotTypography
		]
	> {
	class?: string;
}
