import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarUserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';

export interface AvatarContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Avatar variant */
	variant?: 'default';
	/** Avatar size */
	size?: AvatarSize;
	/** Image source */
	src?: string;
	/** Alt text */
	alt?: string;
	/** User ID */
	id?: string;
	/** User name */
	name?: string;
	/** User status */
	status?: AvatarUserStatus;
	/** Show status indicator */
	showStatus?: boolean;
	/** Additional CSS class */
	class?: string;
}
