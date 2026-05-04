<script lang="ts">
  import type { FeedUser, FilterOption, Post, Props } from '$stylist/social/type/struct/social-feed';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import SocialFeed from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'showComments', type: 'boolean', defaultValue: true },
    { name: 'showShare', type: 'boolean', defaultValue: true },
    { name: 'showBookmarks', type: 'boolean', defaultValue: true }
  ];

  const defaultUser: FeedUser = {
    id: 'user-1',
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/40'
  };

  const filters: FilterOption[] = [
    { id: 'all', label: 'All', active: true },
    { id: 'following', label: 'Following', active: false }
  ];

  const defaultPosts: Post[] = [
    {
      id: 'post-1',
      title: 'New Project Launch',
      subtitle: 'Milestone update',
      image: 'https://via.placeholder.com/640x360?text=Launch',
      date: new Date(Date.now() - 3600000).toISOString(),
      excerpt: 'Shipping the first milestone of our next-gen platform.',
      author: 'John Doe',
      tags: ['#product', '#launch'],
      content: 'Just finished working on an amazing new project.',
      authorAvatar: 'https://via.placeholder.com/40',
      authorIsVerified: true,
      likes: 24,
      comments: 5,
      shares: 2,
      isLiked: false,
      isBookmarked: false
    }
  ];
</script>

<Story component={SocialFeed} title="Social Feed" description="Social feed with posts and basic actions." controls={controls}>
  {#snippet children()}
    <SocialFeed
      posts={defaultPosts}
      currentUser={defaultUser}
      showFilters={true}
      showSearch={true}
      showCreatePost={true}
      showLoadMore={true}
      filters={filters}
      onPostLike={(postId: string) => console.log('Liked post:', postId)}
      onPostComment={(postId: string) => console.log('Commented on post:', postId)}
      onPostShare={(postId: string) => console.log('Shared post:', postId)}
      onPostBookmark={(postId: string) => console.log('Bookmarked post:', postId)}
      onCreatePost={() => console.log('Create post')}
      onLoadMore={() => console.log('Load more')}
    />
  {/snippet}
</Story>
