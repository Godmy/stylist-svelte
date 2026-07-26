import type { AuthResponse } from '$stylist/auth/type/object/auth-response';

export type AuthResult<T = AuthResponse> =
	| {
			success: true;
			data: T;
			error?: never;
	  }
	| {
			success: false;
			data?: never;
			error: string;
	  };
