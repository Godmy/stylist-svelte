import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';

import type { TableCell } from '$stylist/design-system/tokens';
import type { ContentProp } from '$stylist/design-system/contracts/information/common';

export interface TableAttributesBase extends InformationHTMLAttributes<HTMLTableElement> {
	class?: string;
}

export interface TableElementAttributesBase<T extends HTMLElement = HTMLElement>
	extends InformationHTMLAttributes<T> {
	class?: string;
}

export interface TableProps extends TableAttributesBase, ContentProp {
	caption?: string;
	striped?: boolean;
	bordered?: boolean;
	hoverable?: boolean;
}

export interface TableRowProps extends TableElementAttributesBase<HTMLTableRowElement>, ContentProp {
	striped?: boolean;
	active?: boolean;
}

export interface TableCellProps extends TableElementAttributesBase<HTMLTableCellElement>, ContentProp {
	variant?: TableCell;
	align?: Alignment;
}

export interface TableSectionProps
	extends TableElementAttributesBase<HTMLTableSectionElement>,
		ContentProp {}


