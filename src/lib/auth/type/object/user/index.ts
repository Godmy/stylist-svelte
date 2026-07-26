import type { UserProfile } from '$stylist/auth/type/object/user-profile';

export type User = {
	id: number;
	email: string;
	username: string;
	isActive: boolean;
	isVerified: boolean;
	profile?: UserProfile;
};
