import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { TokenMessageStatus } from '$stylist/chat/type/alias/message-status';

export interface SlotChatMessage extends SlotChildren {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: TokenMessageStatus;
	isOwn?: boolean;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: TokenColorTone;
}
