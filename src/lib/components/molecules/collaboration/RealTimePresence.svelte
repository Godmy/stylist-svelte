<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Users, User, Activity } from 'lucide-svelte';

  type PresenceUser = {
    id: string;
    name: string;
    avatar?: string;
    status: 'online' | 'away' | 'busy' | 'offline';
    lastSeen?: Date;
    cursorPosition?: { x: number; y: number };
    activeArea?: string;
  };

  type Props = {
    users: PresenceUser[];
    showAvatars?: boolean;
    showStatus?: boolean;
    showLastSeen?: boolean;
    showCursorPositions?: boolean;
    title?: string;
    class?: string;
    userListClass?: string;
    userItemClass?: string;
    statusClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    users = [],
    showAvatars = true,
    showStatus = true,
    showLastSeen = true,
    showCursorPositions = false,
    title = 'Active Users',
    class: className = '',
    userListClass = '',
    userItemClass = '',
    statusClass = '',
    ...restProps
  }: Props = $props();

  function getStatusColor(status: string) {
    switch(status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'busy': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }

  function getStatusText(status: string) {
    switch(status) {
      case 'online': return 'Online';
      case 'away': return 'Away';
      case 'busy': return 'Busy';
      default: return 'Offline';
    }
  }

  function formatLastSeen(date?: Date) {
    if (!date) return 'Unknown';
    
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class="border-b px-4 py-3 flex items-center">
    <Users class="h-5 w-5 text-gray-500 mr-2" />
    <h3 class="text-lg font-medium text-gray-900">{title} <span class="text-gray-500">({users.length})</span></h3>
  </div>
  
  <div class={`p-4 ${userListClass}`}>
    {#if users.length === 0}
      <div class="text-center py-8">
        <Users class="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">No active users</p>
      </div>
    {:else}
      <ul class="space-y-3">
        {#each users as user}
          <li class={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 ${userItemClass}`}>
            <div class="flex items-center">
              {#if showAvatars}
                <div class="relative flex-shrink-0 mr-3">
                  {#if user.avatar}
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      class="h-10 w-10 rounded-full"
                    />
                  {:else}
                    <div class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <span class="text-sm font-medium text-gray-700">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  {/if}
                  
                  {#if showStatus}
                    <span class={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${getStatusColor(user.status)}`}></span>
                  {/if}
                </div>
              {/if}
              
              <div>
                <div class="flex items-center">
                  <p class="text-sm font-medium text-gray-900">{user.name}</p>
                  {#if showStatus}
                    <span class={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ${statusClass}`}>
                      <Activity class={`h-3 w-3 mr-1 ${user.status === 'online' ? 'text-green-500' : user.status === 'away' ? 'text-yellow-500' : user.status === 'busy' ? 'text-red-500' : 'text-gray-500'}`} />
                      {getStatusText(user.status)}
                    </span>
                  {/if}
                </div>
                
                {#if showLastSeen && user.lastSeen}
                  <p class="text-xs text-gray-500">Active {formatLastSeen(user.lastSeen)}</p>
                {/if}
                
                {#if user.activeArea}
                  <p class="text-xs text-gray-500">Working on: {user.activeArea}</p>
                {/if}
              </div>
            </div>
            
            {#if showCursorPositions && user.cursorPosition}
              <div class="text-xs text-gray-500">
                <div>Position: {user.cursorPosition.x}, {user.cursorPosition.y}</div>
              </div>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>