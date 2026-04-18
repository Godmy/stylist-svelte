import type { HtmlAttributesBase } from '$stylist/information/interface/slot';

export interface SlotCommentUser {
	id: string;
	name: string;
	avatar?: string;
	role?: string;
	isOnline?: boolean;
}
