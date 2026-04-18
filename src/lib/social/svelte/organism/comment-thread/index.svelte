<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { SlotCommentThread as CommentThreadProps } from '$stylist/social/interface/slot/comment-thread';
import type { SlotCommentThreadItem as CommentThreadItem } from '$stylist/social/interface/slot/comment-thread-item';
  import { CommentThreadStyleManager } from '$stylist/social/class/style-manager/comment-thread';
  import {
    commentThreadSubmitComment,
    commentThreadSubmitReply,
    commentThreadSubmitEdit,
    commentThreadStartEditing,
    commentThreadHandleKeyDown,
    commentThreadFormatDate
  } from '$stylist/social/function/script/comment-thread';
  import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/icon';
  import { createCommentThreadState } from '$stylist/social/function/state/comment-thread';

  let props: CommentThreadProps = $props();
  const state = createCommentThreadState(props);
</script>

<div class={state.wrapperClass} {...props}>
  {#if props.showTitle}
    <div class={state.headerClass}>
      <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'message-circle') ?? 'message-circle'} class="h-5 w-5 text-[--color-text-secondary] mr-2" />
      <h3 class="text-lg font-medium text-[--color-text-primary]">{props.title ?? 'Comments'}</h3>
    </div>
  {/if}

  <div class="p-4">
    <div class="flex space-x-3 mb-6">
      <div class="h-8 w-8 rounded-full bg-[--color-background-secondary] flex items-center justify-center">
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'user') ?? 'user'} class="h-5 w-5 text-[--color-text-secondary]" />
      </div>
      <div class="flex-1">
        <textarea
          class={state.composerInputClass}
          placeholder="Write a comment..."
          bind:value={state.newComment}
          onkeydown={(e) => commentThreadHandleKeyDown(e, state.submitComment)}
          rows={2}
        ></textarea>
        <div class="mt-2 flex justify-end">
          <button
            type="button"
            class={`px-4 py-2 text-sm font-medium rounded-md ${!state.newComment.trim() ? 'bg-[--color-background-secondary] text-[--color-text-secondary] cursor-not-allowed' : 'bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700]'}`}
            onclick={state.submitComment}
            disabled={!state.newComment.trim()}
          >
            Comment
          </button>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      {#each props.comments ?? [] as comment}
        <div class={state.commentClass}>
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
                <span class="text-xs text-[--color-text-secondary]">{commentThreadFormatDate(comment.timestamp)}</span>
              </div>

              {#if state.editingCommentId === comment.id}
                <textarea class={state.composerInputClass} bind:value={state.editTexts[comment.id]} rows={3}></textarea>
                <div class="mt-2 flex space-x-2">
                  <button type="button" class="px-3 py-1 text-sm font-medium text-[--color-text-inverse] bg-[--color-primary-600] rounded-md hover:bg-[--color-primary-700]" onclick={() => state.submitEdit(comment.id)}>Save</button>
                  <button type="button" class="px-3 py-1 text-sm font-medium text-[--color-text-primary] bg-[--color-background-secondary] rounded-md" onclick={() => { state.editingCommentId = null; }}>Cancel</button>
                </div>
              {:else}
                <p class="mt-1 text-[--color-text-primary]">{comment.content}</p>
              {/if}

              <div class="mt-2 flex items-center space-x-4">
                {#if props.showLikes}
                  <button type="button" class={state.actionButtonClass}>
                    <span>{comment.likes || 0}</span>
                  </button>
                {/if}
                {#if props.showReply}
                  <button type="button" class={state.actionButtonClass} onclick={() => { if (state.replyTexts[comment.id] === undefined) state.replyTexts[comment.id] = ''; }}>
                    <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'reply') ?? 'reply'} class="h-4 w-4" />
                    <span class="ml-1">Reply</span>
                  </button>
                {/if}
                {#if props.currentUserId === comment.author.id}
                  <button type="button" class={state.actionButtonClass} onclick={() => state.startEditing(comment.id, comment.content)}>
                    <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'edit-3') ?? 'edit-3'} class="h-4 w-4" />
                    <span class="ml-1">Edit</span>
                  </button>
                  <button type="button" class="flex items-center text-sm text-[--color-danger-600]" onclick={() => props.onDelete?.(comment.id)}>
                    <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'trash-2') ?? 'trash-2'} class="h-4 w-4" />
                    <span class="ml-1">Delete</span>
                  </button>
                {/if}
                <button type="button" class="text-[--color-text-secondary]">
                  <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'more-horizontal') ?? 'more-horizontal'} class="h-4 w-4" />
                </button>
              </div>

              {#if state.replyTexts[comment.id] !== undefined}
                <div class="mt-3 flex space-x-2">
                  <textarea
                    class={state.composerInputClass}
                    placeholder="Write a reply..."
                    bind:value={state.replyTexts[comment.id]}
                    onkeydown={(e) => commentThreadHandleKeyDown(e, () => commentThreadSubmitReply(comment.id, state.replyTexts, props.onReplySubmit, (v) => state.replyTexts = v))}
                    rows={2}
                  ></textarea>
                  <button
                    type="button"
                    class={`px-3 py-1 text-sm font-medium rounded-md ${!state.replyTexts[comment.id]?.trim() ? 'bg-[--color-background-secondary] text-[--color-text-secondary] cursor-not-allowed' : 'bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700]'}`}
                    onclick={() => state.submitReply(comment.id)}
                    disabled={!state.replyTexts[comment.id]?.trim()}
                  >
                    <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'send') ?? 'send'} class="h-4 w-4" />
                  </button>
                </div>
              {/if}
            </div>
          </div>

          {#if comment.replies && comment.replies.length > 0}
            <div class="mt-4 ml-10 space-y-4">
              {#each comment.replies as reply}
                <div class={state.replyClass}>
                  <div class="flex space-x-3">
                    <div class="h-6 w-6 rounded-full bg-[--color-background-secondary] flex items-center justify-center">
                      <span class="text-xs font-medium text-[--color-text-secondary]">{reply.author.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center">
                        <h4 class="text-sm font-bold text-[--color-text-primary]">{reply.author.name}</h4>
                        <span class="mx-2 text-[--color-text-secondary]">-</span>
                        <span class="text-xs text-[--color-text-secondary]">{commentThreadFormatDate(reply.timestamp)}</span>
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
