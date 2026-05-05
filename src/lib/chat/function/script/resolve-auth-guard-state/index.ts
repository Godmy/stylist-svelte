import { TOKEN_LOADING } from '$stylist/interaction/const/enum/loading';
import type { AuthGuardResolutionInput } from '$stylist/chat/type/struct/auth-guard-resolution-input';
import type { AuthGuardResolution } from '$stylist/chat/type/struct/auth-guard-resolution';

export function resolveAuthGuardState(input: AuthGuardResolutionInput): AuthGuardResolution {
	const { isAuthenticated, requiredRole, allowedRoles, userRoles } = input;
	const isLoggedIn = isAuthenticated;
	let hasRequiredPermissions = isAuthenticated;

	if (requiredRole) {
		hasRequiredPermissions = userRoles.includes(requiredRole);
	} else if (allowedRoles.length > 0) {
		hasRequiredPermissions = userRoles.some((role) => allowedRoles.includes(role));
	}

	return {
		isLoggedIn,
		hasRequiredPermissions,
		isAuthorized: isLoggedIn && hasRequiredPermissions,
		loadingStatus: TOKEN_LOADING[2]
	};
}
