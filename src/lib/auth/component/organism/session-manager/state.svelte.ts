import type { RecipeSessionManager } from '$stylist/auth/interface/recipe/session-manager';

export function createSessionManagerState(props: RecipeSessionManager) {
	const activeSessions = $derived(props.activeSessions ?? 1);
	const expiresAt = $derived(props.expiresAt ?? '2026-12-31 23:59');
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		['c-session-manager border rounded-lg p-4 space-y-2', className].filter(Boolean).join(' ')
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			activeSessions: _activeSessions,
			expiresAt: _expiresAt,
			...rest
		} = props;
		return rest;
	});

	return {
		get activeSessions() {
			return activeSessions;
		},
		get expiresAt() {
			return expiresAt;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
