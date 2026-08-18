import type { TokenMessageStatus } from '$stylist/chat/type/alias/message-status';
import type { TokenDensity } from '$stylist/layout/type/alias/density';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { HTMLAttributes } from 'svelte/elements';
export interface SlotMessageThread extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	messages?: ({
id: string;
	text: string;
	sender: string;
	senderAvatar?: string;
	timestamp: string;
	status?: TokenMessageStatus;
	isOwn: boolean;
})[];
	containerClass?: string;
	messageContainerClass?: string;
	headerClass?: string;
	loading?: boolean;
	variant?: TokenDensity;
	messageVariant?: TokenColorTone;
}
