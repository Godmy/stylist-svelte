import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type ComponentStats = {
	totalComponents: number;
	atoms: number;
	molecules: number;
	organisms: number;
};

export type Props = {
	/** Statistics data for components */
	stats: ComponentStats;
	/** Section ID for intersection observer */
	sectionId?: string;
	/** Enable animation on visible */
	animateOnVisible?: boolean;
	/** Animation duration in milliseconds */
	durationMs?: number;
	/** Number of animation steps */
	steps?: number;
} & InformationHTMLAttributes<HTMLDivElement>;
