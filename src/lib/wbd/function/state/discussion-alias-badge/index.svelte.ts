import type { RecipeWbdDiscussionAliasBadge } from '$stylist/wbd/interface/recipe/discussion-alias-badge';

export function createWbdDiscussionAliasBadgeState(props: RecipeWbdDiscussionAliasBadge) {
	const className = $derived(props.class ?? '');

	return {
		get alias() {
			return props.alias;
		},
		get isOwn() {
			return props.isOwn ?? false;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdDiscussionAliasBadgeState;
