import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ListItem } from '../list-with-avatars/item';

export type ListWithAvatarsProps = {
	items: ListItem[];
	showAvatar?: boolean;
	showStatus?: boolean;
	showSubtitle?: boolean;
	showDescription?: boolean;
	showActions?: boolean;
	size?: 'sm' | 'md' | 'lg';
	class?: string;
	itemClass?: string;
	avatarClass?: string;
	contentClass?: string;
	actionsClass?: string;
} & InteractionHTMLAttributes<HTMLDivElement>;
