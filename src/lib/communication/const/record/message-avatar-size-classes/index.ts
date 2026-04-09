import type { TokenAlignment as MessageAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';
import type { TokenMessageState } from '$stylist/communication/type/enum/message-state';

export const MESSAGE_AVATAR_SIZE_CLASSES: Partial<Record<TokenSize, string>> = {
	sm: 'w-6 h-6',
	md: 'w-8 h-8',
	lg: 'w-10 h-10'
};
