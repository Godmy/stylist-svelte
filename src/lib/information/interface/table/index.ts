import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
import type { TokenTableCell } from '$stylist/information/type/token/table-cell';
import type { ContentProp } from '$stylist/information/type/attribute/common';

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
	variant?: TokenTableCell;
	align?: TokenAlignment;
}

export interface TableSectionProps
	extends TableElementAttributesBase<HTMLTableSectionElement>,
		ContentProp {}



