import type { StructWbdDiscussionMessage } from '$stylist/wbd/type/struct/discussion-message';
import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export interface SlotWbdQuestionDiscussionPanel {
	question: StructWbdQuestion;
	messages: StructWbdDiscussionMessage[];
	rounds: number[];
	selectedRound?: number;
	class?: string;
}
