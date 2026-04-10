<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { CommentThreadProps } from '$stylist/social/interface/component/comment-thread/other';
  import type { CommentThreadItem } from '$stylist/social/interface/component/comment-thread/other';
  import { CommentThreadStyleManager } from '$stylist/social/class/style-manager/comment-thread';
  import {
    commentThreadSubmitComment,
    commentThreadSubmitReply,
    commentThreadSubmitEdit,
    commentThreadStartEditing,
    commentThreadHandleKeyDown,
    commentThreadFormatDate
  } from '$stylist/social/function/script/comment-thread';

  const COMMENT_THREAD_EDIT_3 = 'edit-3';
  const COMMENT_THREAD_MESSAGE_CIRCLE = 'message-circle';
  const COMMENT_THREAD_MORE_HORIZONTAL = 'more-horizontal';
  const COMMENT_THREAD_REPLY = 'reply';
  const COMMENT_THREAD_SEND = 'send';
  const COMMENT_THREAD_TRASH_2 = 'trash-2';
  const COMMENT_THREAD_USER_ICON = 'user';

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
</script>

<div class={CommentThreadStyleManager.getWrapperClass(className)} {...restProps}>
  {#if showTitle}
    <div class={CommentThreadStyleManager.getHeaderClass(headerClass)}>
      <BaseIcon name={COMMENT_THREAD_MESSAGE_CIRCLE} class="h-5 w-5 text-[--color-text-secondary] mr-2" />
      <h3 class="text-lg font-medium text-[--color-text-primary]">{title}</h3>
    </div>
  {/if}

  <div class="p-4">
    <div class="flex space-x-3 mb-6">
      <div class="h-8 w-8 rounded-full bg-[--color-background-secondary] flex items-center justify-center">
        <BaseIcon name={COMMENT_THREAD_USER_ICON} class="h-5 w-5 text-[--color-text-secondary]" />
      </div>
      <div class="flex-1">
        <textarea
          class={CommentThreadStyleManager.getComposerInputClass(inputClass)}
          placeholder="Write a comment..."
          bind:value={newComment}
          onkeydown={(e) => commentThreadHandleKeyDown(e, () => commentThreadSubmitComment(newComment, onCommentSubmit, (v) => newComment = v))}
          rows={2}
        ></textarea>
        <div class="mt-2 flex justify-end">
          <button
            type="button"
            class={`px-4 py-2 text-sm font-medium rounded-md ${!newComment.trim() ? 'bg-[--color-background-secondary] text-[--color-text-secondary] cursor-not-allowed' : 'bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700]'}`}
            onclick={() => commentThreadSubmitComment(newComment, onCommentSubmit, (v) => newComment = v)}
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
                <span class="text-xs text-[--color-text-secondary]">{commentThreadFormatDate(comment.timestamp)}</span>
              </div>

              {#if editingCommentId === comment.id}
                <textarea class={CommentThreadStyleManager.getComposerInputClass(inputClass)} bind:value={editTexts[comment.id]} rows={3}></textarea>
                <div class="mt-2 flex space-x-2">
                  <button type="button" class="px-3 py-1 text-sm font-medium text-[--color-text-inverse] bg-[--color-primary-600] rounded-md hover:bg-[--color-primary-700]" onclick={() => commentThreadSubmitEdit(comment.id, editTexts, onEditSubmit, (v) => editingCommentId = v)}>Save</button>
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
                    <BaseIcon name={COMMENT_THREAD_REPLY} class="h-4 w-4" />
                    <span class="ml-1">Reply</span>
                  </button>
                {/if}
                {#if currentUserId === comment.author.id}
                  <button type="button" class={CommentThreadStyleManager.getActionButtonClass()} onclick={() => commentThreadStartEditing(comment.id, comment.content, (v) => editingCommentId = v, (v) => editTexts = v, editTexts)}>
                    <BaseIcon name={COMMENT_THREAD_EDIT_3} class="h-4 w-4" />
                    <span class="ml-1">Edit</span>
                  </button>
                  <button type="button" class="flex items-center text-sm text-[--color-danger-600]" onclick={() => onDelete?.(comment.id)}>
                    <BaseIcon name={COMMENT_THREAD_TRASH_2} class="h-4 w-4" />
                    <span class="ml-1">Delete</span>
                  </button>
                {/if}
                <button type="button" class="text-[--color-text-secondary]">
                  <BaseIcon name={COMMENT_THREAD_MORE_HORIZONTAL} class="h-4 w-4" />
                </button>
              </div>

              {#if replyTexts[comment.id] !== undefined}
                <div class="mt-3 flex space-x-2">
                  <textarea
                    class={CommentThreadStyleManager.getComposerInputClass(inputClass)}
                    placeholder="Write a reply..."
                    bind:value={replyTexts[comment.id]}
                    onkeydown={(e) => commentThreadHandleKeyDown(e, () => commentThreadSubmitReply(comment.id, replyTexts, onReplySubmit, (v) => replyTexts = v))}
                    rows={2}
                  ></textarea>
                  <button
                    type="button"
                    class={`px-3 py-1 text-sm font-medium rounded-md ${!replyTexts[comment.id]?.trim() ? 'bg-[--color-background-secondary] text-[--color-text-secondary] cursor-not-allowed' : 'bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700]'}`}
                    onclick={() => commentThreadSubmitReply(comment.id, replyTexts, onReplySubmit, (v) => replyTexts = v)}
                    disabled={!replyTexts[comment.id]?.trim()}
                  >
                    <BaseIcon name={COMMENT_THREAD_SEND} class="h-4 w-4" />
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




