<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { MessageCircle, Reply, Send, MoreHorizontal, Trash2, Edit3, User } from 'lucide-svelte';

  type CommentUser = {
    id: string;
    name: string;
    avatar?: string;
    role?: string;
  };

  type Comment = {
    id: string;
    author: CommentUser;
    content: string;
    timestamp: Date;
    replies?: Comment[];
    likes?: number;
    liked?: boolean;
    isEdited?: boolean;
    actions?: Snippet;
  };

  type Props = {
    title?: string;
    comments: Comment[];
    currentUserId?: string;
    onCommentSubmit?: (content: string, parentId?: string) => void;
    onReplySubmit?: (content: string, parentId: string) => void;
    onEditSubmit?: (commentId: string, newContent: string) => void;
    onDelete?: (commentId: string) => void;
    showTitle?: boolean;
    showReply?: boolean;
    showLikes?: boolean;
    class?: string;
    headerClass?: string;
    commentClass?: string;
    replyClass?: string;
    inputClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title = 'Comments',
    comments = [],
    currentUserId,
    onCommentSubmit,
    onReplySubmit,
    onEditSubmit,
    onDelete,
    showTitle = true,
    showReply = true,
    showLikes = true,
    class: className = '',
    headerClass = '',
    commentClass = '',
    replyClass = '',
    inputClass = '',
    ...restProps
  }: Props = $props();

  let newComment = $state('');
  let replyTexts: Record<string, string> = $state({});
  let editTexts: Record<string, string> = $state({});
  let editingCommentId: string | null = $state(null);

  function submitComment() {
    if (newComment.trim() && onCommentSubmit) {
      onCommentSubmit(newComment.trim());
      newComment = '';
    }
  }

  function submitReply(parentId: string) {
    const replyContent = replyTexts[parentId];
    if (replyContent && onReplySubmit) {
      onReplySubmit(replyContent, parentId);
      replyTexts[parentId] = '';
    }
  }

  function submitEdit(commentId: string) {
    const editedContent = editTexts[commentId];
    if (editedContent && onEditSubmit) {
      onEditSubmit(commentId, editedContent);
      editingCommentId = null;
    }
  }

  function startEditing(commentId: string, content: string) {
    editingCommentId = commentId;
    editTexts[commentId] = content;
  }

  function handleKeyDown(e: KeyboardEvent, action: () => void) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      action();
    }
  }

  function formatDate(date: Date) {
    return date.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
</script>

<div class={`border border-gray-200 rounded-lg overflow-hidden ${className}`} {...restProps}>
  {#if showTitle}
    <div class={`border-b px-4 py-3 flex items-center ${headerClass}`}>
      <MessageCircle class="h-5 w-5 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
    </div>
  {/if}

  <div class="p-4">
    <!-- New comment input -->
    <div class="flex space-x-3 mb-6">
      <div class="flex-shrink-0">
        <div class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
          <User class="h-5 w-5 text-gray-600" />
        </div>
      </div>
      <div class="flex-1">
        <textarea
          class={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${inputClass}`}
          placeholder="Write a comment..."
          bind:value={newComment}
          onkeydown={(e) => handleKeyDown(e, submitComment)}
          rows={2}
        ></textarea>
        <div class="mt-2 flex justify-end">
          <button
            type="button"
            class={`px-4 py-2 text-sm font-medium rounded-md ${
              !newComment.trim()
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            onclick={submitComment}
            disabled={!newComment.trim()}
          >
            Comment
          </button>
        </div>
      </div>
    </div>

    <!-- Comments list -->
    <div class="space-y-6">
      {#each comments as comment}
        <div class={`border-b pb-6 last:border-0 last:pb-0 ${commentClass}`}>
          <!-- Main comment -->
          <div class="flex space-x-3">
            <div class="flex-shrink-0">
              {#if comment.author.avatar}
                <img
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  class="h-8 w-8 rounded-full"
                />
              {:else}
                <div class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span class="text-sm font-medium text-gray-700">
                    {comment.author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              {/if}
            </div>
            <div class="flex-1">
              <div class="flex items-center">
                <h4 class="text-sm font-bold text-gray-900">{comment.author.name}</h4>
                {#if comment.author.role}
                  <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {comment.author.role}
                  </span>
                {/if}
                <span class="mx-2 text-gray-400">•</span>
                <span class="text-xs text-gray-500">{formatDate(comment.timestamp)}</span>
                {#if comment.isEdited}
                  <span class="ml-2 text-xs text-gray-400">(edited)</span>
                {/if}
              </div>

              <div class="mt-1">
                {#if editingCommentId === comment.id}
                  <textarea
                    class={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${inputClass}`}
                    bind:value={editTexts[comment.id]}
                    rows={3}
                  ></textarea>
                  <div class="mt-2 flex space-x-2">
                    <button
                      type="button"
                      class="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                      onclick={() => submitEdit(comment.id)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                      onclick={() => editingCommentId = null}
                    >
                      Cancel
                    </button>
                  </div>
                {:else}
                  <p class="text-gray-700">{comment.content}</p>
                {/if}
              </div>

              <div class="mt-2 flex items-center space-x-4">
                {#if showLikes}
                  <button
                    type="button"
                    class={`flex items-center text-sm ${
                      comment.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                  >
                    {#if comment.liked}
                      <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                      </svg>
                    {:else}
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    {/if}
                    <span class="ml-1">{comment.likes || 0}</span>
                  </button>
                {/if}

                {#if showReply}
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:text-gray-700"
                                      onclick={() => {
                                        if (replyTexts[comment.id] === undefined) replyTexts[comment.id] = '';
                                      }}                  >
                    <Reply class="h-4 w-4" />
                    <span class="ml-1">Reply</span>
                  </button>
                {/if}

                {#if currentUserId === comment.author.id}
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:text-gray-700"
                    onclick={() => startEditing(comment.id, comment.content)}
                  >
                    <Edit3 class="h-4 w-4" />
                    <span class="ml-1">Edit</span>
                  </button>
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:text-red-500"
                    onclick={() => onDelete && onDelete(comment.id)}
                  >
                    <Trash2 class="h-4 w-4" />
                    <span class="ml-1">Delete</span>
                  </button>
                {/if}

                <button type="button" class="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal class="h-4 w-4" />
                </button>
              </div>

              <!-- Reply input -->
              {#if replyTexts[comment.id] !== undefined}
                <div class="mt-3 flex space-x-2">
                  <textarea
                    class={`flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${inputClass}`}
                    placeholder="Write a reply..."
                    bind:value={replyTexts[comment.id]}
                    onkeydown={(e) => handleKeyDown(e, () => submitReply(comment.id))}
                    rows={2}
                  ></textarea>
                  <button
                    type="button"
                    class={`px-3 py-1 text-sm font-medium rounded-md ${
                      !replyTexts[comment.id]?.trim()
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    onclick={() => submitReply(comment.id)}
                    disabled={!replyTexts[comment.id]?.trim()}
                  >
                    <Send class="h-4 w-4" />
                  </button>
                </div>
              {/if}
            </div>
          </div>

          <!-- Replies -->
          {#if comment.replies && comment.replies.length > 0}
            <div class="mt-4 ml-10 space-y-4">
              {#each comment.replies as reply}
                <div class={`pt-4 border-t border-gray-100 ${replyClass}`}>
                  <div class="flex space-x-3">
                    <div class="flex-shrink-0">
                      {#if reply.author.avatar}
                        <img
                          src={reply.author.avatar}
                          alt={reply.author.name}
                          class="h-6 w-6 rounded-full"
                        />
                      {:else}
                        <div class="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center">
                          <span class="text-xs font-medium text-gray-700">
                            {reply.author.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      {/if}
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center">
                        <h4 class="text-sm font-bold text-gray-900">{reply.author.name}</h4>
                        {#if reply.author.role}
                          <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {reply.author.role}
                          </span>
                        {/if}
                        <span class="mx-2 text-gray-400">•</span>
                        <span class="text-xs text-gray-500">{formatDate(reply.timestamp)}</span>
                        {#if reply.isEdited}
                          <span class="ml-2 text-xs text-gray-400">(edited)</span>
                        {/if}
                      </div>
                      <div class="mt-1">
                        {#if editingCommentId === reply.id}
                          <textarea
                            class={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${inputClass}`}
                            bind:value={editTexts[reply.id]}
                            rows={3}
                          ></textarea>
                          <div class="mt-2 flex space-x-2">
                            <button
                              type="button"
                              class="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                              onclick={() => submitEdit(reply.id)}
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                              onclick={() => editingCommentId = null}
                            >
                              Cancel
                            </button>
                          </div>
                        {:else}
                          <p class="text-gray-700">{reply.content}</p>
                        {/if}
                      </div>

                      <div class="mt-2 flex items-center space-x-4">
                        {#if showLikes}
                          <button
                            type="button"
                            class={`flex items-center text-sm ${
                              reply.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                            }`}
                          >
                            {#if reply.liked}
                              <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                              </svg>
                            {:else}
                              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4 4 0 000 6.364L12 20.364l7.682-7.682a4 4 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            {/if}
                            <span class="ml-1">{reply.likes || 0}</span>
                          </button>
                        {/if}

                        {#if currentUserId === reply.author.id}
                          <button
                            type="button"
                            class="flex items-center text-sm text-gray-500 hover:text-gray-700"
                            onclick={() => startEditing(reply.id, reply.content)}
                          >
                            <Edit3 class="h-4 w-4" />
                            <span class="ml-1">Edit</span>
                          </button>
                          <button
                            type="button"
                            class="flex items-center text-sm text-gray-500 hover:text-red-500"
                            onclick={() => onDelete && onDelete(reply.id)}
                          >
                            <Trash2 class="h-4 w-4" />
                            <span class="ml-1">Delete</span>
                          </button>
                        {/if}

                        <button type="button" class="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal class="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>