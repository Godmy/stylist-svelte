<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import CommentSystem from './index.svelte';
  import type { CommentItem, CommentUser } from '$lib/design-system/props/comment-system';

  const controls: ControlConfig[] = [
    { name: 'showReply', type: 'boolean', defaultValue: true },
    { name: 'showLikes', type: 'boolean', defaultValue: true },
    { name: 'showDislikes', type: 'boolean', defaultValue: true },
    { name: 'showEdit', type: 'boolean', defaultValue: true },
    { name: 'showDelete', type: 'boolean', defaultValue: true }
  ];

  const currentUser: CommentUser = {
    id: 'current',
    name: 'You',
    avatar: 'https://placehold.co/40x40',
    role: 'User'
  };

  const comments: CommentItem[] = [
    {
      id: '1',
      author: { id: 'user1', name: 'Alice Johnson', avatar: 'https://placehold.co/40x40', role: 'Admin' },
      content: 'This is a great article. Very useful details.',
      timestamp: new Date(Date.now() - 3600000),
      likes: 5,
      dislikes: 0,
      replies: [
        {
          id: '1-1',
          author: { id: 'user2', name: 'Bob Smith', avatar: 'https://placehold.co/40x40', role: 'User' },
          content: 'Agreed, helped me a lot.',
          timestamp: new Date(Date.now() - 1800000),
          likes: 2,
          dislikes: 0
        }
      ]
    },
    {
      id: '2',
      author: { id: 'user4', name: 'David Wilson', avatar: 'https://placehold.co/40x40', role: 'User' },
      content: 'I found one typo, but overall excellent.',
      timestamp: new Date(Date.now() - 7200000),
      likes: 1,
      dislikes: 0
    }
  ];
</script>

<Story
  id="organisms-comment-system"
  title="Comment System"
  component={CommentSystem}
  category="Organisms"
  description="Threaded comment stream with actions, replies and editing."
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-comment-system grid gap-6 rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
      <CommentSystem
        {comments}
        {currentUser}
        showReply={props.showReply}
        showLikes={props.showLikes}
        showDislikes={props.showDislikes}
        showEdit={props.showEdit}
        showDelete={props.showDelete}
      />
    </section>
  {/snippet}
</Story>

