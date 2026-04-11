export type AvatarGroupAvatar = {
	id: string;
	name: string;
	src?: string;
	status?: 'online' | 'offline' | 'away' | 'busy';
	onClick?: () => void;
};
