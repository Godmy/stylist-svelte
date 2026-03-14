import type { Alignment } from '../../tokens/architecture/alignments';
﻿import type { HTMLAttributes } from 'svelte/elements';

import type { TableCell } from '../../tokens';
import type { ContentProp } from './common';

export interface TableAttributesBase extends HTMLAttributes<HTMLTableElement> {
	class?: string;
}

export interface TableElementAttributesBase<T extends EventTarget = HTMLElement>
	extends HTMLAttributes<T> {
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



