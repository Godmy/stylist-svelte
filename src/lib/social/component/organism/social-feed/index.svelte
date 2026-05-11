<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
	import { Icon as BaseIcon } from '$stylist/media';
	import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/enum/icon';
	import { PostCard } from '$stylist/commerce';
	import { createSocialFeedState } from '$stylist/social/function/state/social-feed';
	import type { Props, Post } from '$stylist/social/type/struct/social-feed';

	let props: Props = $props();
	const state = createSocialFeedState(props);
</script>

<div class={`social-feed ${state.hostClass}`} {...props}>
	<div class={`border-b border-[var(--color-border-primary)] p-4 ${state.headerClass}`}>
		<div class="mb-4 flex items-center justify-between">
			<h2 class="text-xl font-bold text-[var(--color-text-primary)]">Social Feed</h2>

			{#if props.showSearch}
				<div class="relative w-64">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<BaseIcon
							name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'search') ?? 'search'}
							class="h-5 w-5 text-[var(--color-text-tertiary)]"
						/>
					</div>
					<input
						type="text"
						class="block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-blue-500 focus:outline-none sm:text-sm"
						placeholder="Search posts..."
						value={state.searchQuery}
						oninput={state.handleSearchInput}
					/>
				</div>
			{/if}
		</div>

		{#if props.showFilters}
			<div class="flex space-x-4">
				{#each props.filters ?? [] as filter}
					<button
						type="button"
						class={`flex items-center rounded-full px-3 py-2 text-sm font-medium ${
							state.activeFilter === filter.id
								? 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]'
								: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)]'
						}`}
						onclick={() => state.handleFilterChange(filter.id)}
					>
						{filter.label}
					</button>
				{/each}
			</div>
		{/if}
	</div>

	{#if props.showCreatePost}
		<div class="border-b border-[var(--color-border-primary)] p-4">
			<div class="flex space-x-3">
				{#if props.currentUser?.avatar}
					<img
						class="h-10 w-10 rounded-full"
						src={props.currentUser.avatar}
						alt={props.currentUser.name}
					/>
				{:else}
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-background-tertiary)]"
					>
						<BaseIcon
							name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'user') ?? 'user'}
							class="h-6 w-6 text-[var(--color-text-secondary)]"
						/>
					</div>
				{/if}

				<div class="flex-1">
					{#if state.showCreateForm}
						<div>
							<textarea
								class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
								placeholder="What's on your mind?"
								rows="3"
								bind:value={state.newPostContent}
							></textarea>

							<div class="mt-3 flex justify-end space-x-3">
								<button
									type="button"
									class="inline-flex items-center rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
									onclick={() => (state.showCreateForm = false)}
								>
									Cancel
								</button>
								<button
									type="button"
									class="inline-flex items-center rounded-md border border-transparent bg-[var(--color-primary-600)] px-4 py-2 text-sm font-medium text-[var(--color-text-inverse)] shadow-sm hover:bg-[var(--color-primary-700)] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
									onclick={state.handleCreatePost}
									disabled={!state.newPostContent.trim()}
								>
									Post
								</button>
							</div>
						</div>
					{:else}
						<button
							type="button"
							class="flex w-full items-center justify-start rounded-md border border-[var(--color-border-primary)] px-4 py-3 text-left text-[var(--color-text-secondary)] shadow-sm hover:bg-[var(--color-background-secondary)] focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onclick={() => (state.showCreateForm = true)}
						>
							{#if props.currentUser?.avatar}
								<img
									class="h-8 w-8 rounded-full"
									src={props.currentUser.avatar}
									alt={props.currentUser.name}
								/>
							{/if}
							<span class="ml-4">What's on your mind, {props.currentUser?.name || 'User'}?</span>
						</button>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	<div>
		{#if state.filteredPosts.length === 0}
			<div class="border-b border-[var(--color-border-primary)] py-12 text-center">
				<div
					class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-background-secondary)]"
				>
					<BaseIcon
						name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'message-circle') ?? 'message-circle'}
						class="h-6 w-6 text-[var(--color-text-tertiary)]"
					/>
				</div>
				<h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No posts</h3>
				<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
					Get started by creating your first post.
				</p>
			</div>
		{/if}

		{#each state.filteredPosts as post}
			<div
				class={`border-b border-[var(--color-border-primary)] last:border-0 ${state.feedItemClass}`}
			>
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
		<div class={`p-6 text-center ${state.footerClass}`}>
			{#if state.filteredPosts.length > 0}
				<button
					type="button"
					class="inline-flex items-center rounded-md border border-transparent bg-[var(--color-primary-600)] px-4 py-2 text-sm font-medium text-[var(--color-text-inverse)] shadow-sm hover:bg-[var(--color-primary-700)] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
					onclick={state.handleLoadMore}
				>
					Load more posts
				</button>
			{/if}
		</div>
	{/if}
</div>
