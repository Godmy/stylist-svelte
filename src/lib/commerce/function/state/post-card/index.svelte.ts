import type { PostCardRecipe } from '$stylist/commerce/interface/recipe/post-card';
import { PostCardStyleManager } from '$stylist/commerce/class/style-manager/post-card';

export function createPostCardState(props: PostCardRecipe) {
	const containerClasses = $derived(
		PostCardStyleManager.getContainerClasses(typeof props.class === 'string' ? props.class : undefined)
	);
	const imageClasses = $derived(PostCardStyleManager.getImageClasses());
	const bodyClasses = $derived(PostCardStyleManager.getBodyClasses());
	const headerClasses = $derived(PostCardStyleManager.getHeaderClasses());
	const titleClasses = $derived(PostCardStyleManager.getTitleClasses());
	const dateClasses = $derived(PostCardStyleManager.getDateClasses());
	const subtitleClasses = $derived(PostCardStyleManager.getSubtitleClasses());
	const excerptClasses = $derived(PostCardStyleManager.getExcerptClasses());
	const metaClasses = $derived(PostCardStyleManager.getMetaClasses());
	const authorClasses = $derived(PostCardStyleManager.getAuthorClasses());
	const tagsClasses = $derived(PostCardStyleManager.getTagsClasses());
	const tagClasses = $derived(PostCardStyleManager.getTagClasses());
	const actionsClasses = $derived(PostCardStyleManager.getActionsClasses());
	const actionButtonClasses = $derived(PostCardStyleManager.getActionButtonClasses());

	return {
		get containerClasses() { return containerClasses; },
		get imageClasses() { return imageClasses; },
		get bodyClasses() { return bodyClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get dateClasses() { return dateClasses; },
		get subtitleClasses() { return subtitleClasses; },
		get excerptClasses() { return excerptClasses; },
		get metaClasses() { return metaClasses; },
		get authorClasses() { return authorClasses; },
		get tagsClasses() { return tagsClasses; },
		get tagClasses() { return tagClasses; },
		get actionsClasses() { return actionsClasses; },
		get actionButtonClasses() { return actionButtonClasses; }
	};
}

export default createPostCardState;
