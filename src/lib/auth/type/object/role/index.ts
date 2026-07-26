import type { Permission } from '$stylist/auth/type/object/permission';

export type Role = {
	id: number;
	name: string;
	description?: string;
	permissions: Permission[];
};
