import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export type ChatMessageContract = RecordArchitectureMerge<
	[
		{
			text?: string;
			sender?: string;
			senderAvatar?: string;
			timestamp?: string;
			status?: 'sent' | 'delivered' | 'read';
			isOwn?: boolean;
			children?: Snippet;
			contentClass?: string;
			headerClass?: string;
			footerClass?: string;
			variant?: 'default' | 'primary' | 'secondary';
		},
		InteractionHTMLAttributes<HTMLDivElement>
	]
>;
