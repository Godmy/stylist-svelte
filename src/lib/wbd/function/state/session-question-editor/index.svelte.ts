import { untrack } from 'svelte';
import type { RecipeWbdSessionQuestionEditor } from '$stylist/wbd/interface/recipe/session-question-editor';
import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export function createWbdSessionQuestionEditorState(props: RecipeWbdSessionQuestionEditor) {
	const className = $derived(props.class ?? '');
	let questions = $state<StructWbdQuestion[]>([...props.questions]);
	const sortedQuestions = $derived([...questions].sort((a, b) => a.orderIndex - b.orderIndex));
	const selectedQuestion = $derived(
		sortedQuestions.find((question) => question.id === props.selectedQuestionId) ?? sortedQuestions[0]
	);

	$effect(() => {
		const nextQuestions = props.questions;
		questions = nextQuestions.map((question) => {
			const current = untrack(() => questions.find((item) => item.id === question.id));
			return current ? { ...question, ...current } : question;
		});
	});

	return {
		get questions() {
			return sortedQuestions;
		},
		get selectedQuestion() {
			return selectedQuestion;
		},
		get className() {
			return className;
		},
		selectQuestion(questionId: string) {
			props.onSelectQuestion?.(questionId);
		},
		createQuestion() {
			props.onCreateQuestion?.();
		},
		updateQuestion(question: StructWbdQuestion) {
			questions = questions.map((item) => (item.id === question.id ? question : item));
			props.onUpdateQuestion?.(question);
		},
		deleteQuestion(questionId: string) {
			props.onDeleteQuestion?.(questionId);
		}
	};
}

export default createWbdSessionQuestionEditorState;
