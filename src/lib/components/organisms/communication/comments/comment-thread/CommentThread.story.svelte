<script lang="ts">
  import CommentThread from './CommentThread.svelte';

  let comments = [
    {
      id: '1',
      author: {
        id: 'user1',
        name: 'Alice Johnson',
        avatar: 'https://placehold.co/40x40',
        role: 'Admin'
      },
      content: 'This is a great discussion thread. I appreciate the insights shared here.',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      likes: 5,
      liked: false,
      isEdited: false,
      replies: [
        {
          id: '1-1',
          author: {
            id: 'user2',
            name: 'Bob Smith',
            avatar: 'https://placehold.co/40x40',
            role: 'User'
          },
          content: 'Absolutely agree with you Alice. This is very helpful.',
          timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
          likes: 2,
          liked: true,
          isEdited: false
        }
      ]
    },
    {
      id: '2',
      author: {
        id: 'user3',
        name: 'Carol Davis',
        avatar: 'https://placehold.co/40x40',
        role: 'Moderator'
      },
      content: 'Thanks for starting this discussion. Looking forward to more contributions.',
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      likes: 3,
      liked: true,
      isEdited: false
    }
  ];

  let title: string = 'Discussion Thread';
  let currentUserId: string = 'user1';
  let showTitle: boolean = true;
  let showReply: boolean = true;
  let showLikes: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CommentThread Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CommentThread</h2>
    <div class="h-[600px] overflow-y-auto">
      <CommentThread 
        {title}
        {comments}
        {currentUserId}
        {showTitle}
        {showReply}
        {showLikes}
        onCommentSubmit={(content) => {
          console.log('New comment submitted:', content);
        }}
        onReplySubmit={(content, parentId) => {
          console.log('New reply submitted:', { content, parentId });
        }}
        onEditSubmit={(commentId, newContent) => {
          console.log('Comment edited:', { commentId, newContent });
        }}
        onDelete={(commentId) => {
          console.log('Comment deleted:', commentId);
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="comment-thread-title" class="block text-sm mb-1">Title:</label>
        <input
          id="comment-thread-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-40"
        />
      </div>

      <div class="flex items-end">
        <label for="show-thread-title" class="flex items-center gap-1">
          <input id="show-thread-title" type="checkbox" bind:checked={showTitle} />
          Show Title
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-thread-reply" class="flex items-center gap-1">
          <input id="show-thread-reply" type="checkbox" bind:checked={showReply} />
          Show Reply
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-thread-likes" class="flex items-center gap-1">
          <input id="show-thread-likes" type="checkbox" bind:checked={showLikes} />
          Show Likes
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">CommentThread Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Minimal Comment Thread (No Actions)</h3>
        <div class="h-[300px] overflow-y-auto">
          <CommentThread 
            title="Comment Thread without Actions"
            {comments}
            currentUserId="user1"
            showReply={false}
            showLikes={false}
          />
        </div>
      </div>
    </div>
  </div>
</div>