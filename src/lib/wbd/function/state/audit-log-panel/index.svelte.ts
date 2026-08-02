import type { RecipeWbdAuditLogPanel } from '$stylist/wbd/interface/recipe/audit-log-panel';

export function createWbdAuditLogPanelState(props: RecipeWbdAuditLogPanel) {
	const className = $derived(props.class ?? '');
	const entries = $derived([...props.entries].sort((a, b) => b.createdAt.localeCompare(a.createdAt)));

	return {
		get entries() {
			return entries;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdAuditLogPanelState;
