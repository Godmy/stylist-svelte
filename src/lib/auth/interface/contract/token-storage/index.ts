import type { AuthTokens } from '$stylist/auth/type/object/auth-tokens';
export interface ITokenStorage {
	saveTokens(tokens: AuthTokens): Promise<void>;
	getTokens(): Promise<AuthTokens | null>;
	clearTokens(): Promise<void>;
	getAccessToken(): Promise<string | null>;
	getRefreshToken(): Promise<string | null>;
}
