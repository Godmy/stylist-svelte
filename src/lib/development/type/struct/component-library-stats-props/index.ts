import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ComponentLibraryStatsComponentStats } from '$stylist/development/type/struct/component-library-stats-component-stats';

export type ComponentLibraryStatsProps = {
	/** Statistics data for components */
	stats: ComponentLibraryStatsComponentStats;
	/** Section ID for intersection observer */
	sectionId?: string;
	/** Enable animation on visible */
	animateOnVisible?: boolean;
	/** Animation duration in milliseconds */
	durationMs?: number;
	/** Number of animation steps */
	steps?: number;
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & BehaviorTypography;
