<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import type { SlotCommentThread as CommentThreadProps } from '$stylist/social/interface/slot/comment-thread';
	import { commentThreadFormatDate } from '$stylist/social/function/script/comment-thread-format-date';
	import { commentThreadHandleKeyDown } from '$stylist/social/function/script/comment-thread-handle-key-down';
	import { commentThreadSubmitReply } from '$stylist/social/function/script/comment-thread-submit-reply';
	import createCommentThreadState from '$stylist/social/function/state/comment-thread/index.svelte';

	let props: CommentThreadProps = $props();
	const state = createCommentThreadState(props);
</script>

<div class={state.wrapperClass} {...props}>
	{#if props.showTitle}
		<div class={state.headerClass}>
			<BaseIcon name="message-circle" class="c-comment-thread__header-icon" />
			<h3 class="c-comment-thread__header-title">{props.title ?? 'Comments'}</h3>
		</div>
	{/if}

	<div class="c-comment-thread__body">
		<div class="c-comment-thread__compose-row">
			<div class="c-comment-thread__compose-avatar">
				<BaseIcon name="user" class="c-comment-thread__compose-avatar-icon" />
			</div>
			<div class="c-comment-thread__compose-field">
				<textarea
					class={state.composerInputClass}
					placeholder="Write a comment..."
					bind:value={state.newComment}
					onkeydown={(e) => commentThreadHandleKeyDown(e, state.submitComment)}
					rows={2}
				></textarea>
				<div class="c-comment-thread__compose-foot">
					<button
						type="button"
						class="c-comment-thread__submit-btn {!state.newComment.trim()
							? 'c-comment-thread__submit-btn--disabled'
							: ''}"
						onclick={state.submitComment}
						disabled={!state.newComment.trim()}
					>
						Comment
					</button>
				</div>
			</div>
		</div>

		<div class="c-comment-thread__comments">
			{#each props.comments ?? [] as comment}
				<div class={state.commentClass}>
					<div class="c-comment-thread__comment-row">
						<div class="c-comment-thread__avatar-wrap">
							{#if comment.author.avatar}
								<img
									src={comment.author.avatar}
									alt={comment.author.name}
									class="c-comment-thread__avatar"
								/>
							{:else}
								<div class="c-comment-thread__avatar-fallback">
									<span class="c-comment-thread__avatar-initial"
										>{comment.author.name.charAt(0).toUpperCase()}</span
									>
								</div>
							{/if}
						</div>
						<div class="c-comment-thread__comment-body">
							<div class="c-comment-thread__comment-meta">
								<h4 class="c-comment-thread__author">{comment.author.name}</h4>
								<span class="c-comment-thread__separator">-</span>
								<span class="c-comment-thread__timestamp"
									>{commentThreadFormatDate(comment.timestamp)}</span
								>
							</div>

							{#if state.editingCommentId === comment.id}
								<textarea
									class={state.composerInputClass}
									bind:value={state.editTexts[comment.id]}
									rows={3}
								></textarea>
								<div class="c-comment-thread__edit-actions">
									<button
										type="button"
										class="c-comment-thread__action-save"
										onclick={() => state.submitEdit(comment.id)}>Save</button
									>
									<button
										type="button"
										class="c-comment-thread__action-cancel"
										onclick={() => {
											state.editingCommentId = null;
										}}>Cancel</button
									>
								</div>
							{:else}
								<p class="c-comment-thread__comment-text">{comment.content}</p>
							{/if}

							<div class="c-comment-thread__actions">
								{#if props.showLikes}
									<button type="button" class={state.actionButtonClass}>
										<span>{comment.likes || 0}</span>
									</button>
								{/if}
								{#if props.showReply}
									<button
										type="button"
										class={state.actionButtonClass}
										onclick={() => {
											if (state.replyTexts[comment.id] === undefined)
												state.replyTexts[comment.id] = '';
										}}
									>
										<BaseIcon name="reply" class="c-comment-thread__action-icon" />
										<span class="c-comment-thread__action-label">Reply</span>
									</button>
								{/if}
								{#if props.currentUserId === comment.author.id}
									<button
										type="button"
										class={state.actionButtonClass}
										onclick={() => state.startEditing(comment.id, comment.content)}
									>
										<BaseIcon name="edit-3" class="c-comment-thread__action-icon" />
										<span class="c-comment-thread__action-label">Edit</span>
									</button>
									<button
										type="button"
										class="c-comment-thread__action-btn c-comment-thread__action-btn--danger"
										onclick={() => props.onDelete?.(comment.id)}
									>
										<BaseIcon name="trash-2" class="c-comment-thread__action-icon" />
										<span class="c-comment-thread__action-label">Delete</span>
									</button>
								{/if}
								<button type="button" class="c-comment-thread__more-btn">
									<BaseIcon name="more-horizontal" class="c-comment-thread__action-icon" />
								</button>
							</div>

							{#if state.replyTexts[comment.id] !== undefined}
								<div class="c-comment-thread__reply-row">
									<textarea
										class={state.composerInputClass}
										placeholder="Write a reply..."
										bind:value={state.replyTexts[comment.id]}
										onkeydown={(e) =>
											commentThreadHandleKeyDown(e, () =>
												commentThreadSubmitReply(
													comment.id,
													state.replyTexts,
													props.onReplySubmit,
													(v) => (state.replyTexts = v)
												)
											)}
										rows={2}
									></textarea>
									<button
										type="button"
										class="c-comment-thread__reply-submit {!state.replyTexts[comment.id]?.trim()
											? 'c-comment-thread__reply-submit--disabled'
											: ''}"
										onclick={() => state.submitReply(comment.id)}
										disabled={!state.replyTexts[comment.id]?.trim()}
									>
										<BaseIcon name="send" class="c-comment-thread__action-icon" />
									</button>
								</div>
							{/if}
						</div>
					</div>

					{#if comment.replies && comment.replies.length > 0}
						<div class="c-comment-thread__nested-replies">
							{#each comment.replies as reply}
								<div class={state.replyClass}>
									<div class="c-comment-thread__comment-row">
										<div
											class="c-comment-thread__avatar-fallback c-comment-thread__avatar-fallback--sm"
										>
											<span class="c-comment-thread__avatar-initial"
												>{reply.author.name.charAt(0).toUpperCase()}</span
											>
										</div>
										<div class="c-comment-thread__comment-body">
											<div class="c-comment-thread__comment-meta">
												<h4 class="c-comment-thread__author">{reply.author.name}</h4>
												<span class="c-comment-thread__separator">-</span>
												<span class="c-comment-thread__timestamp"
													>{commentThreadFormatDate(reply.timestamp)}</span
												>
											</div>
											<p class="c-comment-thread__comment-text">{reply.content}</p>
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

<style>
	.c-comment-thread {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.c-comment-thread__header {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
	}

	.c-comment-thread__header-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
		color: var(--color-text-secondary);
	}
	.c-comment-thread__header-title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}

	.c-comment-thread__body {
		padding: 1rem;
	}

	.c-comment-thread__compose-row {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.c-comment-thread__compose-avatar {
		flex-shrink: 0;
		display: flex;
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: var(--color-background-secondary);
	}

	.c-comment-thread__compose-avatar-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.c-comment-thread__compose-field {
		flex: 1;
	}

	.c-comment-thread__input {
		width: 100%;
		padding: 0.5rem 1rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		resize: vertical;
		font-size: 0.875rem;
		font-family: inherit;
	}

	.c-comment-thread__input:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}

	.c-comment-thread__compose-foot {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.5rem;
	}

	.c-comment-thread__submit-btn {
		border-radius: 0.375rem;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		border: none;
		cursor: pointer;
		background: var(--color-primary-600);
		color: var(--color-text-inverse);
	}

	.c-comment-thread__submit-btn:hover {
		background: var(--color-primary-700);
	}

	.c-comment-thread__submit-btn--disabled {
		background: var(--color-background-secondary);
		color: var(--color-text-secondary);
		cursor: not-allowed;
	}

	.c-comment-thread__comments {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.c-comment-thread__comment {
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-comment-thread__comment:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.c-comment-thread__comment-row {
		display: flex;
		gap: 0.75rem;
	}

	.c-comment-thread__avatar-wrap {
		flex-shrink: 0;
	}
	.c-comment-thread__avatar {
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		object-fit: cover;
	}

	.c-comment-thread__avatar-fallback {
		display: flex;
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: var(--color-background-secondary);
		flex-shrink: 0;
	}

	.c-comment-thread__avatar-fallback--sm {
		width: 1.5rem;
		height: 1.5rem;
	}
	.c-comment-thread__avatar-initial {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.c-comment-thread__comment-body {
		flex: 1;
	}

	.c-comment-thread__comment-meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.25rem;
	}
	.c-comment-thread__author {
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin: 0;
	}
	.c-comment-thread__separator,
	.c-comment-thread__timestamp {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-comment-thread__comment-text {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
		font-size: 0.875rem;
	}

	.c-comment-thread__actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.c-comment-thread__action-btn {
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.c-comment-thread__action-btn:hover {
		color: var(--color-text-primary);
	}
	.c-comment-thread__action-btn--active {
		color: var(--color-primary-600);
	}
	.c-comment-thread__action-btn--danger {
		color: var(--color-danger-600);
	}

	.c-comment-thread__action-icon {
		width: 1rem;
		height: 1rem;
	}
	.c-comment-thread__action-label {
		margin-left: 0.25rem;
	}

	.c-comment-thread__more-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-secondary);
	}

	.c-comment-thread__edit-actions {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.c-comment-thread__action-save {
		border-radius: 0.375rem;
		background: var(--color-primary-600);
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-inverse);
		border: none;
		cursor: pointer;
	}

	.c-comment-thread__action-save:hover {
		background: var(--color-primary-700);
	}

	.c-comment-thread__action-cancel {
		border-radius: 0.375rem;
		background: var(--color-background-secondary);
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		border: none;
		cursor: pointer;
	}

	.c-comment-thread__reply-row {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.75rem;
	}

	.c-comment-thread__reply-submit {
		border-radius: 0.375rem;
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		background: var(--color-primary-600);
		color: var(--color-text-inverse);
		border: none;
		cursor: pointer;
		align-self: flex-end;
	}

	.c-comment-thread__reply-submit:hover {
		background: var(--color-primary-700);
	}

	.c-comment-thread__reply-submit--disabled {
		background: var(--color-background-secondary);
		color: var(--color-text-secondary);
		cursor: not-allowed;
	}

	.c-comment-thread__nested-replies {
		margin-top: 1rem;
		margin-left: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-comment-thread__reply {
		padding-top: 1rem;
		border-top: 1px solid var(--color-border-primary);
	}
</style>
