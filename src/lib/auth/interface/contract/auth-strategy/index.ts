import type { AuthResponse } from '$stylist/auth/type/object/auth-response';
import type { AuthResult } from '$stylist/auth/type/object/auth-result';

export interface IAuthStrategy {
	authenticate(credentials: unknown): Promise<AuthResult<AuthResponse>>;
	getStrategyName(): string;
}
