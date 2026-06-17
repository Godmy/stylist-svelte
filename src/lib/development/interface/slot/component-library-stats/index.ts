import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { ComponentLibraryStatsComponentStats } from '$stylist/development/type/struct/component-library-stats-component-stats';

export interface SlotComponentLibraryStats
	extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	stats: ComponentLibraryStatsComponentStats;
	sectionId?: string;
	animateOnVisible?: boolean;
	durationMs?: number;
	steps?: number;
	class?: string;
}
