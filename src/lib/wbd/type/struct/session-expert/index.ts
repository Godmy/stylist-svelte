export type StructWbdSessionExpert = {
	id: string;
	sessionId?: string;
	email: string;
	name?: string;
	alias?: string;
	invitedAt?: string;
	joinedAt?: string;
	status: 'invited' | 'joined' | 'pending';
};
