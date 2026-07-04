import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { User } from '$stylist/commerce/type/struct/user';

import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
export interface UserCardProps
	extends ComputeIntersectAll<[LayoutHTMLAttributes<HTMLDivElement>]> {
	user?: User;
	size?: (typeof TOKEN_SIZE)[number];
	showEmail?: boolean;
	showRole?: boolean;
}
