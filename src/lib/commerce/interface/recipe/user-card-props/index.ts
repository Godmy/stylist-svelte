import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ArchitectureHTMLAttributes } from '$stylist/architecture';
import type { TokenUserCardSize } from '$stylist/commerce/type/enum/user-card-size';
import type { User } from '$stylist/commerce/type/struct/user';

export interface UserCardProps extends StructIntersectAll<[ArchitectureHTMLAttributes<HTMLDivElement>]> {	user?: User;
	size?: TokenUserCardSize;
	showEmail?: boolean;
	showRole?: boolean;
}
