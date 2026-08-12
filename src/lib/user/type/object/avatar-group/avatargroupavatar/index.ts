export type AvatarGroupAvatar = {
	id: string;
	name: string;
	src?: string;
	role?: string;
	status?: 'online' | 'offline' | 'away' | 'busy';
	onClick?: () => void;
};
