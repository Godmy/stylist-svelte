import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
import type { SessionManagerProps } from '$stylist/form/interface/component/interaction-forms/other';

export interface SessionManagerStateProps extends SessionManagerProps {}

export function createSessionManagerState(props: SessionManagerStateProps) {
	const activeSessions = $derived(props.activeSessions ?? 1);
	const expiresAt = $derived(props.expiresAt ?? '2026-12-31 23:59');
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		InteractionFormsStyleManager.root('c-session-manager border rounded-lg p-4 space-y-2', className)
	);

	const restProps = $derived.by(() => {
		const { class: _class, activeSessions: _activeSessions, expiresAt: _expiresAt, ...rest } = props;
		return rest;
	});

	return {
		get activeSessions() { return activeSessions; },
		get expiresAt() { return expiresAt; },
		get containerClasses() { return containerClasses; },
		get restProps() { return restProps; }
	};
}

export default createSessionManagerState;
