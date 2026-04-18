import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotDataTableColumn<T extends Record<string, unknown>> {
	key: keyof T;
	title: string;
	sortable?: boolean;
	headerClass?: string;
	cellClass?: string;
	render?: (value: unknown, row: T) => string;
}
