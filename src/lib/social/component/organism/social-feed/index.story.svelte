<script lang="ts">
	import type { Post } from '$stylist/social/type/object/social-feed/post';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import SocialFeed from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'showComments', type: 'boolean', defaultValue: true },
		{ name: 'showShare', type: 'boolean', defaultValue: true },
		{ name: 'showBookmarks', type: 'boolean', defaultValue: true }
	];

	const defaultUser: { id: string; name: string; avatar?: string } = {
		id: 'user-1',
		name: 'John Doe',
		avatar: 'https://via.placeholder.com/40'
	};

	const filters: { id: string; label: string; active: boolean }[] = [
		{ id: 'all', label: 'All', active: true },
		{ id: 'following', label: 'Following', active: false }
	];

	const defaultPosts: Post[] = [
		{
			id: 'post-1',
			title: 'Launch notes from the product team',
			subtitle: 'Post card inside a full social timeline',
			image: 'https://via.placeholder.com/640x360?text=Launch',
			date: new Date(Date.now() - 3600000).toISOString(),
			excerpt: 'SocialFeed is the full timeline shell: composer, filters, search, post cards and load-more controls.',
			author: 'John Doe',
			tags: ['#product', '#launch'],
			content: 'Just finished the first public milestone and collecting team feedback in the feed.',
			authorAvatar: 'https://via.placeholder.com/40',
			authorIsVerified: true,
			likes: 24,
			comments: 5,
			shares: 2,
			isLiked: false,
			isBookmarked: false
		},
		{
			id: 'post-2',
			title: 'Community AMA recap',
			subtitle: 'Second timeline item',
			image: 'https://via.placeholder.com/640x360?text=AMA',
			date: new Date(Date.now() - 7200000).toISOString(),
			excerpt: 'Another post demonstrates that this organism manages a list, not a single social card.',
			author: 'Jane Smith',
			tags: ['#community', '#ama'],
			content: 'We answered roadmap questions and gathered feature requests.',
			authorAvatar: 'https://via.placeholder.com/40',
			authorIsVerified: false,
			likes: 18,
			comments: 7,
			shares: 4,
			isLiked: true,
			isBookmarked: true
		}
	];
</script>

<Story
	component={SocialFeed}
	title="Social Feed"
	description="Full timeline organism with composer, filters, search, post cards and pagination actions."
	{controls}
>
	{#snippet children()}
		<SocialFeed
			posts={defaultPosts}
			currentUser={defaultUser}
			showFilters={true}
			showSearch={true}
			showCreatePost={true}
			showLoadMore={true}
			{filters}
			onPostLike={(postId: string) => console.log('Liked post:', postId)}
			onPostComment={(postId: string) => console.log('Commented on post:', postId)}
			onPostShare={(postId: string) => console.log('Shared post:', postId)}
			onPostBookmark={(postId: string) => console.log('Bookmarked post:', postId)}
			onCreatePost={() => console.log('Create post')}
			onLoadMore={() => console.log('Load more')}
		/>
	{/snippet}
</Story>
