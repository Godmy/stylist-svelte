import type { HTMLAttributes } from 'svelte/elements';
/**
 * MessageComposer types and interfaces following SOLID principles
 */


export interface SlotMessageComposer extends HTMLAttributes<HTMLDivElement> {
	value?: string;
	placeholder?: string;
	class?: string;
	inputClass?: string;
	buttonClass?: string;
	disabled?: boolean;
	showAttachmentButton?: boolean;
	showVoiceButton?: boolean;
	onSendMessage?: (text: string) => void;
	onAttachmentClick?: () => void;
	onVoiceClick?: () => void;
}
