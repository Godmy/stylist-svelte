import type { AuthTokens } from '$stylist/auth/type/object/auth-tokens';
import type { User } from '$stylist/auth/type/object/user';

export type AuthResponse = {
	user: User;
	tokens: AuthTokens;
};
