import type { RecipeWbdQuestionImportPanel } from '$stylist/wbd/interface/recipe/question-import-panel';
import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';

export function createWbdQuestionImportPanelState(props: RecipeWbdQuestionImportPanel) {
	let draft = $state('');
	const className = $derived(props.class ?? '');
	const parsedQuestions = $derived(
		draft
			.split('\n')
			.map((line) => line.trim())
			.filter(Boolean)
			.map<StructWbdQuestion>((text, index) => ({
				id: `import-${index + 1}`,
				orderIndex: index,
				text,
				type: text.includes('%') ? 'percentage' : 'numeric',
				required: true
			}))
	);

	return {
		get draft() {
			return draft;
		},
		set draft(value: string) {
			draft = value;
		},
		get parsedQuestions() {
			return parsedQuestions;
		},
		get className() {
			return className;
		},
		importQuestions() {
			props.onImportQuestions?.(parsedQuestions);
			draft = '';
		}
	};
}

export default createWbdQuestionImportPanelState;
