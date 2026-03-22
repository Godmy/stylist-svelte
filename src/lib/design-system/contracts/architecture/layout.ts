import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { TokenAlignment, TokenJustification, TokenSize } from '$stylist/design-system/tokens';
import type { GridItem } from '$stylist/design-system/contracts/architecture/grid-item';

export interface GridLayoutProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	items: GridItem[];
	columns?: string;
	gap?: string | TokenSize;
	itemClass?: string;
	cols?: number;
	responsive?: boolean;
	alignItems?: TokenAlignment;
	justifyContent?: TokenJustification;
}


