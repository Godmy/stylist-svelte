import type { Snippet } from 'svelte';
import type { Props } from '$stylist/information/type/struct/props';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';

export interface SlotCopyButton
	extends Omit<
			Props,
			'children' | 'text' | 'label' | 'successMessage' | 'showIcon' | 'onSuccess' | 'onError'
		>,
		SlotButtonDom {
	class?: string;
	text?: string;
	label?: string;
	successMessage?: string;
	showIcon?: boolean;
	children?: Snippet;
	onSuccess?: (text: string) => void;
	onError?: (error: Error) => void;
}
