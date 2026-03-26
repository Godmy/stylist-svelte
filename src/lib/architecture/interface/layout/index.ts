import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { TokenJustification } from '$stylist/architecture/type/token/justification';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { GridItem } from '$stylist/architecture/type/attribute/grid-item';

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
