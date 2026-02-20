<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import {
    Heart,
    MessageCircle,
    Share2,
    MoreHorizontal,
    User,
    Calendar,
    Filter,
    Search
  } from 'lucide-svelte';
  import PostCard from '../../../../../molecules/information/cards/post-card/index.svelte';
  // Removed: import type { Post } from '../post-card/PostCard.svelte';

  // Defined Post type locally
  export type Post = {
    id: string; // Assuming an ID is needed for actions
    title: string;
    subtitle?: string;
    image?: string;
    date?: string;
    excerpt?: string;
    author: string;
    tags?: string[];
    // Additional properties for social feed context
    content: string; // The main content of the post for filtering
    authorAvatar?: string;
    authorIsVerified?: boolean;
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
    isBookmarked: boolean;
  };

  export type FilterOption = {
    id: string;
    label: string;
    active: boolean;
  };

  export type FeedUser = {
    id: string;
    name: string;
    avatar?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  export type Props = RestProps & {
    posts: Post[];
    currentUser?: FeedUser;
    showFilters?: boolean;
    showSearch?: boolean;
    showCreatePost?: boolean;
    filters?: FilterOption[];
    showLoadMore?: boolean;
    onPostLike?: (postId: string) => void;
    onPostComment?: (postId: string) => void;
    onPostShare?: (postId: string) => void;
    onPostBookmark?: (postId: string) => void;
    onCreatePost?: () => void;
    onLoadMore?: () => void;
    class?: string;
    headerClass?: string;
    feedItemClass?: string;
    footerClass?: string;
  };

  let {
    posts = [],
    currentUser,
    showFilters = true,
    showSearch = true,
    showCreatePost = true,
    filters = [
      { id: 'all', label: 'All Posts', active: true },
      { id: 'following', label: 'Following', active: false },
      { id: 'popular', label: 'Popular', active: false },
      { id: 'recent', label: 'Recent', active: false }
    ],
    showLoadMore = true,
    onPostLike,
    onPostComment,
    onPostShare,
    onPostBookmark,
    onCreatePost,
    onLoadMore,
    class: hostClass = '',
    headerClass = '',
    feedItemClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let searchQuery = $state('');
  let activeFilter = $state(filters.find(f => f.active)?.id || 'all');
  let newPostContent = $state('');
  let showCreateForm = $state(false);

  $effect(() => {
    // Update active filter when props change
    const newActiveFilter = filters.find(f => f.active)?.id;
    if (newActiveFilter && newActiveFilter !== activeFilter) {
      activeFilter = newActiveFilter;
    }
  });

  function handleFilterChange(filterId: string) {
    activeFilter = filterId;
    // In a real app, this would filter the posts
    // For now, just update the UI
  }

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
  }

  function handleLike(postId: string) {
    onPostLike?.(postId);
  }

  function handleComment(postId: string) {
    onPostComment?.(postId);
  }

  function handleShare(postId: string) {
    onPostShare?.(postId);
  }

  function handleBookmark(postId: string) {
    onPostBookmark?.(postId);
  }

  function handleLoadMore() {
    onLoadMore?.();
  }

  function handleCreatePost() {
    if (newPostContent.trim()) {
      onCreatePost?.();
      newPostContent = '';
      showCreateForm = false;
    }
  }

  let filteredPosts = $derived.by(() => {
    let result = [...posts];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post =>
        post.content.toLowerCase().includes(query) ||
        post.tags?.some((tag: string) => tag.toLowerCase().includes(query)) ||
        post.author.toLowerCase().includes(query) // Changed from post.author.name and post.author.username
      );
    }

    return result;
  });

  function formatDate(date: Date): string { // Changed Date type to string for simplicity, assuming a string is passed from backend
    const now = new Date();
    const postDate = new Date(date); // Convert to Date object
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;

    // If older than a day, show date
    return postDate.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<div class={`social-feed ${hostClass}`} {...restProps}>
  <!-- Feed header -->
  <div class={`border-b border-gray-200 p-4 ${headerClass}`}>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-gray-900">Social Feed</h2>

      {#if showSearch}
        <div class="relative w-64">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search posts..."
            value={searchQuery}
            oninput={handleSearchInput}
          />
        </div>
      {/if}
    </div>

    {#if showFilters}
      <div class="flex space-x-4">
        {#each filters as filter}
          <button
            type="button"
            class={`flex items-center px-3 py-2 text-sm font-medium rounded-full ${
              activeFilter === filter.id
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onclick={() => handleFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Create post section -->
  {#if showCreatePost}
    <div class="border-b border-gray-200 p-4">
      <div class="flex space-x-3">
        {#if currentUser?.avatar}
          <img
            class="h-10 w-10 rounded-full"
            src={currentUser.avatar}
            alt={currentUser.name}
          />
        {:else}
          <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User class="h-6 w-6 text-gray-600" />
          </div>
        {/if}

        <div class="flex-1">
          {#if showCreateForm}
            <div>
              <textarea
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="What's on your mind?"
                rows="3"
                bind:value={newPostContent}
              ></textarea>

              <div class="mt-3 flex justify-end space-x-3">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onclick={() => showCreateForm = false}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onclick={handleCreatePost}
                  disabled={!newPostContent.trim()}
                >
                  Post
                </button>
              </div>
            </div>
          {:else}
            <button
              type="button"
              class="w-full flex items-center justify-start px-4 py-3 border border-gray-300 rounded-md shadow-sm text-left text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onclick={() => showCreateForm = true}
            >
              {#if currentUser?.avatar}
                <img
                  class="h-8 w-8 rounded-full"
                  src={currentUser.avatar}
                  alt={currentUser.name}
                />
              {/if}
              <span class="ml-4">What's on your mind, {currentUser?.name || 'User'}?</span>
            </button>
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <!-- Feed items -->
  <div>
    {#if filteredPosts.length === 0}
      <div class="text-center py-12 border-b border-gray-200">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
          <MessageCircle class="h-6 w-6 text-gray-400" />
        </div>
        <h3 class="mt-2 text-sm font-medium text-gray-900">No posts</h3>
        <p class="mt-1 text-sm text-gray-500">Get started by creating your first post.</p>
      </div>
    {/if}

    {#each filteredPosts as post}
      <div class={`border-b border-gray-200 last:border-0 ${feedItemClass}`}>
        <PostCard
          title={post.title}
          subtitle={post.subtitle}
          image={post.image}
          date={post.date ? formatDate(new Date(post.date)) : ''}
          excerpt={post.excerpt}
          author={post.author}
          tags={post.tags}
          actions={[
            { label: `Like (${post.likes})`, onClick: () => handleLike(post.id) },
            { label: `Comment (${post.comments})`, onClick: () => handleComment(post.id) },
            { label: `Share (${post.shares})`, onClick: () => handleShare(post.id) },
            { label: `Bookmark`, onClick: () => handleBookmark(post.id) }
          ]}
        />
      </div>
    {/each}
  </div>

  {#if showLoadMore}
    <div class={`p-6 text-center ${footerClass}`}>
      {#if filteredPosts.length > 0}
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick={handleLoadMore}
        >
          Load more posts
        </button>
      {/if}
    </div>
  {/if}
</div>
