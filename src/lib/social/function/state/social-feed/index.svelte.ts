import type { Post, Props } from '$stylist/social/type/struct/social-feed';

export function createSocialFeedState(props: Props) {
	let searchQuery = $state('');
	let activeFilter = $state('');
	let showCreateForm = $state(false);
	let newPostContent = $state('');
	const posts = $derived(props.posts ?? []);
	const filteredPosts = $derived(posts.filter((post) => {
		const matchesQuery = !searchQuery || `${post.title ?? ''} ${post.excerpt ?? ''}`.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesFilter = !activeFilter || post.tags?.includes(activeFilter);
		return matchesQuery && matchesFilter;
	}));

	return {
		get hostClass() { return props.class ?? ''; },
		get headerClass() { return props.headerClass ?? ''; },
		get feedItemClass() { return props.feedItemClass ?? ''; },
		get footerClass() { return props.footerClass ?? ''; },
		get searchQuery() { return searchQuery; },
		get activeFilter() { return activeFilter; },
		get showCreateForm() { return showCreateForm; },
		set showCreateForm(value: boolean) { showCreateForm = value; },
		get newPostContent() { return newPostContent; },
		set newPostContent(value: string) { newPostContent = value; },
		get filteredPosts(): Post[] { return filteredPosts; },
		handleSearchInput: (event: Event) => { searchQuery = (event.target as HTMLInputElement).value; },
		handleFilterChange: (filterId: string) => { activeFilter = activeFilter === filterId ? '' : filterId; },
		handleCreatePost: () => { props.onCreatePost?.(); newPostContent = ''; showCreateForm = false; },
		formatDate: (value: Date) => new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(value),
		handleLike: (postId: string) => props.onPostLike?.(postId),
		handleComment: (postId: string) => props.onPostComment?.(postId),
		handleShare: (postId: string) => props.onPostShare?.(postId),
		handleBookmark: (postId: string) => props.onPostBookmark?.(postId),
		handleLoadMore: () => props.onLoadMore?.()
	};
}

export default createSocialFeedState;
