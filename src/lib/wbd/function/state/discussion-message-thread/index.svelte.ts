import type { RecipeWbdDiscussionMessageThread } from '$stylist/wbd/interface/recipe/discussion-message-thread';

export function createWbdDiscussionMessageThreadState(props: RecipeWbdDiscussionMessageThread) {
	const className = $derived(props.class ?? '');
	const messages = $derived([...props.messages].sort((a, b) => a.createdAt.localeCompare(b.createdAt)));

	return {
		get messages() {
			return messages;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdDiscussionMessageThreadState;
