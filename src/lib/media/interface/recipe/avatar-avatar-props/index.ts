import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { AvatarSize } from '$stylist/media/type/struct/avatar-size';
import type { AvatarUserStatus } from '$stylist/media/type/alias/avatar-user-status';

export interface AvatarProps extends ComputeIntersectAll<[]> {
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
