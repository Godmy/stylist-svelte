import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { Alignment, Justification, ComponentSize } from '$stylist/design-system/tokens';
import type { GridItem } from '$stylist/design-system/tokens/architecture/layout';

export interface GridLayoutProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	items: GridItem[];
	columns?: string;
	gap?: string | ComponentSize;
	itemClass?: string;
	cols?: number;
	responsive?: boolean;
	alignItems?: Alignment;
	justifyContent?: Justification;
}



