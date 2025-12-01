<script lang="ts">
  import CommentSystem from './CommentSystem.svelte';

  let comments = [
    {
      id: '1',
      author: {
        id: 'user1',
        name: 'Alice Johnson',
        avatar: 'https://placehold.co/40x40',
        role: 'Admin'
      },
      content: 'This is a great article! I really enjoyed reading it and learned a lot.',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      likes: 5,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
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
          content: 'I agree with you Alice. The insights provided are very valuable.',
          timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
          likes: 2,
          dislikes: 0,
          isLiked: true,
          isDisliked: false,
          isEdited: false
        },
        {
          id: '1-2',
          author: {
            id: 'user3',
            name: 'Carol Davis',
            avatar: 'https://placehold.co/40x40',
            role: 'Moderator'
          },
          content: 'Thanks for sharing your thoughts. We appreciate the feedback!',
          timestamp: new Date(Date.now() - 1200000), // 20 minutes ago
          likes: 1,
          dislikes: 0,
          isLiked: false,
          isDisliked: false,
          isEdited: true
        }
      ]
    },
    {
      id: '2',
      author: {
        id: 'user4',
        name: 'David Wilson',
        avatar: 'https://placehold.co/40x40',
        role: 'User'
      },
      content: 'I found a small typo in the third paragraph. Other than that, great work!',
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      likes: 1,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
      isEdited: false
    }
  ];

  let currentUser = {
    id: 'current',
    name: 'You',
    avatar: 'https://placehold.co/40x40',
    role: 'User'
  };

  let showReply: boolean = true;
  let showLikes: boolean = true;
  let showDislikes: boolean = true;
  let showEdit: boolean = true;
  let showDelete: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CommentSystem Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CommentSystem</h2>
    <div class="h-[600px] overflow-y-auto">
      <CommentSystem 
        {comments}
        {currentUser}
        {showReply}
        {showLikes}
        {showDislikes}
        {showEdit}
        {showDelete}
        onCommentSubmit={(content, parentId) => {
          console.log('New comment submitted:', { content, parentId });
        }}
        onCommentLike={(commentId, like) => {
          console.log('Comment liked/disliked:', { commentId, like });
        }}
        onCommentEdit={(commentId, newContent) => {
          console.log('Comment edited:', { commentId, newContent });
        }}
        onCommentDelete={(commentId) => {
          console.log('Comment deleted:', commentId);
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-reply" class="flex items-center gap-1">
          <input id="show-reply" type="checkbox" bind:checked={showReply} />
          Show Reply
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-likes" class="flex items-center gap-1">
          <input id="show-likes" type="checkbox" bind:checked={showLikes} />
          Show Likes
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-dislikes" class="flex items-center gap-1">
          <input id="show-dislikes" type="checkbox" bind:checked={showDislikes} />
          Show Dislikes
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-edit" class="flex items-center gap-1">
          <input id="show-edit" type="checkbox" bind:checked={showEdit} />
          Show Edit
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-delete" class="flex items-center gap-1">
          <input id="show-delete" type="checkbox" bind:checked={showDelete} />
          Show Delete
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">CommentSystem Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Minimal Comment System (No Actions)</h3>
        <div class="h-[300px] overflow-y-auto">
          <CommentSystem 
            {comments}
            {currentUser}
            showReply={false}
            showLikes={false}
            showDislikes={false}
            showEdit={false}
            showDelete={false}
          />
        </div>
      </div>
    </div>
  </div>
</div>