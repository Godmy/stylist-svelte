export type ChatHeaderUser = {
	id: string;
	name: string;
	avatar?: string;
	status?: 'online' | 'away' | 'offline' | 'typing';
	lastSeen?: Date;
}
