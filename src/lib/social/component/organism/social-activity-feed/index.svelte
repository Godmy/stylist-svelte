<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
	import { Icon as BaseIcon } from '$stylist/media';
	import { Avatar } from '$lib';
	import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/enum/icon';
	import { socialActivityFeedFormatTime } from '$stylist/social/function/script/social-activity-feed-format-time';
	import { socialActivityFeedGetDescription } from '$stylist/social/function/script/social-activity-feed-get-description';
	import { createSocialActivityFeedState } from '$stylist/social/function/state/social-activity-feed';
	import type { Activity, Props } from '$stylist/social/type/struct/social-activity-feed';

	let props: Props = $props();
	const state = createSocialActivityFeedState(props);
</script>

<div class={`social-activity-feed ${state.hostClass}`} {...props}>
	<div class={`border-b border-[var(--color-border-primary)] p-4 ${state.headerClass}`}>
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<BaseIcon
					name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'activity') ?? 'activity'}
					class="mr-2 h-5 w-5 text-[var(--color-text-secondary)]"
				/>
				<h2 class="text-lg font-medium text-[var(--color-text-primary)]">Activity Feed</h2>

				{#if props.showReadStatus && state.unreadCount > 0}
					<span
						class="ml-2 inline-flex items-center rounded-full bg-[var(--color-danger-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-danger-800)]"
					>
						{state.unreadCount} unread
					</span>
				{/if}
			</div>

			{#if props.enableFiltering}
				<div class="flex space-x-2">
					<button
						type="button"
						class={`rounded-full px-3 py-1 text-xs font-medium ${
							state.activeFilter === 'all'
								? 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]'
								: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)]'
						}`}
						onclick={() => (state.activeFilter = 'all')}
					>
						All
					</button>
					{#each state.activityTypes as type}
						<button
							type="button"
							class={`rounded-full px-3 py-1 text-xs font-medium ${
								state.activeFilter === type
									? 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]'
									: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)]'
							}`}
							onclick={() => (state.activeFilter = type as any)}
						>
							{type.charAt(0).toUpperCase() + type.slice(1)}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<div class="divide-y divide-gray-200">
		{#if state.filteredActivities.length === 0}
			<div class="py-8 text-center">
				<BaseIcon
					name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'activity') ?? 'activity'}
					class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]"
				/>
				<h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No activities</h3>
				<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
					When activities happen, they'll appear here.
				</p>
			</div>
		{:else}
			{#each state.filteredActivities as activity}
				<div
					class={`cursor-pointer p-4 transition-colors hover:bg-[var(--color-background-secondary)] ${
						activity.isRead
							? 'bg-[var(--color-background-primary)]'
							: 'bg-[var(--color-primary-50)]'
					} ${state.itemClass}`}
					role="button"
					tabindex="0"
					onclick={() => state.handleActivityClick(activity)}
					onkeydown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							event.preventDefault();
							state.handleActivityClick(activity);
						}
					}}
				>
					<div class="flex space-x-3">
						{#if props.showAvatars}
							<div class="flex-shrink-0">
								<Avatar src={activity.actor.avatar} alt={activity.actor.name} size="md" />
							</div>
						{/if}

						<div class="min-w-0 flex-1">
							<div class="flex items-center justify-between">
								<p class="text-sm font-medium text-[var(--color-text-primary)]">
									{activity.actor.name}
									{#if activity.actor.isVerified}
										<span class="ml-1 text-[var(--color-primary-600)]">
											<BaseIcon
												name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'check-circle') ??
													'check-circle'}
												class="inline h-4 w-4"
											/>
										</span>
									{/if}
								</p>

								{#if props.showTimestamp}
									<div class="flex items-center">
										<BaseIcon
											name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'clock') ?? 'clock'}
											class="mr-1 h-4 w-4 text-[var(--color-text-tertiary)]"
										/>
										<span class="text-xs text-[var(--color-text-secondary)]">
											{socialActivityFeedFormatTime(activity.timestamp, props.locale)}
										</span>
									</div>
								{/if}
							</div>

							<p class="mt-0.5 text-sm text-[var(--color-text-primary)]">
								{socialActivityFeedGetDescription(activity)}
							</p>

							{#if activity.content && activity.type !== 'system' && activity.type !== 'announcement'}
								<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
									{activity.content}
								</p>
							{/if}

							{#if activity.relatedUrl}
								<a
									href={activity.relatedUrl}
									class="mt-2 inline-flex items-center text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]"
									onclick={(e) => {
										e.stopPropagation();
										e.preventDefault();
										window.open(activity.relatedUrl, '_blank');
									}}
								>
									View related content
									<BaseIcon
										name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'arrow-right') ?? 'arrow-right'}
										class="ml-1 h-4 w-4"
									/>
								</a>
							{/if}
						</div>

						<div class="flex items-center space-x-2">
							{#if props.showReadStatus}
								{#if activity.isRead}
									<button
										type="button"
										class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
										onclick={(e) => {
											e.stopPropagation();
											state.handleMarkAsUnread(activity.id);
										}}
										aria-label="Mark as unread"
									>
										<BaseIcon
											name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'check') ?? 'check'}
											class="h-4 w-4"
										/>
									</button>
								{:else}
									<button
										type="button"
										class="text-[var(--color-primary-600)] hover:text-[var(--color-primary-800)]"
										onclick={(e) => {
											e.stopPropagation();
											state.handleMarkAsRead(activity.id);
										}}
										aria-label="Mark as read"
									>
										<BaseIcon
											name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'circle') ?? 'circle'}
											class="h-4 w-4"
										/>
									</button>
								{/if}
							{/if}

							<button
								type="button"
								class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
								onclick={(e) => {
									e.stopPropagation();
									// Handle more options
								}}
								aria-label="More options"
							>
								<BaseIcon
									name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'more-horizontal') ??
										'more-horizontal'}
									class="h-4 w-4"
								/>
							</button>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>

	{#if props.showLoadMore && (props.activities?.length ?? 0) > state.filteredActivities.length}
		<div class={`border-t border-[var(--color-border-primary)] p-4 ${state.footerClass}`}>
			<button
				type="button"
				class="inline-flex w-full items-center justify-center rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] shadow-sm hover:bg-[var(--color-background-secondary)] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
				onclick={() => {
					// Load more activities
				}}
			>
				Load more
			</button>
		</div>
	{/if}
</div>
