<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';
	import { socialActivityFeedFormatTime } from '$stylist/social/function/script/social-activity-feed-format-time';
	import { socialActivityFeedGetDescription } from '$stylist/social/function/script/social-activity-feed-get-description';
	import createSocialActivityFeedState from '$stylist/social/function/state/social-activity-feed/index.svelte';
	import type { Props } from '$stylist/social/type/struct/social-activity-feed/-props';

	let props: Props = $props();
	const state = createSocialActivityFeedState(props);
</script>

<div class="c-activity-feed {state.hostClass}" {...props}>
	<div class="c-activity-feed__header {state.headerClass}">
		<div class="c-activity-feed__header-row">
			<div class="c-activity-feed__header-left">
				<BaseIcon name="activity" class="c-activity-feed__header-icon" />
				<h2 class="c-activity-feed__title">Activity Feed</h2>
				{#if props.showReadStatus && state.unreadCount > 0}
					<span class="c-activity-feed__unread-badge">{state.unreadCount} unread</span>
				{/if}
			</div>
			{#if props.enableFiltering}
				<div class="c-activity-feed__filters">
					<button
						type="button"
						class="c-activity-feed__filter-btn {state.activeFilter === 'all'
							? 'c-activity-feed__filter-btn--active'
							: ''}"
						onclick={() => (state.activeFilter = 'all')}>All</button
					>
					{#each state.activityTypes as type}
						<button
							type="button"
							class="c-activity-feed__filter-btn {state.activeFilter === type
								? 'c-activity-feed__filter-btn--active'
								: ''}"
							onclick={() => (state.activeFilter = type as any)}
						>
							{type.charAt(0).toUpperCase() + type.slice(1)}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<div class="c-activity-feed__list">
		{#if state.filteredActivities.length === 0}
			<div class="c-activity-feed__empty">
				<BaseIcon name="activity" class="c-activity-feed__empty-icon" />
				<h3 class="c-activity-feed__empty-title">No activities</h3>
				<p class="c-activity-feed__empty-text">When activities happen, they'll appear here.</p>
			</div>
		{:else}
			{#each state.filteredActivities as activity}
				<div
					class="c-activity-feed__item {activity.isRead
						? ''
						: 'c-activity-feed__item--unread'} {state.itemClass}"
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
					<div class="c-activity-feed__item-row">
						{#if props.showAvatars}
							<div class="c-activity-feed__avatar-wrap">
								<Avatar src={activity.actor.avatar} alt={activity.actor.name} size="md" />
							</div>
						{/if}
						<div class="c-activity-feed__item-body">
							<div class="c-activity-feed__item-head">
								<p class="c-activity-feed__actor">
									{activity.actor.name}
									{#if activity.actor.isVerified}
										<span class="c-activity-feed__verified">
											<BaseIcon name="check-circle" class="c-activity-feed__verified-icon" />
										</span>
									{/if}
								</p>
								{#if props.showTimestamp}
									<div class="c-activity-feed__timestamp">
										<BaseIcon name="clock" class="c-activity-feed__clock-icon" />
										<span>{socialActivityFeedFormatTime(activity.timestamp, props.locale)}</span>
									</div>
								{/if}
							</div>
							<p class="c-activity-feed__description">
								{socialActivityFeedGetDescription(activity)}
							</p>
							{#if activity.content && activity.type !== 'system' && activity.type !== 'announcement'}
								<p class="c-activity-feed__content">{activity.content}</p>
							{/if}
							{#if activity.relatedUrl}
								<a
									href={activity.relatedUrl}
									class="c-activity-feed__link"
									onclick={(e) => {
										e.stopPropagation();
										e.preventDefault();
										window.open(activity.relatedUrl, '_blank');
									}}
								>
									View related content
									<BaseIcon name="arrow-right" class="c-activity-feed__link-icon" />
								</a>
							{/if}
						</div>
						<div class="c-activity-feed__item-actions">
							{#if props.showReadStatus}
								{#if activity.isRead}
									<button
										type="button"
										class="c-activity-feed__mark-btn"
										onclick={(e) => {
											e.stopPropagation();
											state.handleMarkAsUnread(activity.id);
										}}
										aria-label="Mark as unread"
									>
										<BaseIcon name="check" class="c-activity-feed__mark-icon" />
									</button>
								{:else}
									<button
										type="button"
										class="c-activity-feed__mark-btn c-activity-feed__mark-btn--unread"
										onclick={(e) => {
											e.stopPropagation();
											state.handleMarkAsRead(activity.id);
										}}
										aria-label="Mark as read"
									>
										<BaseIcon name="circle" class="c-activity-feed__mark-icon" />
									</button>
								{/if}
							{/if}
							<button
								type="button"
								class="c-activity-feed__more-btn"
								onclick={(e) => {
									e.stopPropagation();
								}}
								aria-label="More options"
							>
								<BaseIcon name="more-horizontal" class="c-activity-feed__mark-icon" />
							</button>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>

	{#if props.showLoadMore && (props.activities?.length ?? 0) > state.filteredActivities.length}
		<div class="c-activity-feed__footer {state.footerClass}">
			<button type="button" class="c-activity-feed__load-more-btn" onclick={() => {}}>
				Load more
			</button>
		</div>
	{/if}
</div>

<style>
	.c-activity-feed {
		display: flex;
		flex-direction: column;
	}

	.c-activity-feed__header {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 1rem;
	}

	.c-activity-feed__header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.c-activity-feed__header-left {
		display: flex;
		align-items: center;
	}

	.c-activity-feed__header-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
		color: var(--color-text-secondary);
	}

	.c-activity-feed__title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}

	.c-activity-feed__unread-badge {
		margin-left: 0.5rem;
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background: color-mix(in srgb, var(--color-danger-500) 12%, transparent);
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-danger-800, var(--color-danger-700));
	}

	.c-activity-feed__filters {
		display: flex;
		gap: 0.5rem;
	}

	.c-activity-feed__filter-btn {
		border-radius: 9999px;
		padding: 0.25rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		border: none;
		cursor: pointer;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.c-activity-feed__filter-btn:hover {
		background: var(--color-background-tertiary, var(--color-background-secondary));
	}

	.c-activity-feed__filter-btn--active {
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		color: var(--color-primary-800, var(--color-primary-700));
	}

	.c-activity-feed__list {
		display: flex;
		flex-direction: column;
	}

	.c-activity-feed__empty {
		padding: 2rem 1rem;
		text-align: center;
	}
	.c-activity-feed__empty-icon {
		width: 3rem;
		height: 3rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
		margin: 0 auto;
	}
	.c-activity-feed__empty-title {
		margin: 0.5rem 0 0;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.c-activity-feed__empty-text {
		margin: 0.25rem 0 0;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-activity-feed__item {
		padding: 1rem;
		cursor: pointer;
		border-bottom: 1px solid var(--color-border-secondary);
		background: var(--color-background-primary);
		transition: background var(--duration-120, 120ms) ease;
	}

	.c-activity-feed__item:hover {
		background: var(--color-background-secondary);
	}
	.c-activity-feed__item--unread {
		background: color-mix(in srgb, var(--color-primary-500) 4%, transparent);
	}

	.c-activity-feed__item-row {
		display: flex;
		gap: 0.75rem;
	}

	.c-activity-feed__avatar-wrap {
		flex-shrink: 0;
	}

	.c-activity-feed__item-body {
		flex: 1;
		min-width: 0;
	}

	.c-activity-feed__item-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.c-activity-feed__actor {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.c-activity-feed__verified {
		color: var(--color-primary-600);
	}
	.c-activity-feed__verified-icon {
		display: inline;
		width: 1rem;
		height: 1rem;
	}

	.c-activity-feed__timestamp {
		display: flex;
		align-items: center;
	}
	.c-activity-feed__clock-icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-activity-feed__description {
		margin-top: 0.125rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}
	.c-activity-feed__content {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-activity-feed__link {
		display: inline-flex;
		align-items: center;
		margin-top: 0.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-primary-600);
	}

	.c-activity-feed__link:hover {
		color: var(--color-primary-500);
	}
	.c-activity-feed__link-icon {
		width: 1rem;
		height: 1rem;
		margin-left: 0.25rem;
	}

	.c-activity-feed__item-actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-shrink: 0;
	}

	.c-activity-feed__mark-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-tertiary, var(--color-text-secondary));
		padding: 0;
	}
	.c-activity-feed__mark-btn:hover {
		color: var(--color-text-secondary);
	}
	.c-activity-feed__mark-btn--unread {
		color: var(--color-primary-600);
	}
	.c-activity-feed__mark-btn--unread:hover {
		color: var(--color-primary-800, var(--color-primary-700));
	}
	.c-activity-feed__mark-icon {
		width: 1rem;
		height: 1rem;
	}
	.c-activity-feed__more-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-tertiary, var(--color-text-secondary));
		padding: 0;
	}
	.c-activity-feed__more-btn:hover {
		color: var(--color-text-secondary);
	}

	.c-activity-feed__footer {
		border-top: 1px solid var(--color-border-primary);
		padding: 1rem;
	}

	.c-activity-feed__load-more-btn {
		display: inline-flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		cursor: pointer;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-activity-feed__load-more-btn:hover {
		background: var(--color-background-secondary);
	}
</style>
