import type { RecipeWbdQuestionDiscussionPanel } from '$stylist/wbd/interface/recipe/question-discussion-panel';

export function createWbdQuestionDiscussionPanelState(props: RecipeWbdQuestionDiscussionPanel) {
	const className = $derived(props.class ?? '');
	const messages = $derived(
		props.messages.filter((message) => props.selectedRound === undefined || message.roundNumber === props.selectedRound)
	);

	return {
		get question() {
			return props.question;
		},
		get rounds() {
			return props.rounds;
		},
		get selectedRound() {
			return props.selectedRound;
		},
		get messages() {
			return messages;
		},
		get className() {
			return className;
		},
		selectRound(roundNumber: number) {
			props.onSelectRound?.(roundNumber);
		},
		submitMessage(message: string, parentId?: string) {
			props.onSubmitMessage?.(message, parentId);
		}
	};
}

export default createWbdQuestionDiscussionPanelState;
