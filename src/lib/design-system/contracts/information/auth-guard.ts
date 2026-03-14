import type { HtmlAttributesBase } from './common';

export interface AuthGuardProps extends HtmlAttributesBase<HTMLDivElement> {
	isAuthenticated?: boolean;
	requiredRole?: string;
	allowedRoles?: string[];
	userRoles?: string[];
	redirectUrl?: string;
	showLoadingState?: boolean;
	class?: string;
	contentClass?: string;
	fallbackClass?: string;
	onAuthChange?: (isAuthenticated: boolean) => void;
	onContactAdmin?: () => void;
}



