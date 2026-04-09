import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item';

export type IMessageComposerProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	onSendMessage?: (message: string) => void;
	onAttachmentClick?: () => void;
	onVoiceClick?: () => void;
	showAttachmentButton?: boolean;
	showVoiceButton?: boolean;
	inputClass?: string;
	buttonClass?: string;
};
