import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export type MessageComposerContract = RecordArchitectureMerge<
	[
		{
			value?: string;
			placeholder?: string;
			inputClass?: string;
			buttonClass?: string;
			disabled?: boolean;
			showAttachmentButton?: boolean;
			showVoiceButton?: boolean;
			onSendMessage?: (text: string) => void;
			onAttachmentClick?: () => void;
			onVoiceClick?: () => void;
		},
		HTMLAttributes<HTMLDivElement>
	]
>;
