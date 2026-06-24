<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';
	import type { FRIEND_LIST_FRIEND } from '$stylist/social/type/struct/friend-list/friend_list_friend';
	import type { FRIEND_LIST_PROPS } from '$stylist/social/type/struct/friend-list/friend_list_-props';
	import { friendListFormatLastSeen as formatLastSeen } from '$stylist/social/function/script/friend-list-format-last-seen';
	import { friendListGetStatusColor as getStatusColor } from '$stylist/social/function/script/friend-list-get-status-color';
	import createFriendListState from '$stylist/social/function/state/friend-list/index.svelte';

	let props: FRIEND_LIST_PROPS = $props();
	const state = createFriendListState(props);
</script>

{#snippet friendEntry(friend: FRIEND_LIST_FRIEND)}
	<div
		class="c-friend-list__item {props.itemClass ?? ''}"
		role="button"
		tabindex="0"
		onclick={() => state.handleFriendClickEvent(friend)}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				state.handleFriendClickEvent(friend);
			}
		}}
	>
		<div class="c-friend-list__item-left">
			<div class="c-friend-list__avatar-wrap">
				<Avatar src={friend.avatar} alt={friend.name} size="md" />
				{#if props.showStatus}
					<span class="c-friend-list__status {getStatusColor(friend.status)}"></span>
				{/if}
			</div>
			<div class="c-friend-list__info">
				<p class="c-friend-list__name">{friend.name}</p>
				{#if friend.username}
					<p class="c-friend-list__username">@{friend.username}</p>
				{/if}
				{#if props.showLastSeen && friend.lastSeen && friend.status !== 'online'}
					<p class="c-friend-list__last-seen">Last seen {formatLastSeen(friend.lastSeen)}</p>
				{/if}
				{#if props.showTags && friend.tags && friend.tags.length > 0}
					<div class="c-friend-list__tags">
						{#each friend.tags as tag}
							<span class="c-friend-list__tag">{tag}</span>
						{/each}
					</div>
				{/if}
			</div>
		</div>
		<div class="c-friend-list__actions">
			<button
				type="button"
				class="c-friend-list__action-btn"
				onclick={(e) => {
					e.stopPropagation();
					state.handleSendMessageEvent(friend);
				}}
				aria-label="Send message"
			>
				<BaseIcon name="message-circle" class="c-friend-list__action-icon" />
			</button>
			<button
				type="button"
				class="c-friend-list__action-btn c-friend-list__action-btn--call"
				onclick={(e) => {
					e.stopPropagation();
					state.handleCallEvent(friend);
				}}
				aria-label="Make call"
			>
				<BaseIcon name="phone" class="c-friend-list__action-icon" />
			</button>
			<button
				type="button"
				class="c-friend-list__action-btn c-friend-list__action-btn--video"
				onclick={(e) => {
					e.stopPropagation();
					state.handleVideoCallEvent(friend);
				}}
				aria-label="Make video call"
			>
				<BaseIcon name="video" class="c-friend-list__action-icon" />
			</button>
			<button
				type="button"
				class="c-friend-list__action-btn"
				onclick={(e) => {
					e.stopPropagation();
				}}
				aria-label="More options"
			>
				<BaseIcon name="more-horizontal" class="c-friend-list__action-icon" />
			</button>
		</div>
	</div>
{/snippet}

<div class="c-friend-list {state.hostClass}" {...props}>
	<div class="c-friend-list__header {state.headerClass}">
		<div class="c-friend-list__header-row">
			<h2 class="c-friend-list__title">Friends</h2>
			<span class="c-friend-list__count-badge">{(props.friends ?? []).length} Friends</span>
		</div>

		{#if props.showSearch}
			<div class="c-friend-list__search-wrap">
				<div class="c-friend-list__search-icon-wrap">
					<BaseIcon name="search" class="c-friend-list__search-icon" />
				</div>
				<input
					type="text"
					class="c-friend-list__search-input {state.searchClass}"
					placeholder="Search friends..."
					value={state.searchQuery}
					oninput={state.handleSearchInputEvent}
				/>
			</div>
		{/if}
	</div>

	<div class="c-friend-list__list {state.listClass}">
		{#if Object.keys(state.friendsByStatus).length > 1}
			{#each Object.entries(state.friendsByStatus) as [status, friendsList]}
				{#if friendsList.length > 0}
					<div class="c-friend-list__status-group">
						<div class="c-friend-list__status-header">
							<h3 class="c-friend-list__status-label">
								{status.charAt(0).toUpperCase() + status.slice(1)} ({friendsList.length})
							</h3>
						</div>
						{#each friendsList as friend}
							{@render friendEntry(friend)}
						{/each}
					</div>
				{/if}
			{/each}
		{:else}
			{#each state.filteredFriends as friend}
				{@render friendEntry(friend)}
			{/each}
		{/if}
	</div>

	{#if props.showInviteButton}
		<div class="c-friend-list__invite-wrap">
			<button type="button" class="c-friend-list__invite-btn" onclick={state.handleAddFriendEvent}>
				<BaseIcon name="user-plus" class="c-friend-list__invite-icon" />
				Add Friend
			</button>
		</div>
	{/if}
</div>

<style>
	.c-friend-list {
		display: flex;
		flex-direction: column;
	}

	.c-friend-list__header {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 1rem;
	}

	.c-friend-list__header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.c-friend-list__title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}

	.c-friend-list__count-badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-primary-800, var(--color-primary-700));
	}

	.c-friend-list__search-wrap {
		position: relative;
		margin-top: 1rem;
	}

	.c-friend-list__search-icon-wrap {
		pointer-events: none;
		position: absolute;
		inset-block: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}
	.c-friend-list__search-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-friend-list__search-input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem 0.5rem 2.5rem;
		font-size: 0.875rem;
		line-height: 1.25;
	}

	.c-friend-list__search-input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-friend-list__list {
		max-height: 31.25rem;
		overflow-y: auto;
	}

	.c-friend-list__status-group {
		border-top: 1px solid var(--color-border-primary);
	}

	.c-friend-list__status-header {
		background: var(--color-background-secondary);
		padding: 0.5rem 1rem;
	}

	.c-friend-list__status-label {
		font-size: 0.75rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-secondary);
		margin: 0;
	}

	.c-friend-list__item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		cursor: pointer;
	}

	.c-friend-list__item:hover {
		background: var(--color-background-secondary);
	}

	.c-friend-list__item-left {
		display: flex;
		align-items: center;
	}

	.c-friend-list__avatar-wrap {
		position: relative;
		flex-shrink: 0;
	}

	.c-friend-list__status {
		position: absolute;
		right: 0;
		bottom: 0;
		display: block;
		width: 0.625rem;
		height: 0.625rem;
		border-radius: 9999px;
		box-shadow: 0 0 0 2px white;
	}

	.c-friend-list__info {
		margin-left: 1rem;
		min-width: 0;
	}

	.c-friend-list__name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.c-friend-list__username {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.c-friend-list__last-seen {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		margin: 0;
	}

	.c-friend-list__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		margin-top: 0.25rem;
	}

	.c-friend-list__tag {
		display: inline-flex;
		align-items: center;
		border-radius: 0.25rem;
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		padding: 0.125rem 0.375rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-primary-800, var(--color-primary-700));
	}

	.c-friend-list__actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.c-friend-list__action-btn {
		border-radius: 9999px;
		padding: 0.375rem;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-secondary);
	}

	.c-friend-list__action-btn:hover {
		background: var(--color-background-secondary);
	}
	.c-friend-list__action-btn--call:hover {
		background: color-mix(in srgb, var(--color-success-500) 12%, transparent);
		color: var(--color-success-600);
	}
	.c-friend-list__action-btn--video:hover {
		background: color-mix(
			in srgb,
			var(--color-secondary-500, var(--color-primary-500)) 12%,
			transparent
		);
		color: var(--color-secondary-600, var(--color-primary-600));
	}

	.c-friend-list__action-icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	.c-friend-list__invite-wrap {
		border-top: 1px solid var(--color-border-primary);
		padding: 1rem;
	}

	.c-friend-list__invite-btn {
		display: flex;
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

	.c-friend-list__invite-btn:hover {
		background: var(--color-background-secondary);
	}

	.c-friend-list__invite-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
	}
</style>
