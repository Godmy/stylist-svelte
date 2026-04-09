import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type MessageInputContract = RecordArchitectureMerge<
	[
		{
			disabled?: boolean;
			placeholder?: string;
			showAttachment?: boolean;
			showEmoji?: boolean;
			showSend?: boolean;
			onSendMessage?: (content: string) => void;
			onAttachClick?: () => void;
			onEmojiClick?: () => void;
			onMessageInput?: (content: string) => void;
		},
		InteractionHTMLAttributes<HTMLDivElement>
	]
>;
