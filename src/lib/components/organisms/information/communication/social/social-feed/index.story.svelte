<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import SocialFeed, { type FeedUser as User, type Post } from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showComments', type: 'boolean', defaultValue: true },
      { name: 'showShare', type: 'boolean', defaultValue: true },
      { name: 'showBookmarks', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  const defaultUser: User = {
    id: 'user-1',
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/40'
  };

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
      content: 'Just finished working on an amazing new project! Can\'t wait to share it with everyone.',
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
      title: 'Golden Hour Inspiration',
      subtitle: 'Nature photography',
      image: 'https://via.placeholder.com/640x360?text=Sunset',
      date: new Date(Date.now() - 7200000).toISOString(),
      excerpt: 'Captured one of the best sunsets I\'ve seen this year.',
      author: 'Jane Smith',
      tags: ['#photography', '#nature'],
      content: 'Beautiful sunset today. Nature never fails to amaze me.',
      authorAvatar: 'https://via.placeholder.com/40',
      authorIsVerified: false,
      likes: 42,
      comments: 8,
      shares: 5,
      isLiked: true,
      isBookmarked: true
    }
  ];

  function handleLike(post: Post) {
    console.log('Liked post:', post.id);
  }

  function handleComment(post: Post) {
    console.log('Commented on post:', post.id);
  }

  function handleShare(post: Post) {
    console.log('Shared post:', post.id);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={SocialFeed}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-social-feed grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Social Feed Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive social feed with customizable options.</p>

        <div class="mt-6 max-w-lg mx-auto">
          <SocialFeed
            user={defaultUser}
            posts={defaultPosts}
            showComments={props.showComments}
            showShare={props.showShare}
            showBookmarks={props.showBookmarks}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Social Feed Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different social feed configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Comments</p>
            <div class="max-w-lg mx-auto">
              <SocialFeed
                user={defaultUser}
                posts={defaultPosts}
                showComments={false}
                onLike={handleLike}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Minimal Mode</p>
            <div class="max-w-lg mx-auto">
              <SocialFeed
                user={defaultUser}
                posts={defaultPosts.slice(0, 1)}
                showShare={false}
                showBookmarks={false}
                onLike={handleLike}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

