import type { RecipeWbdSessionSetupWizard } from '$stylist/wbd/interface/recipe/session-setup-wizard';
import type { StructWbdSession } from '$stylist/wbd/type/struct/session';

export function createWbdSessionSetupWizardState(props: RecipeWbdSessionSetupWizard) {
	const className = $derived(props.class ?? '');
	const step = $derived(props.step ?? 'basics');
	const steps = $derived(['basics', 'questions', 'experts', 'review'] as const);
	const canCreate = $derived(Boolean(props.session.title?.trim()) && (props.session.maxRounds ?? 0) > 0);

	return {
		get session() {
			return props.session;
		},
		get step() {
			return step;
		},
		get steps() {
			return steps;
		},
		get canCreate() {
			return canCreate;
		},
		get className() {
			return className;
		},
		updateSession(session: Partial<StructWbdSession>) {
			props.onUpdateSession?.(session);
		},
		changeStep(nextStep: 'basics' | 'questions' | 'experts' | 'review') {
			props.onChangeStep?.(nextStep);
		},
		createSession() {
			props.onCreateSession?.();
		}
	};
}

export default createWbdSessionSetupWizardState;
