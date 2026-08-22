import { resolveAuthGuardState } from '$stylist/auth/function/script/resolve-auth-guard-state';
import type { AuthGuardProps } from '$stylist/auth/type/alias/auth-guard-props';

export const createAuthGuardState = (props: AuthGuardProps) => {
	const isAuthenticated = $derived(props.isAuthenticated ?? false);
	const requiredRole = $derived(props.requiredRole);
	const allowedRoles = $derived(props.allowedRoles ?? []);
	const userRoles = $derived(props.userRoles ?? []);
	const redirectUrl = $derived(props.redirectUrl ?? '/login');
	const showLoadingState = $derived(props.showLoadingState ?? false);

	const loading = $derived(showLoadingState);
	const rootClasses = $derived(['c-auth-guard', props.class ?? ''].filter(Boolean).join(' '));
	const sectionClasses = $derived(
		['c-auth-guard__section', props.fallbackClass ?? ''].filter(Boolean).join(' ')
	);
	const titleClasses = $derived(
		['c-auth-guard__title', props.contentClass ?? ''].filter(Boolean).join(' ')
	);
	const textClasses = $derived(
		['c-auth-guard__text', props.contentClass ?? ''].filter(Boolean).join(' ')
	);
	const actionLinkClasses = $derived('c-auth-guard__action');

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
