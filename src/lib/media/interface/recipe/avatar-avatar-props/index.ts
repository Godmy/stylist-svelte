import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { AvatarSize } from '$stylist/media/type/alias/avatar-size';
import type { AvatarUserStatus } from '$stylist/media/type/alias/avatar-user-status';

export interface AvatarProps extends StructIntersectAll<[]> {
	variant?: 'default';
	size?: AvatarSize;
	src?: string;
	alt?: string;
	id?: string;
	name?: string;
	status?: AvatarUserStatus;
	showStatus?: boolean;
	children?: any;
	class?: string;
}
