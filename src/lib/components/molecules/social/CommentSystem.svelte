<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { MessageCircle, Reply, ThumbsUp, ThumbsDown, MoreHorizontal, Send, Edit3, Trash2, User } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type User = {
    id: string;
    name: string;
    avatar?: string;
    role?: string;
    isOnline?: boolean;
  };

  type Comment = {
    id: string;
    author: User;
    content: string;
    timestamp: Date;
    likes?: number;
    dislikes?: number;
    isLiked?: boolean;
    isDisliked?: boolean;
    isEdited?: boolean;
    replies?: Comment[];
    parentId?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    comments: Comment[];
    currentUser: User;
    showReply?: boolean;
    showLikes?: boolean;
    showDislikes?: boolean;
    showEdit?: boolean;
    showDelete?: boolean;
    enableNestedReplies?: boolean;
    maxRepliesDepth?: number;
    maxRepliesToShow?: number; // Number of replies to show initially
    showLoadMore?: boolean;
    onCommentSubmit?: (content: string, parentId?: string) => void;
    onCommentLike?: (commentId: string, like: boolean) => void;
    onCommentEdit?: (commentId: string, newContent: string) => void;
    onCommentDelete?: (commentId: string) => void;
    onReplyToggle?: (commentId: string, show: boolean) => void;
    class?: string;
    commentClass?: string;
    formClass?: string;
    inputClass?: string;
    headerClass?: string;
    actionsClass?: string;
    buttonClass?: string;
    locale?: string;
    timezone?: string;
  };

  let {
    comments = [],
    currentUser,
    showReply = true,
    showLikes = true,
    showDislikes = true,
    showEdit = true,
    showDelete = true,
    enableNestedReplies = true,
    maxRepliesDepth = 5,
    maxRepliesToShow = 3,
    showLoadMore = true,
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
    timezone = 'UTC',
    ...restProps
  }: Props = $props();

  let newComment = $state('');
  let replyContent = $state('');
  let showReplyForm = $state<Record<string, boolean>>({});
  let editCommentId: string | null = $state(null);
  let editContent = $state('');

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
    showReplyForm = { 
      ...showReplyForm, 
      [commentId]: !showReplyForm[commentId] 
    };
    onReplyToggle?.(commentId, showReplyForm[commentId]);
  }

  function handleLike(commentId: string) {
    onCommentLike?.(commentId, true);
  }

  function handleDislike(commentId: string) {
    onCommentLike?.(commentId, false);
  }

  function handleEdit(commentId: string) {
    if (editContent.trim()) {
      onCommentEdit?.(commentId, editContent);
      editCommentId = null;
      editContent = '';
    }
  }

  function startEditing(commentId: string, currentContent: string) {
    editCommentId = commentId;
    editContent = currentContent;
  }

  function handleDelete(commentId: string) {
    onCommentDelete?.(commentId);
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

  function isCurrentUserComment(authorId: string): boolean {
    return authorId === currentUserId;
  }

  let currentUserId = $derived(currentUser.id);
</script>

{#snippet renderComment(_comment: Comment, depth = 0)}
  {@const comment = _comment}
  {@const isEditing = editCommentId === comment.id}
  {@const hasReplies = comment.replies && comment.replies.length > 0}
  <div class={`border-b border-gray-200 pb-4 ${depth > 0 ? 'ml-6' : ''}`}>
    <div class="flex space-x-3">
      <div class="flex-shrink-0">
        {#if comment.author.avatar}
          <img 
            class="h-10 w-10 rounded-full" 
            src={comment.author.avatar} 
            alt={comment.author.name} 
          />
        {:else}
          <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User class="h-5 w-5 text-gray-600" />
          </div>
        {/if}
      </div>
      
      <div class="min-w-0 flex-1">
        <div class="flex items-baseline">
          <span class="text-sm font-medium text-gray-900">{comment.author.name}</span>
          {#if comment.author.role}
            <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {comment.author.role}
            </span>
          {/if}
          <span class="ml-2 text-xs text-gray-500">{formatDate(comment.timestamp)}</span>
          {#if comment.isEdited}
            <span class="ml-2 text-xs text-gray-500">(edited)</span>
          {/if}
        </div>
        
        {#if isEditing}
          <div class="mt-2">
            <textarea
              class={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${inputClass}`}
              rows={3}
              bind:value={editContent}
              onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && handleEdit(comment.id)}
            ></textarea>
            <div class="mt-2 flex space-x-2">
              <Button variant="primary" size="sm" onclick={() => handleEdit(comment.id)}>
                Save
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onclick={() => { editCommentId = null; editContent = ''; }}
              >
                Cancel
              </Button>
            </div>
          </div>
        {:else}
          <p class="mt-1 text-sm text-gray-800">
            {comment.content}
          </p>
        {/if}
        
        <div class={`mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500 ${actionsClass}`}>
          {#if showLikes}
            <button
              type="button"
              class={`flex items-center space-x-1 ${comment.isLiked ? 'text-blue-600' : ''}`}
              onclick={() => handleLike(comment.id)}
            >
              <ThumbsUp class="h-4 w-4" />
              <span>{comment.likes ?? 0}</span>
            </button>
          {/if}
          
          {#if showDislikes}
            <button
              type="button"
              class={`flex items-center space-x-1 ${comment.isDisliked ? 'text-red-600' : ''}`}
              onclick={() => handleDislike(comment.id)}
            >
              <ThumbsDown class="h-4 w-4" />
              <span>{comment.dislikes ?? 0}</span>
            </button>
          {/if}
          
          {#if showReply}
            <button
              type="button"
              class="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
              onclick={() => toggleReplyForm(comment.id)}
            >
              <Reply class="h-4 w-4" />
              <span>{showReplyForm[comment.id] ? 'Cancel reply' : 'Reply'}</span>
            </button>
          {/if}
          
          {#if showEdit && isCurrentUserComment(comment.author.id)}
            <button
              type="button"
              class="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
              onclick={() => startEditing(comment.id, comment.content)}
            >
              <Edit3 class="h-4 w-4" />
              <span>Edit</span>
            </button>
          {/if}
          
          {#if showDelete && isCurrentUserComment(comment.author.id)}
            <button
              type="button"
              class="flex items-center space-x-1 text-red-500 hover:text-red-700"
              onclick={() => handleDelete(comment.id)}
            >
              <Trash2 class="h-4 w-4" />
              <span>Delete</span>
            </button>
          {/if}
          
          <button
            type="button"
            class="flex items-center text-gray-500 hover:text-gray-700"
            aria-label="More actions"
          >
            <MoreHorizontal class="h-4 w-4" />
          </button>
        </div>
        
        {#if showReplyForm[comment.id]}
          <div class="mt-4">
            <div class="flex space-x-2">
              <div class="flex-shrink-0">
                {#if currentUser.avatar}
                  <img 
                    class="h-8 w-8 rounded-full" 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                  />
                {:else}
                  <div class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User class="h-4 w-4 text-gray-600" />
                  </div>
                {/if}
              </div>
              
              <div class="flex-1">
                <textarea
                  class={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${inputClass}`}
                  placeholder="Write a reply..."
                  rows={3}
                  bind:value={replyContent}
                  onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && submitReply(comment.id)}
                ></textarea>
                <div class="mt-2 flex justify-end space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onclick={() => {
                      showReplyForm = { ...showReplyForm, [comment.id]: false };
                      replyContent = '';
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onclick={() => submitReply(comment.id)}
                    disabled={!replyContent.trim()}
                  >
                    <Send class="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </div>
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

<div class={`comment-system ${hostClass}`} {...restProps}>
  <div class="bg-white shadow rounded-lg">
    <div class="p-6">
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          {#if currentUser.avatar}
            <img 
              class="h-10 w-10 rounded-full" 
              src={currentUser.avatar} 
              alt={currentUser.name} 
            />
          {:else}
            <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <User class="h-5 w-5 text-gray-600" />
            </div>
          {/if}
        </div>
        
        <div class="flex-1">
          <textarea
            class={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${inputClass}`}
            placeholder="Write a comment..."
            rows={4}
            bind:value={newComment}
            onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && submitComment()}
          ></textarea>
          
          <div class="mt-3 flex justify-end">
            <Button
              variant="primary"
              onclick={() => submitComment()}
              disabled={!newComment.trim()}
              class={buttonClass}
            >
              <MessageCircle class="h-4 w-4 mr-2" />
              Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="border-t border-gray-200 px-6 py-4 bg-gray-50">
      <h3 class="text-sm font-medium text-gray-900">{comments.length} Comments</h3>
    </div>
    
    <div class="p-6">
      <div class="flow-root">
        <ul class="-mb-4 divide-y divide-gray-200">
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
