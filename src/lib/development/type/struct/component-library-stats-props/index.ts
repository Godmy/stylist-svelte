import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
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
} & InformationHTMLAttributes<HTMLDivElement>;
