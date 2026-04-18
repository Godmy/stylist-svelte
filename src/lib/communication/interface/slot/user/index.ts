import type { TokenDensity } from '$stylist/layout/type/enum/density';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';

export interface SlotUser {
	id: string;
	name: string;
	avatar?: string;
	status?: 'online' | 'offline' | 'away' | 'typing' | 'idle';
}
