import type { Props, Post } from '$stylist/social/type/struct/social-feed';

export type SocialFeedState = ReturnType<typeof createSocialFeedState>;

export function createSocialFeedState(props: Props) {
  let searchQuery = $state('');
  let activeFilter = $state(props.filters?.find(f => f.active)?.id || 'all');
  let newPostContent = $state('');
  let showCreateForm = $state(false);

  $effect(() => {
    const newActiveFilter = props.filters?.find(f => f.active)?.id;
    if (newActiveFilter && newActiveFilter !== activeFilter) {
      activeFilter = newActiveFilter;
    }
  });

  const handleFilterChange = (filterId: string) => {
    activeFilter = filterId;
  };

  const handleSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
  };

  const handleLike = (postId: string) => {
    props.onPostLike?.(postId);
  };

  const handleComment = (postId: string) => {
    props.onPostComment?.(postId);
  };

  const handleShare = (postId: string) => {
    props.onPostShare?.(postId);
  };

  const handleBookmark = (postId: string) => {
    props.onPostBookmark?.(postId);
  };

  const handleLoadMore = () => {
    props.onLoadMore?.();
  };

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      props.onCreatePost?.();
      newPostContent = '';
      showCreateForm = false;
    }
  };

  const filteredPosts = $derived.by(() => {
    let result = [...(props.posts ?? [])];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post =>
        post.content.toLowerCase().includes(query) ||
        post.tags?.some((tag: string) => tag.toLowerCase().includes(query)) ||
        post.author.toLowerCase().includes(query)
      );
    }

    return result;
  });

  const formatDate = (date: Date): string => {
    const now = new Date();
    const postDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;

    return postDate.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const hostClass = $derived(props.class ?? '');
  const headerClass = $derived(props.headerClass ?? '');
  const feedItemClass = $derived(props.feedItemClass ?? '');
  const footerClass = $derived(props.footerClass ?? '');

  return {
    searchQuery,
    activeFilter,
    newPostContent,
    showCreateForm,
    handleFilterChange,
    handleSearchInput,
    handleLike,
    handleComment,
    handleShare,
    handleBookmark,
    handleLoadMore,
    handleCreatePost,
    filteredPosts,
    formatDate,
    hostClass,
    headerClass,
    feedItemClass,
    footerClass,
  };
}

export default createSocialFeedState;
