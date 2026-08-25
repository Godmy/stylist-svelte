import type { RecipeAiResultCard as AiResultCardContract } from '$stylist/ai/interface/recipe/ai-result-card';

export function createAiResultCardState(props: AiResultCardContract) {
	const title = $derived(props.title ?? '');
	const description = $derived(props.description ?? '');
	const icon = $derived(props.icon ?? '');
	const children = $derived(props.children);
	const containerClass = $derived(props.class ? `ai-result-card ${props.class}` : 'ai-result-card');

	return {
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get icon() {
			return icon;
		},
		get children() {
			return children;
		},
		get containerClass() {
			return containerClass;
		},
		get contentWrapperClass() {
			return 'ai-result-card__content';
		},
		get iconContainerClass() {
			return 'ai-result-card__icon';
		},
		get iconClass() {
			return 'ai-result-card__icon-img';
		},
		get textContentWrapperClass() {
			return 'ai-result-card__text';
		},
		get titleClass() {
			return 'ai-result-card__title';
		},
		get descriptionClass() {
			return 'ai-result-card__description';
		}
	};
}

export default createAiResultCardState;
