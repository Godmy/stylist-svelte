<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { Icon as BaseIcon } from '$stylist';
  import { Avatar } from '$lib';
  import type {
    FRIEND_LIST_STATUS,
    FRIEND_LIST_FRIEND,
    FRIEND_LIST_REST_PROPS,
    FRIEND_LIST_PROPS
  } from '$stylist/social/type/struct/friend-list';
  import {
    friendListHandleSearchInput as handleSearchInput,
    friendListHandleFriendClick as handleFriendClick,
    friendListHandleSendMessage as handleSendMessage,
    friendListHandleCall as handleCall,
    friendListHandleVideoCall as handleVideoCall,
    friendListHandleAddFriend as handleAddFriend,
    friendListGetStatusColor as getStatusColor,
    friendListGetStatusText as getStatusText,
    friendListFormatLastSeen as formatLastSeen
  } from '$stylist/social/function/script/friend-list';

  const FRIEND_LIST_USER = 'user';
  const FRIEND_LIST_USER_PLUS = 'user-plus';
  const FRIEND_LIST_USER_CHECK = 'user-check';
  const FRIEND_LIST_MESSAGE_CIRCLE = 'message-circle';
  const FRIEND_LIST_PHONE = 'phone';
  const FRIEND_LIST_VIDEO = 'video';
  const FRIEND_LIST_MORE_HORIZONTAL = 'more-horizontal';
  const FRIEND_LIST_SEARCH = 'search';
  const FRIEND_LIST_CIRCLE = 'circle';

  const MessageCircle = FRIEND_LIST_MESSAGE_CIRCLE;
  const Phone = FRIEND_LIST_PHONE;
  const Video = FRIEND_LIST_VIDEO;
  const MoreHorizontal = FRIEND_LIST_MORE_HORIZONTAL;
  const Search = FRIEND_LIST_SEARCH;
  const UserPlus = FRIEND_LIST_USER_PLUS;

  type FriendStatus = FRIEND_LIST_STATUS;
  type Friend = FRIEND_LIST_FRIEND;
  type RestProps = FRIEND_LIST_REST_PROPS;
  type Props = FRIEND_LIST_PROPS;

  let {
    friends = [],
    showStatus = true,
    showLastSeen = true,
    showTags = true,
    showSearch = true,
    showInviteButton = true,
    sortBy = 'name',
    sortOrder = 'asc',
    groupByStatus = false,
    maxFriends = 20,
    onFriendSelect,
    onSendMessage,
    onCall,
    onVideoCall,
    onAddFriend,
    onStatusChange,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    searchClass = '',
    listClass = '',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let searchQuery = $state('');

  function setSearchQuery(value: string) {
    searchQuery = value;
  }

  function handleSearchInputEvent(event: Event) {
    handleSearchInput(event, setSearchQuery);
  }

  function handleFriendClickEvent(friend: Friend) {
    handleFriendClick(friend, onFriendSelect);
  }

  function handleSendMessageEvent(friend: Friend) {
    handleSendMessage(friend, onSendMessage);
  }

  function handleCallEvent(friend: Friend) {
    handleCall(friend, onCall);
  }

  function handleVideoCallEvent(friend: Friend) {
    handleVideoCall(friend, onVideoCall);
  }

  function handleAddFriendEvent() {
    handleAddFriend(onAddFriend);
  }
  let filteredFriends = $derived.by(() => {
    let result = [...friends];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(friend =>
        friend.name.toLowerCase().includes(query) ||
        (friend.username && friend.username.toLowerCase().includes(query)) ||
        (friend.tags && friend.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    result.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'lastSeen':
          aValue = a.lastSeen || new Date(0);
          bValue = b.lastSeen || new Date(0);
          break;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  });

  let friendsByStatus = $derived.by(() => {
    if (!groupByStatus) return { all: filteredFriends };

    const online = filteredFriends.filter(f => f.status === 'online');
    const away = filteredFriends.filter(f => f.status === 'away');
    const busy = filteredFriends.filter(f => f.status === 'busy');
    const offline = filteredFriends.filter(f => f.status === 'offline');

    return { online, away, busy, offline };
  });
</script>

{#snippet friendEntry(friend: Friend)}
  <div 
    class={`p-4 flex items-center justify-between hover:bg-[var(--color-background-secondary)] cursor-pointer ${itemClass}`}
    role="button"
    tabindex="0"
    onclick={() => handleFriendClickEvent(friend)}
    onkeydown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleFriendClickEvent(friend);
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
        {#if showStatus}
          <span class={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${getStatusColor(friend.status)}`}></span>
        {/if}
      </div>
      
      <div class="ml-4 min-w-0">
        <p class="text-sm font-medium text-[var(--color-text-primary)] truncate">{friend.name}</p>
        {#if friend.username}
          <p class="text-sm text-[var(--color-text-secondary)] truncate">@{friend.username}</p>
        {/if}
        
        {#if showLastSeen && friend.lastSeen && friend.status !== 'online'}
          <p class="text-xs text-[var(--color-text-secondary)]">Last seen {formatLastSeen(friend.lastSeen)}</p>
        {/if}
        
        {#if showTags && friend.tags && friend.tags.length > 0}
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
          handleSendMessageEvent(friend);
        }}
        aria-label="Send message"
      >
        <BaseIcon name={MessageCircle} class="h-5 w-5" />
      </button>
      
      <button
        type="button"
        class="p-1.5 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-success-600)] hover:bg-[var(--color-success-100)]"
        onclick={(e) => {
          e.stopPropagation();
          handleCallEvent(friend);
        }}
        aria-label="Make call"
      >
        <BaseIcon name={Phone} class="h-5 w-5" />
      </button>
      
      <button
        type="button"
        class="p-1.5 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-100)]"
        onclick={(e) => {
          e.stopPropagation();
          handleVideoCallEvent(friend);
        }}
        aria-label="Make video call"
      >
        <BaseIcon name={Video} class="h-5 w-5" />
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
        <BaseIcon name={MoreHorizontal} class="h-5 w-5" />
      </button>
    </div>
  </div>
{/snippet}

<div class={`friend-list ${hostClass}`} {...restProps}>
  <div class={`border-b border-[var(--color-border-primary)] p-4 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-medium text-[var(--color-text-primary)]">Friends</h2>
      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
        {friends.length} Friends
      </span>
    </div>
    
    {#if showSearch}
      <div class="mt-4 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BaseIcon name={Search} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
        </div>
        <input
          type="text"
          class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${searchClass}`}
          placeholder="Search friends..."
          value={searchQuery}
          oninput={handleSearchInputEvent}
        />
      </div>
    {/if}
  </div>
  
  <div class={`divide-y divide-gray-200 max-h-[500px] overflow-y-auto ${listClass}`}>
    {#if Object.keys(friendsByStatus).length > 1}
      {#each Object.entries(friendsByStatus) as [status, friendsList]}
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
      {#each filteredFriends as friend}
        {@render friendEntry(friend)}
      {/each}
    {/if}
  </div>
  
  {#if showInviteButton}
    <div class="p-4 border-t border-[var(--color-border-primary)]">
      <button
        type="button"
        class="w-full flex items-center justify-center px-4 py-2 border border-[var(--color-border-primary)] shadow-sm text-sm font-medium rounded-md text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onclick={handleAddFriendEvent}
      >
        <BaseIcon name={UserPlus} class="h-5 w-5 mr-2" />
        Add Friend
      </button>
    </div>
  {/if}
</div>




