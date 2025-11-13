<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { 
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    MoreHorizontal,
    User,
    Calendar,
    MapPin,
    Repeat2,
    Globe,
    Users,
    Lock
  } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Avatar from '../../atoms/media/Avatar.svelte';

  export type PostUser = {
    id: string;
    name: string;
    username: string;
    avatar?: string;
  };

  export type PostImage = {
    url: string;
    alt?: string;
    caption?: string;
  };

  export type Post = {
    id: string;
    author: PostUser;
    content: string;
    images?: PostImage[];
    timestamp: Date;
    likesCount?: number;
    commentsCount?: number;
    sharesCount?: number;
    bookmarksCount?: number;
    repostsCount?: number;
    location?: string;
    isLiked?: boolean;
    isBookmarked?: boolean;
    isShared?: boolean;
    isReposted?: boolean;
    tags?: string[];
    privacy?: 'public' | 'friends' | 'private';
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    post: Post;
    showAuthor?: boolean;
    showContent?: boolean;
    showImages?: boolean;
    showActions?: boolean;
    showStats?: boolean;
    showLocation?: boolean;
    showTags?: boolean;
    compact?: boolean;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    imageClass?: string;
    actionsClass?: string;
    statsClass?: string;
    tagsClass?: string;
    onLike?: (postId: string, liked: boolean) => void;
    onComment?: (postId: string) => void;
    onShare?: (postId: string) => void;
    onBookmark?: (postId: string, bookmarked: boolean) => void;
    onRepost?: (postId: string, reposted: boolean) => void;
    onAuthorClick?: (user: PostUser) => void;
    onTagClick?: (tag: string) => void;
    locale?: string;
  };

  let {
    post,
    showAuthor = true,
    showContent = true,
    showImages = true,
    showActions = true,
    showStats = true,
    showLocation = true,
    showTags = true,
    compact = false,
    class: hostClass = '',
    headerClass = '',
    contentClass = '',
    imageClass = '',
    actionsClass = '',
    statsClass = '',
    tagsClass = '',
    onLike,
    onComment,
    onShare,
    onBookmark,
    onRepost,
    onAuthorClick,
    onTagClick,
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let liked = $state(post.isLiked || false);
  let bookmarked = $state(post.isBookmarked || false);
  let reposted = $state(post.isReposted || false);
  let likesCount = $state(post.likesCount || 0);
  let commentsCount = $state(post.commentsCount || 0);

  $effect(() => {
    liked = post.isLiked || false;
    bookmarked = post.isBookmarked || false;
    reposted = post.isReposted || false;
    likesCount = post.likesCount || 0;
    commentsCount = post.commentsCount || 0;
  });

  function handleLike() {
    liked = !liked;
    onLike?.(post.id, liked);
    likesCount += liked ? 1 : -1;
  }

  function handleBookmark() {
    bookmarked = !bookmarked;
    onBookmark?.(post.id, bookmarked);
  }

  function handleRepost() {
    reposted = !reposted;
    onRepost?.(post.id, reposted);
  }

  function handleShare() {
    onShare?.(post.id);
  }

  function handleComment() {
    onComment?.(post.id);
    commentsCount += 1;
  }

  function handleAuthorClick() {
    onAuthorClick?.(post.author);
  }

  function handleTagClick(tag: string) {
    onTagClick?.(tag);
  }

  function formatDate(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    
    // If older than a day, show date
    return new Date(date).toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric',
      year: now.getFullYear() !== new Date(date).getFullYear() ? 'numeric' : undefined
    });
  }

  function getPrivacyIcon(privacy: 'public' | 'friends' | 'private') {
    if (privacy === 'public') return Globe;
    if (privacy === 'friends') return Users;
    return Lock;
  }

  const PrivacyIcon = getPrivacyIcon(post.privacy || 'public');
</script>

<div class={`post-card border rounded-xl overflow-hidden shadow-sm ${compact ? 'max-w-sm' : 'max-w-lg'} ${hostClass}`} {...restProps}>
  <div class={`p-4 ${headerClass}`}>
    {#if showAuthor}
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <button
            type="button"
            class="flex-shrink-0"
            onclick={handleAuthorClick}
            aria-label={`View profile of ${post.author.name}`}
          >
            <Avatar 
              src={post.author.avatar} 
              alt={post.author.name} 
              size="md" 
            />
          </button>
          
          <div class="min-w-0 flex-1">
            <div class="flex items-baseline">
              <p class="text-sm font-medium text-gray-900 truncate">
                {post.author.name}
              </p>
              <p class="ml-2 text-xs text-gray-500 truncate">
                @{post.author.username}
              </p>
            </div>
            
            <div class="flex items-center text-xs text-gray-500">
              <Calendar class="h-3 w-3 mr-1" />
              <time datetime={new Date(post.timestamp).toISOString()}>
                {formatDate(post.timestamp)}
              </time>
              
              {#if showLocation && post.location}
                <span class="mx-2">•</span>
                <MapPin class="h-3 w-3 mr-1" />
                <span>{post.location}</span>
              {/if}
            </div>
          </div>
        </div>
        
        <div class="flex items-center">
          <PrivacyIcon class="h-4 w-4 text-gray-500" />
          <button
            type="button"
            class="ml-2 text-gray-500 hover:text-gray-700"
            onclick={() => {}}
            aria-label="More options"
          >
            <MoreHorizontal class="h-5 w-5" />
          </button>
        </div>
      </div>
    {/if}
    
    {#if showContent && post.content}
      <div class={`mt-4 ${contentClass}`}>
        <p class="text-gray-800 whitespace-pre-wrap">{post.content}</p>
      </div>
    {/if}
    
    {#if showTags && post.tags && post.tags.length > 0}
      <div class={`mt-3 flex flex-wrap gap-2 ${tagsClass}`}>
        {#each post.tags as tag}
          <button
            type="button"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
            onclick={() => handleTagClick(tag)}
          >
            #{tag}
          </button>
        {/each}
      </div>
    {/if}
    
    {#if showImages && post.images && post.images.length > 0}
      <div class={`mt-4 grid ${
        post.images.length === 1 ? 'grid-cols-1' :
        post.images.length === 2 ? 'grid-cols-2' :
        post.images.length === 3 ? 'grid-cols-3' :
        'grid-cols-2 md:grid-cols-4 gap-2'
      } ${imageClass}`}>
        {#each post.images as image, index}
          <div class="relative rounded-lg overflow-hidden aspect-square">
            <img 
              src={image.url} 
              alt={image.alt || `Post image ${index + 1}`} 
              class="w-full h-full object-cover"
            />
            {#if image.caption}
              <div class="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2">
                {image.caption}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
    
    {#if showStats}
      <div class={`mt-4 flex ${statsClass}`}>
        <span class="text-xs text-gray-500 mr-4">
          {likesCount} likes
        </span>
        <span class="text-xs text-gray-500">
          {commentsCount} comments
        </span>
      </div>
    {/if}
    
    {#if showActions}
      <div class={`mt-4 flex justify-between ${actionsClass}`}>
        <button
          type="button"
          class={`inline-flex items-center text-sm font-medium ${
            liked ? 'text-red-600' : 'text-gray-500 hover:text-gray-700'
          }`}
          onclick={handleLike}
          aria-label={liked ? "Unlike post" : "Like post"}
        >
          {#if liked}
            <Heart class="h-5 w-5 mr-1.5 fill-current" />
          {:else}
            <Heart class="h-5 w-5 mr-1.5" />
          {/if}
          <span>{likesCount || ''}</span>
        </button>
        
        <button
          type="button"
          class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          onclick={handleComment}
          aria-label="Comment on post"
        >
          <MessageCircle class="h-5 w-5 mr-1.5" />
          <span>{commentsCount || ''}</span>
        </button>
        
        <button
          type="button"
          class={`inline-flex items-center text-sm font-medium ${
            reposted ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'
          }`}
          onclick={handleRepost}
          aria-label={reposted ? "Undo repost" : "Repost"}
        >
          <Repeat2 class={`h-5 w-5 mr-1.5 ${reposted ? 'text-green-600' : ''}`} />
          <span>{post.repostsCount || ''}</span>
        </button>
        
        <button
          type="button"
          class={`inline-flex items-center text-sm font-medium ${
            bookmarked ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
          onclick={handleBookmark}
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark post"}
        >
          {#if bookmarked}
            <Bookmark class="h-5 w-5 mr-1.5 fill-current" />
          {:else}
            <Bookmark class="h-5 w-5 mr-1.5" />
          {/if}
        </button>
        
        <button
          type="button"
          class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          onclick={handleShare}
          aria-label="Share post"
        >
          <Share2 class="h-5 w-5 mr-1.5" />
          <span>{post.sharesCount || ''}</span>
        </button>
      </div>
    {/if}
  </div>
</div>
