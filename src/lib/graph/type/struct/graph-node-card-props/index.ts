import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { GraphNodeCardData } from '$stylist/graph/type/struct/graph-node-card-data';

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
