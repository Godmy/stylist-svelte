<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { Avatar } from '$lib';
	import type {
		FRIEND_LIST_STATUS,
		FRIEND_LIST_FRIEND,
		FRIEND_LIST_PROPS
	} from '$stylist/social/type/struct/friend-list';
	import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/enum/icon';
	import { friendListFormatLastSeen as formatLastSeen } from '$stylist/social/function/script/friend-list-format-last-seen';
	import { friendListGetStatusColor as getStatusColor } from '$stylist/social/function/script/friend-list-get-status-color';
	import { friendListGetStatusText as getStatusText } from '$stylist/social/function/script/friend-list-get-status-text';
	import { createFriendListState } from '$stylist/social/function/state/friend-list';

	let props: FRIEND_LIST_PROPS = $props();
	const state = createFriendListState(props);
</script>

{#snippet friendEntry(friend: FRIEND_LIST_FRIEND)}
	<div
		class={`flex cursor-pointer items-center justify-between p-4 hover:bg-[var(--color-background-secondary)] ${props.itemClass ?? ''}`}
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
		<div class="flex items-center">
			<div class="relative flex-shrink-0">
				<Avatar src={friend.avatar} alt={friend.name} size="md" />
				{#if props.showStatus}
					<span
						class={`absolute right-0 bottom-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${getStatusColor(friend.status)}`}
					></span>
				{/if}
			</div>

			<div class="ml-4 min-w-0">
				<p class="truncate text-sm font-medium text-[var(--color-text-primary)]">{friend.name}</p>
				{#if friend.username}
					<p class="truncate text-sm text-[var(--color-text-secondary)]">@{friend.username}</p>
				{/if}

				{#if props.showLastSeen && friend.lastSeen && friend.status !== 'online'}
					<p class="text-xs text-[var(--color-text-secondary)]">
						Last seen {formatLastSeen(friend.lastSeen)}
					</p>
				{/if}

				{#if props.showTags && friend.tags && friend.tags.length > 0}
					<div class="mt-1 flex flex-wrap gap-1">
						{#each friend.tags as tag}
							<span
								class="inline-flex items-center rounded bg-[var(--color-primary-100)] px-1.5 py-0.5 text-xs font-medium text-[var(--color-primary-800)]"
							>
								{tag}
							</span>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<div class="flex items-center space-x-2">
			<button
				type="button"
				class="rounded-full p-1.5 text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-100)] hover:text-[var(--color-primary-600)]"
				onclick={(e) => {
					e.stopPropagation();
					state.handleSendMessageEvent(friend);
				}}
				aria-label="Send message"
			>
				<BaseIcon
					name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'message-circle') ?? 'message-circle'}
					class="h-5 w-5"
				/>
			</button>

			<button
				type="button"
				class="rounded-full p-1.5 text-[var(--color-text-secondary)] hover:bg-[var(--color-success-100)] hover:text-[var(--color-success-600)]"
				onclick={(e) => {
					e.stopPropagation();
					state.handleCallEvent(friend);
				}}
				aria-label="Make call"
			>
				<BaseIcon
					name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'phone') ?? 'phone'}
					class="h-5 w-5"
				/>
			</button>

			<button
				type="button"
				class="rounded-full p-1.5 text-[var(--color-text-secondary)] hover:bg-[var(--color-secondary-100)] hover:text-[var(--color-secondary-600)]"
				onclick={(e) => {
					e.stopPropagation();
					state.handleVideoCallEvent(friend);
				}}
				aria-label="Make video call"
			>
				<BaseIcon
					name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'video') ?? 'video'}
					class="h-5 w-5"
				/>
			</button>

			<button
				type="button"
				class="rounded-full p-1.5 text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]"
				onclick={(e) => {
					e.stopPropagation();
					// Handle more actions
				}}
				aria-label="More options"
			>
				<BaseIcon
					name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'more-horizontal') ?? 'more-horizontal'}
					class="h-5 w-5"
				/>
			</button>
		</div>
	</div>
{/snippet}

<div class={`friend-list ${state.hostClass}`} {...props}>
	<div class={`border-b border-[var(--color-border-primary)] p-4 ${state.headerClass}`}>
		<div class="flex items-center justify-between">
			<h2 class="text-lg font-medium text-[var(--color-text-primary)]">Friends</h2>
			<span
				class="inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-3 py-1 text-sm font-medium text-[var(--color-primary-800)]"
			>
				{(props.friends ?? []).length} Friends
			</span>
		</div>

		{#if props.showSearch}
			<div class="relative mt-4">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<BaseIcon
						name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'search') ?? 'search'}
						class="h-5 w-5 text-[var(--color-text-tertiary)]"
					/>
				</div>
				<input
					type="text"
					class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${state.searchClass}`}
					placeholder="Search friends..."
					value={state.searchQuery}
					oninput={state.handleSearchInputEvent}
				/>
			</div>
		{/if}
	</div>

	<div class={`max-h-[500px] divide-y divide-gray-200 overflow-y-auto ${state.listClass}`}>
		{#if Object.keys(state.friendsByStatus).length > 1}
			{#each Object.entries(state.friendsByStatus) as [status, friendsList]}
				{#if friendsList.length > 0}
					<div class="border-t border-[var(--color-border-primary)]">
						<div class="bg-[var(--color-background-secondary)] px-4 py-2">
							<h3
								class="text-xs font-medium tracking-wide text-[var(--color-text-secondary)] uppercase"
							>
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
		<div class="border-t border-[var(--color-border-primary)] p-4">
			<button
				type="button"
				class="flex w-full items-center justify-center rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] shadow-sm hover:bg-[var(--color-background-secondary)] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
				onclick={state.handleAddFriendEvent}
			>
				<BaseIcon
					name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'user-plus') ?? 'user-plus'}
					class="mr-2 h-5 w-5"
				/>
				Add Friend
			</button>
		</div>
	{/if}
</div>
