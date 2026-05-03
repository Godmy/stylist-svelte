<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { Button } from '$lib';
  import type { SlotCommentSystem as CommentSystemProps } from '$stylist/social/interface/slot/comment-system';
import type { SlotCommentItem as CommentItem } from '$stylist/social/interface/slot/comment-item';
  import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/enum/icon';
  import { createCommentSystemState } from '$stylist/social/function/state/comment-system';

  let props: CommentSystemProps = $props();
  const state = createCommentSystemState(props);
</script>

{#snippet renderComment(_comment: CommentItem, depth = 0)}
  {@const comment = _comment}
  {@const isEditing = state.editCommentId === comment.id}
  {@const hasReplies = comment.replies && comment.replies.length > 0}
  <div class={`comment-item depth-${depth} ${props.commentClass ?? ''}`}>
    <div class="flex space-x-3">
      <div class="flex-shrink-0">
        {#if comment.author.avatar}
          <img class="h-10 w-10 rounded-full" src={comment.author.avatar} alt={comment.author.name} />
        {:else}
          <div class="h-10 w-10 rounded-full bg-[--color-background-secondary] flex items-center justify-center">
            <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'user') ?? 'user'} class="h-5 w-5 text-[--color-text-secondary]" />
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
          <span class="ml-2 text-xs text-[--color-text-secondary]">{state.formatDate(comment.timestamp)}</span>
          {#if comment.isEdited}
            <span class="ml-2 text-xs text-[--color-text-secondary]">(edited)</span>
          {/if}
        </div>

        {#if isEditing}
          <div class="mt-2">
            <textarea
              class={state.controlInputClass}
              rows={3}
              bind:value={state.editContent}
              onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && props.onCommentEdit?.(comment.id, state.editContent)}
            ></textarea>
            <div class="mt-2 flex space-x-2">
              <Button variant="primary" size="sm" onclick={() => { props.onCommentEdit?.(comment.id, state.editContent); state.editCommentId = null; state.editContent = ''; }}>Save</Button>
              <Button variant="ghost" size="sm" onclick={() => { state.editCommentId = null; state.editContent = ''; }}>Cancel</Button>
            </div>
          </div>
        {:else}
          <p class="mt-1 text-sm text-[--color-text-primary]">{comment.content}</p>
        {/if}

        <div class={state.actionBarClass}>
          {#if props.showLikes}
            <button type="button" class={`flex items-center space-x-1 ${comment.isLiked ? 'text-[--color-primary-600]' : ''}`} onclick={() => props.onCommentLike?.(comment.id, true)}>
              <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'thumbs-up') ?? 'thumbs-up'} class="h-4 w-4" />
              <span>{comment.likes ?? 0}</span>
            </button>
          {/if}
          {#if props.showDislikes}
            <button type="button" class={`flex items-center space-x-1 ${comment.isDisliked ? 'text-[--color-danger-600]' : ''}`} onclick={() => props.onCommentLike?.(comment.id, false)}>
              <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'thumbs-down') ?? 'thumbs-down'} class="h-4 w-4" />
              <span>{comment.dislikes ?? 0}</span>
            </button>
          {/if}
          {#if props.showReply}
            <button type="button" class="flex items-center space-x-1" onclick={() => state.toggleReplyForm(comment.id)}>
              <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'reply') ?? 'reply'} class="h-4 w-4" />
              <span>{state.showReplyForm[comment.id] ? 'Cancel reply' : 'Reply'}</span>
            </button>
          {/if}
          {#if props.showEdit && state.currentUserId != null && comment.author.id === state.currentUserId}
            <button type="button" class="flex items-center space-x-1" onclick={() => { state.editCommentId = comment.id; state.editContent = comment.content; }}>
              <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'edit-3') ?? 'edit-3'} class="h-4 w-4" />
              <span>Edit</span>
            </button>
          {/if}
          {#if props.showDelete && state.currentUserId != null && comment.author.id === state.currentUserId}
            <button type="button" class="flex items-center space-x-1 text-[--color-danger-600]" onclick={() => props.onCommentDelete?.(comment.id)}>
              <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'trash-2') ?? 'trash-2'} class="h-4 w-4" />
              <span>Delete</span>
            </button>
          {/if}
          <button type="button" class="flex items-center">
            <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'more-horizontal') ?? 'more-horizontal'} class="h-4 w-4" />
          </button>
        </div>

        {#if state.showReplyForm[comment.id]}
          <div class="mt-4">
            <textarea
              class={state.controlInputClass}
              placeholder="Write a reply..."
              rows={3}
              bind:value={state.replyContent}
              onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && state.submitReply(comment.id)}
            ></textarea>
            <div class="mt-2 flex justify-end space-x-2">
              <Button variant="ghost" size="sm" onclick={() => { state.showReplyForm = { ...state.showReplyForm, [comment.id]: false }; state.replyContent = ''; }}>Cancel</Button>
              <Button variant="primary" size="sm" onclick={() => state.submitReply(comment.id)} disabled={!state.replyContent.trim()}>
                <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'send') ?? 'send'} class="h-4 w-4 mr-1" />Reply
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

<div class={state.wrapperClass} {...props}>
  <div class={state.cardClass}>
    <div class={state.composerClass}>
      <textarea
        class={state.controlInputClass}
        placeholder="Write a comment..."
        rows={4}
        bind:value={state.newComment}
        onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && state.submitComment()}
      ></textarea>
      <div class="mt-3 flex justify-end">
        <button type="button" class={state.primaryButtonClass} onclick={() => state.submitComment()} disabled={!state.newComment.trim()}>
          <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'message-circle') ?? 'message-circle'} class="h-4 w-4 mr-2" />
          Comment
        </button>
      </div>
    </div>

    <div class={state.countHeaderClass}>
      <h3 class="text-sm font-medium text-[--color-text-primary]">{props.comments?.length ?? 0} Comments</h3>
    </div>

    <div class="p-6">
      <div class="flow-root">
        <ul class="-mb-4 divide-y divide-[--color-border-primary]">
          {#each props.comments ?? [] as comment}
            <li class="py-4">
              {@render renderComment(comment)}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
