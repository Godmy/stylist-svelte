<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import CommentThread from './index.svelte';
  import type { SlotCommentThreadItem as CommentThreadItem } from '$stylist/social/interface/slot/comment-thread-item';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Discussion Thread' },
    { name: 'showTitle', type: 'boolean', defaultValue: true },
    { name: 'showReply', type: 'boolean', defaultValue: true },
    { name: 'showLikes', type: 'boolean', defaultValue: true }
  ];

  const comments: CommentThreadItem[] = [
    {
      id: '1',
      author: { id: 'user1', name: 'Alice Johnson', avatar: 'https://placehold.co/40x40', role: 'Admin' },
      content: 'This discussion is very useful.',
      timestamp: new Date(Date.now() - 3600000),
      likes: 5,
      replies: [
        {
          id: '1-1',
          author: { id: 'user2', name: 'Bob Smith', avatar: 'https://placehold.co/40x40', role: 'User' },
          content: 'Agreed, thanks for sharing.',
          timestamp: new Date(Date.now() - 1800000),
          likes: 2
        }
      ]
    },
    {
      id: '2',
      author: { id: 'user3', name: 'Carol Davis', avatar: 'https://placehold.co/40x40', role: 'Moderator' },
      content: 'Looking forward to more contributions.',
      timestamp: new Date(Date.now() - 7200000),
      likes: 3
    }
  ];
</script>

<Story
  id="organisms-comment-thread"
  title="Comment Thread"
  component={CommentThread}
  category="Organisms"
  description="Threaded comments with replies, editing and actions."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-comment-thread grid gap-6 rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
      <CommentThread
        title={values.title}
        {comments}
        currentUserId="user1"
        showTitle={values.showTitle}
        showReply={values.showReply}
        showLikes={values.showLikes}
      />
    </section>
  {/snippet}
</Story>



