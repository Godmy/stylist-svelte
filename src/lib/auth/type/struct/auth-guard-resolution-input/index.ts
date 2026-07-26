export type AuthGuardResolutionInput = {
	isAuthenticated: boolean;
	requiredRole?: string;
	allowedRoles: string[];
	userRoles: string[];
};
