import type { AuthResponse } from '$stylist/auth/type/object/auth-response';
import type { AuthResult } from '$stylist/auth/type/object/auth-result';
import type { AuthTokens } from '$stylist/auth/type/object/auth-tokens';
import type { LoginCredentials } from '$stylist/auth/type/object/login-credentials';
import type { RegistrationData } from '$stylist/auth/type/object/registration-data';
export interface IAuthProvider {
	login(credentials: LoginCredentials): Promise<AuthResult<AuthResponse>>;
	register(data: RegistrationData): Promise<AuthResult<AuthResponse>>;
	loginWithGoogle(data: ({
	idToken: string;
})): Promise<AuthResult<AuthResponse>>;
	loginWithTelegram(data: ({
	id: string | number;
	hash: string;
	authDate: string | number;
	firstName?: string;
	lastName?: string;
	username?: string;
	photoUrl?: string;
})): Promise<AuthResult<AuthResponse>>;
	logout(): Promise<void>;
	refreshToken(): Promise<AuthResult<AuthTokens>>;
	getCurrentUser(): Promise<AuthResult<AuthResponse>>;
}
