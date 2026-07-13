export interface SlotCopyButton {
	class?: string;
	text?: string;
	label?: string;
	successMessage?: string;
	showIcon?: boolean;
	onSuccess?: (text: string) => void;
	onError?: (error: Error) => void;
}
