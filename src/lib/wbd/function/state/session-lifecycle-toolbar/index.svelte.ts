import type { RecipeWbdSessionLifecycleToolbar } from '$stylist/wbd/interface/recipe/session-lifecycle-toolbar';
import type { StructWbdSessionLifecycleAction } from '$stylist/wbd/type/struct/session-lifecycle-action';

export function createWbdSessionLifecycleToolbarState(props: RecipeWbdSessionLifecycleToolbar) {
	const className = $derived(props.class ?? '');
	const defaultActions = $derived<StructWbdSessionLifecycleAction[]>([
		{ id: 'open_round', label: 'Open round', disabled: props.session.status === 'completed' },
		{ id: 'close_round', label: 'Close round', disabled: props.session.status === 'draft' },
		{ id: 'reveal_results', label: 'Reveal results' },
		{ id: 'advance_round', label: 'Next round', disabled: props.session.currentRound >= props.session.maxRounds },
		{ id: 'finalize', label: 'Finalize', variant: 'primary', disabled: props.session.status === 'completed' }
	]);
	const actions = $derived(props.actions ?? defaultActions);

	return {
		get actions() {
			return actions;
		},
		get className() {
			return className;
		},
		triggerAction(action: StructWbdSessionLifecycleAction) {
			if (action.disabled) return;
			props.onTriggerAction?.(action);
		}
	};
}

export default createWbdSessionLifecycleToolbarState;
