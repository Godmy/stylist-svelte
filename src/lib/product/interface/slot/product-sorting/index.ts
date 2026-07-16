
export interface SlotProductSorting {
	class?: string;
	options?: Array<{ value: string; label: string }>;
	value?: string;
	oninput?: (event: Event) => void;
	onchange?: (event: Event) => void;
}
