import type { RecipeWbdSessionList } from '$stylist/wbd/interface/recipe/session-list';

export function createWbdSessionListState(props: RecipeWbdSessionList) {
	const className = $derived(props.class ?? '');
	const activeCount = $derived(
		props.sessions.filter((session) => session.status !== 'draft' && session.status !== 'completed').length
	);
	const completedCount = $derived(props.sessions.filter((session) => session.status === 'completed').length);

	return {
		get sessions() {
			return props.sessions;
		},
		get selectedSessionId() {
			return props.selectedSessionId;
		},
		get activeCount() {
			return activeCount;
		},
		get completedCount() {
			return completedCount;
		},
		get className() {
			return className;
		},
		selectSession(sessionId: string) {
			props.onSelectSession?.(sessionId);
		},
		createSession() {
			props.onCreateSession?.();
		}
	};
}

export default createWbdSessionListState;
