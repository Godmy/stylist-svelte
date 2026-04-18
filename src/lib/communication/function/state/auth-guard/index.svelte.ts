import { resolveAuthGuardState } from '$stylist/communication/function/script/resolve-auth-guard-state';
import { AuthGuardStyleManager } from '$stylist/communication/class/style-manager/auth-guard';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { AuthGuardProps } from '$stylist/communication/type/alias/auth-guard-props';

export const createAuthGuardState = (props: AuthGuardProps) => {
	const isAuthenticated = $derived(props.isAuthenticated ?? false);
	const requiredRole = $derived(props.requiredRole);
	const allowedRoles = $derived(props.allowedRoles ?? []);
	const userRoles = $derived(props.userRoles ?? []);
	const redirectUrl = $derived(props.redirectUrl ?? '/login');
	const showLoadingState = $derived(props.showLoadingState ?? false);

	const loading = $derived(showLoadingState);
	const rootClasses = $derived(AuthGuardStyleManager.getRootClasses(mergeClassNames(props.class ?? '')));
	const sectionClasses = $derived(AuthGuardStyleManager.getSectionClasses(props.fallbackClass ?? ''));
	const titleClasses = $derived(AuthGuardStyleManager.getTitleClasses(props.contentClass ?? ''));
	const textClasses = $derived(AuthGuardStyleManager.getTextClasses(props.contentClass ?? ''));
	const actionLinkClasses = $derived(AuthGuardStyleManager.getActionLinkClasses());

	const resolved = $derived(
		resolveAuthGuardState({
			isAuthenticated,
			requiredRole,
			allowedRoles,
			userRoles
		})
	);

	return {
		get loading() {
			return loading;
		},
		get rootClasses() {
			return rootClasses;
		},
		get sectionClasses() {
			return sectionClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get textClasses() {
			return textClasses;
		},
		get actionLinkClasses() {
			return actionLinkClasses;
		},
		get resolved() {
			return resolved;
		},
		get redirectUrl() {
			return redirectUrl;
		},
		get showLoadingState() {
			return showLoadingState;
		}
	};
};

export default createAuthGuardState;
