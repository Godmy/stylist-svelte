import type { TokenLoading } from '$stylist/interaction/type/record/loading';

export type AuthGuardResolution = {
	isLoggedIn: boolean;
	hasRequiredPermissions: boolean;
	isAuthorized: boolean;
	loadingStatus: TokenLoading;
};
