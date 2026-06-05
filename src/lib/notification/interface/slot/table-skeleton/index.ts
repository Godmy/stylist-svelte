import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotTableSkeleton extends HtmlAttributesBase<HTMLDivElement> {
	rows?: number;
	columns?: number;
}
