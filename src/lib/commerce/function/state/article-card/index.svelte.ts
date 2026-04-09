import type { ArticleCardRecipe } from '$stylist/commerce/interface/recipe/article-card';
import { ArticleCardStyleManager } from '$stylist/commerce/class/style-manager/article-card';

export function createArticleCardState(props: ArticleCardRecipe) {
	const containerClasses = $derived(
		ArticleCardStyleManager.getContainerClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const imageClasses = $derived(ArticleCardStyleManager.getImageClasses());
	const bodyClasses = $derived(ArticleCardStyleManager.getBodyClasses());
	const titleClasses = $derived(ArticleCardStyleManager.getTitleClasses());
	const subtitleClasses = $derived(ArticleCardStyleManager.getSubtitleClasses());
	const actionsClasses = $derived(ArticleCardStyleManager.getActionsClasses());
	const actionButtonClasses = $derived(ArticleCardStyleManager.getActionButtonClasses());

	return {
		get containerClasses() {
			return containerClasses;
		},
		get imageClasses() {
			return imageClasses;
		},
		get bodyClasses() {
			return bodyClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get subtitleClasses() {
			return subtitleClasses;
		},
		get actionsClasses() {
			return actionsClasses;
		},
		get actionButtonClasses() {
			return actionButtonClasses;
		}
	};
}

export default createArticleCardState;
