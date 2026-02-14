<script lang="ts">
  import { Edit3, MessageCircle, MoreHorizontal, Reply, Send, Trash2, User as UserIcon } from 'lucide-svelte';
  import type { CommentThreadItem, CommentThreadProps } from '$lib/design-system/props/comment-thread';
  import { CommentThreadStyleManager } from '$lib/design-system/styles/comment-thread';

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
  }: CommentThreadProps = $props();

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
    const content = replyTexts[parentId];
    if (content && onReplySubmit) {
      onReplySubmit(content, parentId);
      replyTexts[parentId] = '';
    }
  }

  function submitEdit(commentId: string) {
    const content = editTexts[commentId];
    if (content && onEditSubmit) {
      onEditSubmit(commentId, content);
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

<div class={CommentThreadStyleManager.getWrapperClass(className)} {...restProps}>
  {#if showTitle}
    <div class={CommentThreadStyleManager.getHeaderClass(headerClass)}>
      <MessageCircle class="h-5 w-5 text-[--color-text-secondary] mr-2" />
      <h3 class="text-lg font-medium text-[--color-text-primary]">{title}</h3>
    </div>
  {/if}

  <div class="p-4">
    <div class="flex space-x-3 mb-6">
      <div class="h-8 w-8 rounded-full bg-[--color-background-secondary] flex items-center justify-center">
        <UserIcon class="h-5 w-5 text-[--color-text-secondary]" />
      </div>
      <div class="flex-1">
        <textarea
          class={CommentThreadStyleManager.getComposerInputClass(inputClass)}
          placeholder="Write a comment..."
          bind:value={newComment}
          onkeydown={(e) => handleKeyDown(e, submitComment)}
          rows={2}
        ></textarea>
        <div class="mt-2 flex justify-end">
          <button
            type="button"
            class={`px-4 py-2 text-sm font-medium rounded-md ${!newComment.trim() ? 'bg-[--color-background-secondary] text-[--color-text-secondary] cursor-not-allowed' : 'bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700]'}`}
            onclick={submitComment}
            disabled={!newComment.trim()}
          >
            Comment
          </button>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      {#each comments as comment}
        <div class={CommentThreadStyleManager.getCommentClass(commentClass)}>
          <div class="flex space-x-3">
            <div class="flex-shrink-0">
              {#if comment.author.avatar}
                <img src={comment.author.avatar} alt={comment.author.name} class="h-8 w-8 rounded-full" />
              {:else}
                <div class="h-8 w-8 rounded-full bg-[--color-background-secondary] flex items-center justify-center">
                  <span class="text-xs font-medium text-[--color-text-secondary]">{comment.author.name.charAt(0).toUpperCase()}</span>
                </div>
              {/if}
            </div>
            <div class="flex-1">
              <div class="flex items-center">
                <h4 class="text-sm font-bold text-[--color-text-primary]">{comment.author.name}</h4>
                <span class="mx-2 text-[--color-text-secondary]">-</span>
                <span class="text-xs text-[--color-text-secondary]">{formatDate(comment.timestamp)}</span>
              </div>

              {#if editingCommentId === comment.id}
                <textarea class={CommentThreadStyleManager.getComposerInputClass(inputClass)} bind:value={editTexts[comment.id]} rows={3}></textarea>
                <div class="mt-2 flex space-x-2">
                  <button type="button" class="px-3 py-1 text-sm font-medium text-[--color-text-inverse] bg-[--color-primary-600] rounded-md hover:bg-[--color-primary-700]" onclick={() => submitEdit(comment.id)}>Save</button>
                  <button type="button" class="px-3 py-1 text-sm font-medium text-[--color-text-primary] bg-[--color-background-secondary] rounded-md" onclick={() => editingCommentId = null}>Cancel</button>
                </div>
              {:else}
                <p class="mt-1 text-[--color-text-primary]">{comment.content}</p>
              {/if}

              <div class="mt-2 flex items-center space-x-4">
                {#if showLikes}
                  <button type="button" class={CommentThreadStyleManager.getActionButtonClass(comment.liked)}>
                    <span>{comment.likes || 0}</span>
                  </button>
                {/if}
                {#if showReply}
                  <button type="button" class={CommentThreadStyleManager.getActionButtonClass()} onclick={() => { if (replyTexts[comment.id] === undefined) replyTexts[comment.id] = ''; }}>
                    <Reply class="h-4 w-4" />
                    <span class="ml-1">Reply</span>
                  </button>
                {/if}
                {#if currentUserId === comment.author.id}
                  <button type="button" class={CommentThreadStyleManager.getActionButtonClass()} onclick={() => startEditing(comment.id, comment.content)}>
                    <Edit3 class="h-4 w-4" />
                    <span class="ml-1">Edit</span>
                  </button>
                  <button type="button" class="flex items-center text-sm text-[--color-danger-600]" onclick={() => onDelete?.(comment.id)}>
                    <Trash2 class="h-4 w-4" />
                    <span class="ml-1">Delete</span>
                  </button>
                {/if}
                <button type="button" class="text-[--color-text-secondary]">
                  <MoreHorizontal class="h-4 w-4" />
                </button>
              </div>

              {#if replyTexts[comment.id] !== undefined}
                <div class="mt-3 flex space-x-2">
                  <textarea
                    class={CommentThreadStyleManager.getComposerInputClass(inputClass)}
                    placeholder="Write a reply..."
                    bind:value={replyTexts[comment.id]}
                    onkeydown={(e) => handleKeyDown(e, () => submitReply(comment.id))}
                    rows={2}
                  ></textarea>
                  <button
                    type="button"
                    class={`px-3 py-1 text-sm font-medium rounded-md ${!replyTexts[comment.id]?.trim() ? 'bg-[--color-background-secondary] text-[--color-text-secondary] cursor-not-allowed' : 'bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700]'}`}
                    onclick={() => submitReply(comment.id)}
                    disabled={!replyTexts[comment.id]?.trim()}
                  >
                    <Send class="h-4 w-4" />
                  </button>
                </div>
              {/if}
            </div>
          </div>

          {#if comment.replies && comment.replies.length > 0}
            <div class="mt-4 ml-10 space-y-4">
              {#each comment.replies as reply}
                <div class={CommentThreadStyleManager.getReplyClass(replyClass)}>
                  <div class="flex space-x-3">
                    <div class="h-6 w-6 rounded-full bg-[--color-background-secondary] flex items-center justify-center">
                      <span class="text-xs font-medium text-[--color-text-secondary]">{reply.author.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center">
                        <h4 class="text-sm font-bold text-[--color-text-primary]">{reply.author.name}</h4>
                        <span class="mx-2 text-[--color-text-secondary]">-</span>
                        <span class="text-xs text-[--color-text-secondary]">{formatDate(reply.timestamp)}</span>
                      </div>
                      <p class="mt-1 text-[--color-text-primary]">{reply.content}</p>
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
