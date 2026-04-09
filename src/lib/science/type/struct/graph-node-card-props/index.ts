import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { GraphNodeCardData } from '$stylist/science/type/struct/graph-node-card-data';

export type GraphNodeCardProps = {
	node: GraphNodeCardData;
	expanded?: boolean;
	showDetails?: boolean;
	selected?: boolean;
	highlight?: boolean;
	variant?: string;
	size?: string;
	class?: string;
} & ArchitectureHTMLAttributes<HTMLDivElement>;
