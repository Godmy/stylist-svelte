<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import type { SlotCommentSystem as CommentSystemProps } from '$stylist/social/interface/slot/comment-system';
	import type { SlotCommentItem as CommentItem } from '$stylist/social/interface/slot/comment-item';
	import createCommentSystemState from '$stylist/social/function/state/comment-system/index.svelte';

	let props: CommentSystemProps = $props();
	const state = createCommentSystemState(props);
</script>

{#snippet renderComment(_comment: CommentItem, depth = 0)}
	{@const comment = _comment}
	{@const isEditing = state.editCommentId === comment.id}
	{@const hasReplies = comment.replies && comment.replies.length > 0}
	<div
		class="c-comment-system__item {depth > 0
			? 'c-comment-system__item--nested'
			: ''} {props.commentClass ?? ''}"
	>
		<div class="c-comment-system__item-row">
			<div class="c-comment-system__avatar-wrap">
				{#if comment.author.avatar}
					<img
						class="c-comment-system__avatar"
						src={comment.author.avatar}
						alt={comment.author.name}
					/>
				{:else}
					<div class="c-comment-system__avatar-fallback">
						<BaseIcon name="user" class="c-comment-system__avatar-icon" />
					</div>
				{/if}
			</div>

			<div class="c-comment-system__item-body">
				<div class="c-comment-system__item-meta">
					<span class="c-comment-system__author-name">{comment.author.name}</span>
					{#if comment.author.role}
						<span class="c-comment-system__author-role">{comment.author.role}</span>
					{/if}
					<span class="c-comment-system__timestamp">{state.formatDate(comment.timestamp)}</span>
					{#if comment.isEdited}
						<span class="c-comment-system__edited">(edited)</span>
					{/if}
				</div>

				{#if isEditing}
					<div class="c-comment-system__edit-area">
						<textarea
							class={state.controlInputClass}
							rows={3}
							bind:value={state.editContent}
							onkeydown={(e) =>
								e.key === 'Enter' &&
								!e.shiftKey &&
								props.onCommentEdit?.(comment.id, state.editContent)}
						></textarea>
						<div class="c-comment-system__edit-actions">
							<Button
								variant="primary"
								size="sm"
								onclick={() => {
									props.onCommentEdit?.(comment.id, state.editContent);
									state.editCommentId = null;
									state.editContent = '';
								}}>Save</Button
							>
							<Button
								variant="ghost"
								size="sm"
								onclick={() => {
									state.editCommentId = null;
									state.editContent = '';
								}}>Cancel</Button
							>
						</div>
					</div>
				{:else}
					<p class="c-comment-system__content">{comment.content}</p>
				{/if}

				<div class={state.actionBarClass}>
					{#if props.showLikes}
						<button
							type="button"
							class="c-comment-system__action-btn {comment.isLiked
								? 'c-comment-system__action-btn--active'
								: ''}"
							onclick={() => props.onCommentLike?.(comment.id, true)}
						>
							<BaseIcon name="thumbs-up" class="c-comment-system__action-icon" />
							<span>{comment.likes ?? 0}</span>
						</button>
					{/if}
					{#if props.showDislikes}
						<button
							type="button"
							class="c-comment-system__action-btn {comment.isDisliked
								? 'c-comment-system__action-btn--danger'
								: ''}"
							onclick={() => props.onCommentLike?.(comment.id, false)}
						>
							<BaseIcon name="thumbs-down" class="c-comment-system__action-icon" />
							<span>{comment.dislikes ?? 0}</span>
						</button>
					{/if}
					{#if props.showReply}
						<button
							type="button"
							class="c-comment-system__action-btn"
							onclick={() => state.toggleReplyForm(comment.id)}
						>
							<BaseIcon name="reply" class="c-comment-system__action-icon" />
							<span>{state.showReplyForm[comment.id] ? 'Cancel reply' : 'Reply'}</span>
						</button>
					{/if}
					{#if props.showEdit && state.currentUserId != null && comment.author.id === state.currentUserId}
						<button
							type="button"
							class="c-comment-system__action-btn"
							onclick={() => {
								state.editCommentId = comment.id;
								state.editContent = comment.content;
							}}
						>
							<BaseIcon name="edit-3" class="c-comment-system__action-icon" />
							<span>Edit</span>
						</button>
					{/if}
					{#if props.showDelete && state.currentUserId != null && comment.author.id === state.currentUserId}
						<button
							type="button"
							class="c-comment-system__action-btn c-comment-system__action-btn--danger"
							onclick={() => props.onCommentDelete?.(comment.id)}
						>
							<BaseIcon name="trash-2" class="c-comment-system__action-icon" />
							<span>Delete</span>
						</button>
					{/if}
					<button type="button" class="c-comment-system__action-btn">
						<BaseIcon name="more-horizontal" class="c-comment-system__action-icon" />
					</button>
				</div>

				{#if state.showReplyForm[comment.id]}
					<div class="c-comment-system__reply-form">
						<textarea
							class={state.controlInputClass}
							placeholder="Write a reply..."
							rows={3}
							bind:value={state.replyContent}
							onkeydown={(e) => e.key === 'Enter' && !e.shiftKey && state.submitReply(comment.id)}
						></textarea>
						<div class="c-comment-system__reply-actions">
							<Button
								variant="ghost"
								size="sm"
								onclick={() => {
									state.showReplyForm = { ...state.showReplyForm, [comment.id]: false };
									state.replyContent = '';
								}}>Cancel</Button
							>
							<Button
								variant="primary"
								size="sm"
								onclick={() => state.submitReply(comment.id)}
								disabled={!state.replyContent.trim()}
							>
								<BaseIcon name="send" class="c-comment-system__action-icon" />Reply
							</Button>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>

	{#if hasReplies}
		<div class="c-comment-system__replies">
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
			<div class="c-comment-system__composer-foot">
				<button
					type="button"
					class={state.primaryButtonClass}
					onclick={() => state.submitComment()}
					disabled={!state.newComment.trim()}
				>
					<BaseIcon name="message-circle" class="c-comment-system__action-icon" />
					Comment
				</button>
			</div>
		</div>

		<div class={state.countHeaderClass}>
			<h3 class="c-comment-system__count-title">{props.comments?.length ?? 0} Comments</h3>
		</div>

		<div class="c-comment-system__list">
			<ul class="c-comment-system__comments">
				{#each props.comments ?? [] as comment}
					<li class="c-comment-system__comment-li">
						{@render renderComment(comment)}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.c-comment-system__card {
		background: var(--color-background-primary);
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-comment-system__composer {
		padding: 1.5rem;
	}

	.c-comment-system__input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		resize: vertical;
	}

	.c-comment-system__input:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}

	.c-comment-system__composer-foot {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.75rem;
	}

	.c-comment-system__submit-btn {
		display: inline-flex;
		align-items: center;
		border-radius: 0.375rem;
		background: var(--color-primary-600);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-inverse);
		border: none;
		cursor: pointer;
	}

	.c-comment-system__submit-btn:hover {
		background: var(--color-primary-700);
	}

	.c-comment-system__header {
		border-top: 1px solid var(--color-border-primary);
		padding: 1rem 1.5rem;
		background: var(--color-background-secondary);
	}

	.c-comment-system__count-title {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}

	.c-comment-system__list {
		padding: 1.5rem;
	}

	.c-comment-system__comments {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.c-comment-system__comment-li {
		padding-block: 1rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-comment-system__comment-li:last-child {
		border-bottom: none;
	}

	.c-comment-system__item--nested {
		margin-left: 1.5rem;
	}

	.c-comment-system__item-row {
		display: flex;
		gap: 0.75rem;
	}

	.c-comment-system__avatar-wrap {
		flex-shrink: 0;
	}

	.c-comment-system__avatar {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		object-fit: cover;
	}

	.c-comment-system__avatar-fallback {
		display: flex;
		width: 2.5rem;
		height: 2.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: var(--color-background-secondary);
	}

	.c-comment-system__avatar-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.c-comment-system__item-body {
		flex: 1;
		min-width: 0;
	}

	.c-comment-system__item-meta {
		display: flex;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.c-comment-system__author-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-comment-system__author-role {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		padding: 0.125rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-primary-700, var(--color-primary-600));
	}

	.c-comment-system__timestamp,
	.c-comment-system__edited {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-comment-system__content {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}

	.c-comment-system__actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		margin-top: 0.75rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-comment-system__action-btn {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 0.875rem;
		color: inherit;
		padding: 0;
	}

	.c-comment-system__action-btn--active {
		color: var(--color-primary-600);
	}
	.c-comment-system__action-btn--danger {
		color: var(--color-danger-600);
	}

	.c-comment-system__action-icon {
		width: 1rem;
		height: 1rem;
	}

	.c-comment-system__edit-area {
		margin-top: 0.5rem;
	}

	.c-comment-system__edit-actions,
	.c-comment-system__reply-actions {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.c-comment-system__reply-actions {
		justify-content: flex-end;
	}

	.c-comment-system__reply-form {
		margin-top: 1rem;
	}

	.c-comment-system__replies {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
