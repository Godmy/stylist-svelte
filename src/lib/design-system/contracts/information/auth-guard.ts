import type { HtmlAttributesBase } from '../information/common';

export type AuthRole = string;

export interface AuthGuardProps extends HtmlAttributesBase<HTMLDivElement> {
	isAuthenticated?: boolean;
	requiredRole?: AuthRole;
	allowedRoles?: AuthRole[];
	userRoles?: AuthRole[];
	redirectUrl?: string;
	showLoadingState?: boolean;
	class?: string;
	contentClass?: string;
	fallbackClass?: string;
	onAuthChange?: (isAuthenticated: boolean) => void;
	onContactAdmin?: () => void;
}
