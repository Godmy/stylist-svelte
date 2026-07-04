import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
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
	variant?: TokenAppearance;
}
