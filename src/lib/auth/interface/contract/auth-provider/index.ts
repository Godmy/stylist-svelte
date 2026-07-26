import type { AuthResponse } from '$stylist/auth/type/object/auth-response';
import type { AuthResult } from '$stylist/auth/type/object/auth-result';
import type { AuthTokens } from '$stylist/auth/type/object/auth-tokens';
import type { GoogleAuthData } from '$stylist/auth/type/object/google-auth-data';
import type { LoginCredentials } from '$stylist/auth/type/object/login-credentials';
import type { RegistrationData } from '$stylist/auth/type/object/registration-data';
import type { TelegramAuthData } from '$stylist/auth/type/object/telegram-auth-data';

export interface IAuthProvider {
	login(credentials: LoginCredentials): Promise<AuthResult<AuthResponse>>;
	register(data: RegistrationData): Promise<AuthResult<AuthResponse>>;
	loginWithGoogle(data: GoogleAuthData): Promise<AuthResult<AuthResponse>>;
	loginWithTelegram(data: TelegramAuthData): Promise<AuthResult<AuthResponse>>;
	logout(): Promise<void>;
	refreshToken(): Promise<AuthResult<AuthTokens>>;
	getCurrentUser(): Promise<AuthResult<AuthResponse>>;
}
