<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import PostCard from '$stylist/commerce/component/molecule/post-card/index.svelte';
	import createSocialFeedState from '$stylist/social/function/state/social-feed/index.svelte';
	import type { Props } from '$stylist/social/type/struct/social-feed/-props';

	let props: Props = $props();
	const state = createSocialFeedState(props);
</script>

<div class="c-social-feed {state.hostClass}" {...props}>
	<div class="c-social-feed__header {state.headerClass}">
		<div class="c-social-feed__header-top">
			<h2 class="c-social-feed__title">Social Feed</h2>
			{#if props.showSearch}
				<div class="c-social-feed__search-wrap">
					<div class="c-social-feed__search-icon-wrap">
						<BaseIcon name="search" class="c-social-feed__search-icon" />
					</div>
					<input
						type="text"
						class="c-social-feed__search-input"
						placeholder="Search posts..."
						value={state.searchQuery}
						oninput={state.handleSearchInput}
					/>
				</div>
			{/if}
		</div>

		{#if props.showFilters}
			<div class="c-social-feed__filters">
				{#each props.filters ?? [] as filter}
					<button
						type="button"
						class="c-social-feed__filter-btn {state.activeFilter === filter.id
							? 'c-social-feed__filter-btn--active'
							: ''}"
						onclick={() => state.handleFilterChange(filter.id)}
					>
						{filter.label}
					</button>
				{/each}
			</div>
		{/if}
	</div>

	{#if props.showCreatePost}
		<div class="c-social-feed__compose">
			<div class="c-social-feed__compose-row">
				{#if props.currentUser?.avatar}
					<img
						class="c-social-feed__compose-avatar"
						src={props.currentUser.avatar}
						alt={props.currentUser.name}
					/>
				{:else}
					<div class="c-social-feed__compose-avatar-fallback">
						<BaseIcon name="user" class="c-social-feed__compose-avatar-icon" />
					</div>
				{/if}
				<div class="c-social-feed__compose-field">
					{#if state.showCreateForm}
						<div>
							<textarea
								class="c-social-feed__compose-textarea"
								placeholder="What's on your mind?"
								rows="3"
								bind:value={state.newPostContent}
							></textarea>
							<div class="c-social-feed__compose-actions">
								<button
									type="button"
									class="c-social-feed__compose-cancel"
									onclick={() => (state.showCreateForm = false)}>Cancel</button
								>
								<button
									type="button"
									class="c-social-feed__compose-post"
									onclick={state.handleCreatePost}
									disabled={!state.newPostContent.trim()}>Post</button
								>
							</div>
						</div>
					{:else}
						<button
							type="button"
							class="c-social-feed__compose-trigger"
							onclick={() => (state.showCreateForm = true)}
						>
							{#if props.currentUser?.avatar}
								<img
									class="c-social-feed__compose-trigger-avatar"
									src={props.currentUser.avatar}
									alt={props.currentUser.name}
								/>
							{/if}
							<span class="c-social-feed__compose-trigger-text"
								>What's on your mind, {props.currentUser?.name || 'User'}?</span
							>
						</button>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	<div class="c-social-feed__posts">
		{#if state.filteredPosts.length === 0}
			<div class="c-social-feed__empty">
				<div class="c-social-feed__empty-icon-wrap">
					<BaseIcon name="message-circle" class="c-social-feed__empty-icon" />
				</div>
				<h3 class="c-social-feed__empty-title">No posts</h3>
				<p class="c-social-feed__empty-text">Get started by creating your first post.</p>
			</div>
		{/if}

		{#each state.filteredPosts as post}
			<div class="c-social-feed__post-item {state.feedItemClass}">
				<PostCard
					title={post.title}
					subtitle={post.subtitle}
					image={post.image}
					date={post.date ? state.formatDate(new Date(post.date)) : ''}
					excerpt={post.excerpt}
					author={post.author}
					tags={post.tags}
					actions={[
						{ label: `Like (${post.likes})`, onClick: () => state.handleLike(post.id) },
						{ label: `Comment (${post.comments})`, onClick: () => state.handleComment(post.id) },
						{ label: `Share (${post.shares})`, onClick: () => state.handleShare(post.id) },
						{ label: `Bookmark`, onClick: () => state.handleBookmark(post.id) }
					]}
				/>
			</div>
		{/each}
	</div>

	{#if props.showLoadMore}
		<div class="c-social-feed__footer {state.footerClass}">
			{#if state.filteredPosts.length > 0}
				<button type="button" class="c-social-feed__load-more" onclick={state.handleLoadMore}>
					Load more posts
				</button>
			{/if}
		</div>
	{/if}
</div>

<style>
	.c-social-feed {
		display: flex;
		flex-direction: column;
	}

	.c-social-feed__header {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 1rem;
	}

	.c-social-feed__header-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.c-social-feed__title {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin: 0;
	}

	.c-social-feed__search-wrap {
		position: relative;
		width: 16rem;
	}

	.c-social-feed__search-icon-wrap {
		pointer-events: none;
		position: absolute;
		inset-block: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}
	.c-social-feed__search-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-social-feed__search-input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem 0.5rem 2.5rem;
		font-size: 0.875rem;
	}

	.c-social-feed__search-input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-social-feed__filters {
		display: flex;
		gap: 1rem;
	}

	.c-social-feed__filter-btn {
		display: flex;
		align-items: center;
		border-radius: 9999px;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		border: none;
		cursor: pointer;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.c-social-feed__filter-btn:hover {
		background: var(--color-background-tertiary, var(--color-background-secondary));
	}

	.c-social-feed__filter-btn--active {
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		color: var(--color-primary-800, var(--color-primary-700));
	}

	.c-social-feed__compose {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 1rem;
	}

	.c-social-feed__compose-row {
		display: flex;
		gap: 0.75rem;
	}

	.c-social-feed__compose-avatar {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		object-fit: cover;
		flex-shrink: 0;
	}

	.c-social-feed__compose-avatar-fallback {
		display: flex;
		width: 2.5rem;
		height: 2.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: var(--color-background-tertiary, var(--color-background-secondary));
		flex-shrink: 0;
	}

	.c-social-feed__compose-avatar-icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--color-text-secondary);
	}

	.c-social-feed__compose-field {
		flex: 1;
	}

	.c-social-feed__compose-textarea {
		display: block;
		width: 100%;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		font-family: inherit;
		resize: vertical;
	}

	.c-social-feed__compose-textarea:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-social-feed__compose-actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.75rem;
		margin-top: 0.75rem;
	}

	.c-social-feed__compose-cancel {
		display: inline-flex;
		align-items: center;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		cursor: pointer;
	}

	.c-social-feed__compose-cancel:hover {
		background: var(--color-background-secondary);
	}

	.c-social-feed__compose-post {
		display: inline-flex;
		align-items: center;
		border-radius: 0.375rem;
		border: none;
		background: var(--color-primary-600);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-inverse);
		cursor: pointer;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-social-feed__compose-post:hover {
		background: var(--color-primary-700);
	}
	.c-social-feed__compose-post:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.c-social-feed__compose-trigger {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: flex-start;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		padding: 0.75rem 1rem;
		text-align: left;
		color: var(--color-text-secondary);
		background: var(--color-background-primary);
		cursor: pointer;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-social-feed__compose-trigger:hover {
		background: var(--color-background-secondary);
	}

	.c-social-feed__compose-trigger-avatar {
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		object-fit: cover;
	}
	.c-social-feed__compose-trigger-text {
		margin-left: 1rem;
	}

	.c-social-feed__posts {
		display: flex;
		flex-direction: column;
	}

	.c-social-feed__empty {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 3rem 1rem;
		text-align: center;
	}

	.c-social-feed__empty-icon-wrap {
		display: flex;
		width: 3rem;
		height: 3rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: var(--color-background-secondary);
		margin: 0 auto;
	}

	.c-social-feed__empty-icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}
	.c-social-feed__empty-title {
		margin: 0.5rem 0 0;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.c-social-feed__empty-text {
		margin: 0.25rem 0 0;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-social-feed__post-item {
		border-bottom: 1px solid var(--color-border-primary);
	}
	.c-social-feed__post-item:last-child {
		border-bottom: none;
	}

	.c-social-feed__footer {
		padding: 1.5rem;
		text-align: center;
	}

	.c-social-feed__load-more {
		display: inline-flex;
		align-items: center;
		border-radius: 0.375rem;
		border: none;
		background: var(--color-primary-600);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-inverse);
		cursor: pointer;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-social-feed__load-more:hover {
		background: var(--color-primary-700);
	}
</style>
