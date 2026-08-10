import type { TokenLoading } from '$stylist/animation/type/alias/loading';
import { TOKEN_LOADING } from '$stylist/animation/const/array/loading';
export function resolveAuthGuardState(input: {
	isAuthenticated: boolean;
	requiredRole?: string;
	allowedRoles: string[];
	userRoles: string[];
}): {
	isLoggedIn: boolean;
	hasRequiredPermissions: boolean;
	isAuthorized: boolean;
	loadingStatus: TokenLoading;
} {
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

