import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { AvatarSize } from '$stylist/media/type/struct/avatar-size';
import type { AvatarUserStatus } from '$stylist/media/type/struct/avatar-user-status';

export interface ContractAvatar extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Avatar variant */
	variant?: 'default';
	/** Avatar size */
	size?: AvatarSize;
	/** Image source */
	src?: string;
	/** Alt text */
	alt?: string;
	/** SlotUser ID */
	id?: string;
	/** SlotUser name */
	name?: string;
	/** SlotUser status */
	status?: AvatarUserStatus;
	/** Show status indicator */
	showStatus?: boolean;
	/** Additional CSS class */
	class?: string;
}
