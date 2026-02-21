<script lang="ts">
  import { Edit3, MessageCircle, MoreHorizontal, Reply, Send, ThumbsDown, ThumbsUp, Trash2, User as UserIcon } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import type { CommentItem, CommentSystemProps } from '$lib/design-system/props/information/comment-system';
  import { CommentSystemStyleManager } from '$lib/design-system/styles/information/comment-system';

  let {
    comments = [],
    currentUser,
    showReply = true,
    showLikes = true,
    showDislikes = true,
    showEdit = true,
    showDelete = true,
    onCommentSubmit,
    onCommentLike,
    onCommentEdit,
    onCommentDelete,
    onReplyToggle,
    class: hostClass = '',
    commentClass = '',
    formClass = '',
    inputClass = '',
    headerClass = '',
    actionsClass = '',
    buttonClass = '',
    locale = 'en-US',
    ...restProps
  }: CommentSystemProps = $props();

  let newComment = $state('');
  let replyContent = $state('');
  let showReplyForm = $state<Record<string, boolean>>({});
  let editCommentId: string | null = $state(null);
  let editContent = $state('');

  const currentUserId = $derived(currentUser.id);
  const wrapperClass = $derived(CommentSystemStyleManager.getWrapperClass(hostClass));
  const cardClass = $derived(CommentSystemStyleManager.getCardClass());
  const composerClass = $derived(CommentSystemStyleManager.getComposerClass(formClass));
  const controlInputClass = $derived(CommentSystemStyleManager.getInputClass(inputClass));
  const countHeaderClass = $derived(CommentSystemStyleManager.getHeaderClass(headerClass));
  const actionBarClass = $derived(CommentSystemStyleManager.getActionsClass(actionsClass));
  const primaryButtonClass = $derived(CommentSystemStyleManager.getPrimaryButtonClass(buttonClass));

  function submitComment(parentId?: string) {
    if (!newComment.trim()) return;
    onCommentSubmit?.(newComment, parentId);
    newComment = '';
  }

  function submitReply(commentId: string) {
    if (!replyContent.trim()) return;
    onCommentSubmit?.(replyContent, commentId);
    replyContent = '';
    showReplyForm = { ...showReplyForm, [commentId]: false };
  }

  function toggleReplyForm(commentId: string) {
    const nextState = !showReplyForm[commentId];
    showReplyForm = { ...showReplyForm, [commentId]: nextState };
    onReplyToggle?.(commentId, nextState);
  }

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

{#snippet renderComment(_comment: CommentItem, depth = 0)}
  {@const comment = _comment}
  {@const isEditing = editCommentId === comment.id}
  {@const hasReplies = comment.replies && comment.replies.length > 0}
  <div class={CommentSystemStyleManager.getCommentItemClass(commentClass, depth)}>
    <div class="flex space-x-3">
      <div class="flex-shrink-0">
        {#if comment.author.avatar}
          <img class="h-10 w-10 rounded-full" src={comment.author.avatar} alt={comment.author.name} />
        {:else}
          <div class="h-10 w-10 rounded-full bg-[--color-background-secondary] flex items-center justify-center">
            <UserIcon class="h-5 w-5 text-[--color-text-secondary]" />
          </div>
        {/if}
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex items-baseline">
          <span class="text-sm font-medium text-[--color-text-primary]">{comment.author.name}</span>
          {#if comment.author.role}
            <span class="ml-2 inline-flex items-center rounded-full bg-[--color-primary-100] px-2 py-0.5 text-xs font-medium text-[--color-primary-700]">
              {comment.author.role}
            </span>
          {/if}
          <span class="ml-2 text-xs text-[--color-text-secondary]">{formatDate(comment.timestamp)}</span>
          {#if comment.isEdited}
            <span class="ml-2 text-xs text-[--color-text-secondary]">(edited)</span>
          {/if}
        </div>

        {#if isEditing}
          <div class="mt-2">
            <textarea
              class={controlInputClass}
              rows={3}
              bind:value={editContent}
              onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && onCommentEdit?.(comment.id, editContent)}
            ></textarea>
            <div class="mt-2 flex space-x-2">
              <Button variant="primary" size="sm" onclick={() => { onCommentEdit?.(comment.id, editContent); editCommentId = null; editContent = ''; }}>Save</Button>
              <Button variant="ghost" size="sm" onclick={() => { editCommentId = null; editContent = ''; }}>Cancel</Button>
            </div>
          </div>
        {:else}
          <p class="mt-1 text-sm text-[--color-text-primary]">{comment.content}</p>
        {/if}

        <div class={actionBarClass}>
          {#if showLikes}
            <button type="button" class={`flex items-center space-x-1 ${comment.isLiked ? 'text-[--color-primary-600]' : ''}`} onclick={() => onCommentLike?.(comment.id, true)}>
              <ThumbsUp class="h-4 w-4" />
              <span>{comment.likes ?? 0}</span>
            </button>
          {/if}
          {#if showDislikes}
            <button type="button" class={`flex items-center space-x-1 ${comment.isDisliked ? 'text-[--color-danger-600]' : ''}`} onclick={() => onCommentLike?.(comment.id, false)}>
              <ThumbsDown class="h-4 w-4" />
              <span>{comment.dislikes ?? 0}</span>
            </button>
          {/if}
          {#if showReply}
            <button type="button" class="flex items-center space-x-1" onclick={() => toggleReplyForm(comment.id)}>
              <Reply class="h-4 w-4" />
              <span>{showReplyForm[comment.id] ? 'Cancel reply' : 'Reply'}</span>
            </button>
          {/if}
          {#if showEdit && comment.author.id === currentUserId}
            <button type="button" class="flex items-center space-x-1" onclick={() => { editCommentId = comment.id; editContent = comment.content; }}>
              <Edit3 class="h-4 w-4" />
              <span>Edit</span>
            </button>
          {/if}
          {#if showDelete && comment.author.id === currentUserId}
            <button type="button" class="flex items-center space-x-1 text-[--color-danger-600]" onclick={() => onCommentDelete?.(comment.id)}>
              <Trash2 class="h-4 w-4" />
              <span>Delete</span>
            </button>
          {/if}
          <button type="button" class="flex items-center">
            <MoreHorizontal class="h-4 w-4" />
          </button>
        </div>

        {#if showReplyForm[comment.id]}
          <div class="mt-4">
            <textarea
              class={controlInputClass}
              placeholder="Write a reply..."
              rows={3}
              bind:value={replyContent}
              onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && submitReply(comment.id)}
            ></textarea>
            <div class="mt-2 flex justify-end space-x-2">
              <Button variant="ghost" size="sm" onclick={() => { showReplyForm = { ...showReplyForm, [comment.id]: false }; replyContent = ''; }}>Cancel</Button>
              <Button variant="primary" size="sm" onclick={() => submitReply(comment.id)} disabled={!replyContent.trim()}>
                <Send class="h-4 w-4 mr-1" />Reply
              </Button>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  {#if hasReplies}
    <div class="mt-4 space-y-4">
      {#each comment.replies as reply}
        {@render renderComment(reply, depth + 1)}
      {/each}
    </div>
  {/if}
{/snippet}

<div class={wrapperClass} {...restProps}>
  <div class={cardClass}>
    <div class={composerClass}>
      <textarea
        class={controlInputClass}
        placeholder="Write a comment..."
        rows={4}
        bind:value={newComment}
        onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && submitComment()}
      ></textarea>
      <div class="mt-3 flex justify-end">
        <button type="button" class={primaryButtonClass} onclick={() => submitComment()} disabled={!newComment.trim()}>
          <MessageCircle class="h-4 w-4 mr-2" />
          Comment
        </button>
      </div>
    </div>

    <div class={countHeaderClass}>
      <h3 class="text-sm font-medium text-[--color-text-primary]">{comments.length} Comments</h3>
    </div>

    <div class="p-6">
      <div class="flow-root">
        <ul class="-mb-4 divide-y divide-[--color-border-primary]">
          {#each comments as comment}
            <li class="py-4">
              {@render renderComment(comment)}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
