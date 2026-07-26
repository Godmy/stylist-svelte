import type { AuthResponse } from '$stylist/auth/type/object/auth-response';
import type { Role } from '$stylist/auth/type/object/role';

export interface IAuthStateManager {
	setAuthenticated(user: AuthResponse): void;
	setUnauthenticated(): void;
	setLoading(isLoading: boolean): void;
	setError(error: string | null): void;
	setRoles(roles: Role[]): void;
	getState(): {
		user: AuthResponse['user'] | null;
		isAuthenticated: boolean;
		isLoading: boolean;
		error: string | null;
		roles: Role[];
	};
}
