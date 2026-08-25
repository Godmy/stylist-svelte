import type { AuthTokens } from '$stylist/auth/type/object/auth-tokens';
import type { Role } from '$stylist/auth/type/object/role';
import type { User } from '$stylist/auth/type/object/user';

export type AuthState = {
	user: User | null;
	tokens: AuthTokens | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
	roles: Role[];
};
