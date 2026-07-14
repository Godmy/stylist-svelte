import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotDocumentPreview extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	title?: string;
	content?: string;
	format?: 'text' | 'json' | 'markdown';
	class?: string;
}
