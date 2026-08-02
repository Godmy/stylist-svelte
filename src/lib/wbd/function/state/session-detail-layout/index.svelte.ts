import type { RecipeWbdSessionDetailLayout } from '$stylist/wbd/interface/recipe/session-detail-layout';

export function createWbdSessionDetailLayoutState(props: RecipeWbdSessionDetailLayout) {
	const className = $derived(props.class ?? '');

	return {
		get session() {
			return props.session;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdSessionDetailLayoutState;
