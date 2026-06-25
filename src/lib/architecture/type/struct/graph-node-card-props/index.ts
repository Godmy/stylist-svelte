import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { GraphNodeCardData } from '$stylist/architecture/type/struct/graph-node-card-data';

export type GraphNodeCardProps = {
	node: GraphNodeCardData;
	expanded?: boolean;
	showDetails?: boolean;
	selected?: boolean;
	highlight?: boolean;
	variant?: string;
	size?: string;
	class?: string;
} & LayoutHTMLAttributes<HTMLDivElement>;
