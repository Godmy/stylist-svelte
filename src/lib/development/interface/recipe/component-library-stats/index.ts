import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeComponentLibraryStats extends ComputeIntersectAll<[((Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography & {
stats: ({
	totalComponents: number;
	atoms: number;
	molecules: number;
	organisms: number;
});
	sectionId?: string;
	animateOnVisible?: boolean;
	durationMs?: number;
	steps?: number;
	class?: string;
}))]> {}
