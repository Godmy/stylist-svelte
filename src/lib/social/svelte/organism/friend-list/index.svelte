<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { Avatar } from '$lib';
  import type {
    FRIEND_LIST_STATUS,
    FRIEND_LIST_FRIEND,
    FRIEND_LIST_PROPS
  } from '$stylist/social/type/struct/friend-list';
  import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/icon';
  import { friendListFormatLastSeen as formatLastSeen } from '$stylist/social/function/script/friend-list-format-last-seen';
  import { friendListGetStatusColor as getStatusColor } from '$stylist/social/function/script/friend-list-get-status-color';
  import { friendListGetStatusText as getStatusText } from '$stylist/social/function/script/friend-list-get-status-text';
  import { createFriendListState } from '$stylist/social/function/state/friend-list';

  let props: FRIEND_LIST_PROPS = $props();
  const state = createFriendListState(props);
</script>

{#snippet friendEntry(friend: FRIEND_LIST_FRIEND)}
  <div
    class={`p-4 flex items-center justify-between hover:bg-[var(--color-background-secondary)] cursor-pointer ${props.itemClass ?? ''}`}
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
        <Avatar
          src={friend.avatar}
          alt={friend.name}
          size="md"
        />
        {#if props.showStatus}
          <span class={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${getStatusColor(friend.status)}`}></span>
        {/if}
      </div>

      <div class="ml-4 min-w-0">
        <p class="text-sm font-medium text-[var(--color-text-primary)] truncate">{friend.name}</p>
        {#if friend.username}
          <p class="text-sm text-[var(--color-text-secondary)] truncate">@{friend.username}</p>
        {/if}

        {#if props.showLastSeen && friend.lastSeen && friend.status !== 'online'}
          <p class="text-xs text-[var(--color-text-secondary)]">Last seen {formatLastSeen(friend.lastSeen)}</p>
        {/if}

        {#if props.showTags && friend.tags && friend.tags.length > 0}
          <div class="mt-1 flex flex-wrap gap-1">
            {#each friend.tags as tag}
              <span class="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
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
        class="p-1.5 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-primary-600)] hover:bg-[var(--color-primary-100)]"
        onclick={(e) => {
          e.stopPropagation();
          state.handleSendMessageEvent(friend);
        }}
        aria-label="Send message"
      >
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'message-circle') ?? 'message-circle'} class="h-5 w-5" />
      </button>

      <button
        type="button"
        class="p-1.5 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-success-600)] hover:bg-[var(--color-success-100)]"
        onclick={(e) => {
          e.stopPropagation();
          state.handleCallEvent(friend);
        }}
        aria-label="Make call"
      >
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'phone') ?? 'phone'} class="h-5 w-5" />
      </button>

      <button
        type="button"
        class="p-1.5 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-100)]"
        onclick={(e) => {
          e.stopPropagation();
          state.handleVideoCallEvent(friend);
        }}
        aria-label="Make video call"
      >
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'video') ?? 'video'} class="h-5 w-5" />
      </button>

      <button
        type="button"
        class="p-1.5 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]"
        onclick={(e) => {
          e.stopPropagation();
          // Handle more actions
        }}
        aria-label="More options"
      >
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'more-horizontal') ?? 'more-horizontal'} class="h-5 w-5" />
      </button>
    </div>
  </div>
{/snippet}

<div class={`friend-list ${state.hostClass}`} {...props}>
  <div class={`border-b border-[var(--color-border-primary)] p-4 ${state.headerClass}`}>
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-medium text-[var(--color-text-primary)]">Friends</h2>
      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
        {(props.friends ?? []).length} Friends
      </span>
    </div>

    {#if props.showSearch}
      <div class="mt-4 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'search') ?? 'search'} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
        </div>
        <input
          type="text"
          class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${state.searchClass}`}
          placeholder="Search friends..."
          value={state.searchQuery}
          oninput={state.handleSearchInputEvent}
        />
      </div>
    {/if}
  </div>

  <div class={`divide-y divide-gray-200 max-h-[500px] overflow-y-auto ${state.listClass}`}>
    {#if Object.keys(state.friendsByStatus).length > 1}
      {#each Object.entries(state.friendsByStatus) as [status, friendsList]}
        {#if friendsList.length > 0}
          <div class="border-t border-[var(--color-border-primary)]">
            <div class="px-4 py-2 bg-[var(--color-background-secondary)]">
              <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wide">
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
    <div class="p-4 border-t border-[var(--color-border-primary)]">
      <button
        type="button"
        class="w-full flex items-center justify-center px-4 py-2 border border-[var(--color-border-primary)] shadow-sm text-sm font-medium rounded-md text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onclick={state.handleAddFriendEvent}
      >
        <BaseIcon name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'user-plus') ?? 'user-plus'} class="h-5 w-5 mr-2" />
        Add Friend
      </button>
    </div>
  {/if}
</div>
