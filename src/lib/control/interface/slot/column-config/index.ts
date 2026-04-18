import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotColumnConfig {
	key: string;
	header: string;
	visible: boolean;
	sortable?: boolean;
	filterable?: boolean;
	width?: string;
}
