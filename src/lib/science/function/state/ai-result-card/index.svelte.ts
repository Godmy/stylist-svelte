import type { RecipeAiResultCard as AiResultCardContract } from '$stylist/science/interface/recipe/ai-result-card';
import { AiResultCardStyleManager } from '$stylist/science/class/style-manager/ai-result-card';

export function createAiResultCardState(props: AiResultCardContract) {
	const title = $derived(props.title ?? '');
	const description = $derived(props.description ?? '');
	const icon = $derived(props.icon ?? '');
	const children = $derived(props.children);
	const containerClass = $derived(AiResultCardStyleManager.getContainerClass(props.class ?? ''));
	const contentWrapperClass = $derived(AiResultCardStyleManager.getContentWrapperClass());
	const iconContainerClass = $derived(AiResultCardStyleManager.getIconContainerClass());
	const iconClass = $derived(AiResultCardStyleManager.getIconClass());
	const textContentWrapperClass = $derived(AiResultCardStyleManager.getTextContentWrapperClass());
	const titleClass = $derived(AiResultCardStyleManager.getTitleClass());
	const descriptionClass = $derived(AiResultCardStyleManager.getDescriptionClass());

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
			return contentWrapperClass;
		},
		get iconContainerClass() {
			return iconContainerClass;
		},
		get iconClass() {
			return iconClass;
		},
		get textContentWrapperClass() {
			return textContentWrapperClass;
		},
		get titleClass() {
			return titleClass;
		},
		get descriptionClass() {
			return descriptionClass;
		}
	};
}

export default createAiResultCardState;
