import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TierContent } from '$stylist/architecture/type/enum/tier';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export interface ChatPreviewMessage {
	text: string;
	sender: string;
	timestamp?: string;
	isOwn?: boolean;
	avatar?: string;
	status?: 'sent' | 'delivered' | 'read';
}

export type ChatPreviewContract = RecordArchitectureMerge<
	[
		{
			title: string;
			participants: string[];
			messages: ChatPreviewMessage[];
			maxMessages?: number;
			showAvatars?: boolean;
			variant?: TierContent;
			size?: TokenSize | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		},
		InteractionHTMLAttributes<HTMLDivElement>
	]
>;
