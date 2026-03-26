<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
  import { Icon as BaseIcon } from '$stylist';
const User = 'user';
const UserPlus = 'user-plus';
const UserCheck = 'user-check';
const MessageCircle = 'message-circle';
const Phone = 'phone';
const Video = 'video';
const MoreHorizontal = 'more-horizontal';
const Search = 'search';
const Circle = 'circle';

  import { Avatar } from '$lib';

  type FriendStatus = 'online' | 'offline' | 'away' | 'busy';

  type Friend = {
    id: string;
    name: string;
    username?: string;
    avatar?: string;
    status: FriendStatus;
    lastSeen?: Date;
    isOnline?: boolean;
    isFavorite?: boolean;
    tags?: string[];
  };

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    friends: Friend[];
    showStatus?: boolean;
    showLastSeen?: boolean;
    showTags?: boolean;
    showSearch?: boolean;
    showInviteButton?: boolean;
    sortBy?: 'name' | 'status' | 'lastSeen';
    sortOrder?: 'asc' | 'desc';
    groupByStatus?: boolean;
    maxFriends?: number;
    onFriendSelect?: (friend: Friend) => void;
    onSendMessage?: (friend: Friend) => void;
    onCall?: (friend: Friend) => void;
    onVideoCall?: (friend: Friend) => void;
    onAddFriend?: () => void;
    onStatusChange?: (friendId: string, status: FriendStatus) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    searchClass?: string;
    listClass?: string;
    locale?: string;
  };

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
  let filteredFriends = $derived.by(() => {
    let result = [...friends];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(friend => 
        friend.name.toLowerCase().includes(query) ||
        (friend.username && friend.username.toLowerCase().includes(query)) ||
        (friend.tags && friend.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }
    
    // Apply sorting
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

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
  }

  function handleFriendClick(friend: Friend) {
    onFriendSelect?.(friend);
  }

  function handleSendMessage(friend: Friend) {
    onSendMessage?.(friend);
  }

  function handleCall(friend: Friend) {
    onCall?.(friend);
  }

  function handleVideoCall(friend: Friend) {
    onVideoCall?.(friend);
  }

  function handleAddFriend() {
    onAddFriend?.();
  }

  function getStatusColor(status: FriendStatus): string {
    const statusColors: Record<FriendStatus, string> = {
      'online': 'bg-[var(--color-success-500)]',
      'away': 'bg-yellow-500',
      'busy': 'bg-[var(--color-danger-500)]',
      'offline': 'bg-[var(--color-neutral-400)]'
    };
    return statusColors[status];
  }

  function getStatusText(status: FriendStatus): string {
    const statusTexts: Record<FriendStatus, string> = {
      'online': 'Online',
      'away': 'Away',
      'busy': 'Busy',
      'offline': 'Offline'
    };
    return statusTexts[status];
  }

  function formatLastSeen(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    
    return new Date(date).toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric'
    });
  }
</script>

{#snippet friendEntry(friend: Friend)}
  <div 
    class={`p-4 flex items-center justify-between hover:bg-[var(--color-background-secondary)] cursor-pointer ${itemClass}`}
    role="button"
    tabindex="0"
    onclick={() => handleFriendClick(friend)}
    onkeydown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleFriendClick(friend);
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
          handleSendMessage(friend);
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
          handleCall(friend);
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
          handleVideoCall(friend);
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
          oninput={handleSearchInput}
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
        onclick={handleAddFriend}
      >
        <BaseIcon name={UserPlus} class="h-5 w-5 mr-2" />
        Add Friend
      </button>
    </div>
  {/if}
</div>





