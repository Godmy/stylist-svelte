import type { RecipeWbdDiscussionMessageComposer } from '$stylist/wbd/interface/recipe/discussion-message-composer';

export function createWbdDiscussionMessageComposerState(props: RecipeWbdDiscussionMessageComposer) {
	let draft = $state('');
	const className = $derived(props.class ?? '');
	const canSubmit = $derived(draft.trim().length > 0);

	return {
		get draft() {
			return draft;
		},
		set draft(value: string) {
			draft = value;
		},
		get placeholder() {
			return props.placeholder ?? 'Add an anonymous discussion message...';
		},
		get canSubmit() {
			return canSubmit;
		},
		get className() {
			return className;
		},
		submit() {
			const message = draft.trim();
			if (!message) return;
			props.onSubmitMessage?.(message, props.parentId);
			draft = '';
		}
	};
}

export default createWbdDiscussionMessageComposerState;
