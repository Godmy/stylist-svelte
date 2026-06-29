import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { AvatarUserStatus } from '$stylist/media/type/alias/avatar-user-status';

import type { TOKEN_SIZE } from '$stylist/layout/const/array/size';
export interface AvatarProps extends ComputeIntersectAll<[]> {
	variant?: 'default';
	size?: (typeof TOKEN_SIZE)[number];
	src?: string;
	alt?: string;
	id?: string;
	name?: string;
	status?: AvatarUserStatus;
	showStatus?: boolean;
	children?: any;
	class?: string;
}

