import { LOADING_STATUSES, type LoadingStatus } from '$stylist/design-system/tokens';

type AuthGuardResolutionInput = {
	isAuthenticated: boolean;
	requiredRole?: string;
	allowedRoles: string[];
	userRoles: string[];
};

type AuthGuardResolution = {
	isLoggedIn: boolean;
	hasRequiredPermissions: boolean;
	isAuthorized: boolean;
	loadingStatus: LoadingStatus;
};

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
		loadingStatus: LOADING_STATUSES[2]
	};
}
