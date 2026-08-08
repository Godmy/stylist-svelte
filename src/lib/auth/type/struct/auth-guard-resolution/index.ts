import type { TokenLoading } from '$stylist/animation/type/alias/loading';

export type AuthGuardResolution = {
	isLoggedIn: boolean;
	hasRequiredPermissions: boolean;
	isAuthorized: boolean;
	loadingStatus: TokenLoading;
};
