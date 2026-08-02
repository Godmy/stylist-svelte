export type StructWbdUser = {
	id: string;
	email: string;
	name: string;
	company?: string;
	role: 'coordinator' | 'expert' | 'admin';
	createdAt?: string;
};
