export interface TeamMember {
	id: string;
	name: string;
	avatar?: string;
	role?: string;
	status?: 'online' | 'away' | 'busy' | 'offline';
	presence?: boolean;
}
