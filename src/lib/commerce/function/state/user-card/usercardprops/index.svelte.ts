import type { ArchitectureHTMLAttributes } from '$stylist/architecture';
import type { TokenUserCardSize } from '../tokenusercardsize';
import type { User } from '../user';

export type UserCardProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	user?: User;
	size?: TokenUserCardSize;
	showEmail?: boolean;
	showRole?: boolean;
};
