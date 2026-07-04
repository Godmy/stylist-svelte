import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ComponentLibraryStatsComponentStats } from '$stylist/development/type/struct/component-library-stats-component-stats';

export interface SlotComponentLibraryStats
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
	stats: ComponentLibraryStatsComponentStats;
	sectionId?: string;
	animateOnVisible?: boolean;
	durationMs?: number;
	steps?: number;
	class?: string;
}
