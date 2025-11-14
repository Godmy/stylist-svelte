<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Bell, X, Mail, AlertCircle, CheckCircle, Info, Settings, Archive, Trash2 } from 'lucide-svelte';

  type NotificationType = 'info' | 'success' | 'warning' | 'error';

  type Notification = {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    timestamp: Date;
    read: boolean;
    actions?: Array<{
      label: string;
      onClick: () => void;
    }>;
  };

  type FilterOption = 'all' | 'unread' | 'read';

  type Props = {
    notifications: Notification[];
    onMarkAsRead?: (id: string) => void;
    onMarkAllAsRead?: () => void;
    onArchive?: (id: string) => void;
    onDelete?: (id: string) => void;
    showFilter?: boolean;
    showMarkAllRead?: boolean;
    maxNotifications?: number;
    class?: string;
    headerClass?: string;
    notificationClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    notifications = [],
    onMarkAsRead,
    onMarkAllAsRead,
    onArchive,
    onDelete,
    showFilter = true,
    showMarkAllRead = true,
    maxNotifications = 50,
    class: className = '',
    headerClass = '',
    notificationClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let activeFilter: FilterOption = $state('all');
  let isExpanded = $state(false);

  // Get filtered notifications
  function getFilteredNotifications() {
    let filtered = notifications;
    
    if (activeFilter === 'unread') {
      filtered = filtered.filter(n => !n.read);
    } else if (activeFilter === 'read') {
      filtered = filtered.filter(n => n.read);
    }
    
    // Limit the number of notifications shown
    return filtered.slice(0, maxNotifications);
  }

  // Get notification icon based on type
  function getNotificationIcon(type: NotificationType) {
    switch(type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertCircle;
      case 'error': return AlertCircle;
      case 'info': 
      default: return Info;
    }
  }

  // Get notification color based on type
  function getNotificationColor(type: NotificationType) {
    switch(type) {
      case 'success': return 'border-green-500';
      case 'warning': return 'border-yellow-500';
      case 'error': return 'border-red-500';
      case 'info':
      default: return 'border-blue-500';
    }
  }

  // Mark notification as read
  function markAsRead(id: string) {
    if (onMarkAsRead) {
      onMarkAsRead(id);
    }
  }

  // Mark all as read
  function markAllAsRead() {
    if (onMarkAllAsRead) {
      onMarkAllAsRead();
    }
  }

  // Get unread count
  function getUnreadCount() {
    return notifications.filter(n => !n.read).length;
  }

  // Format date
  function formatDate(date: Date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return date.toLocaleDateString();
  }
</script>

<div class={`bg-white rounded-lg shadow-lg w-80 flex flex-col border border-gray-200 ${className}`} {...restProps}>
  <!-- Header -->
  <div class={`p-4 border-b flex items-center justify-between ${headerClass}`}>
    <div class="flex items-center">
      <Bell class="h-5 w-5 text-gray-500 mr-2" />
      <h3 class="font-semibold text-gray-900">Notifications</h3>
      {#if getUnreadCount() > 0}
        <span class="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {getUnreadCount()}
        </span>
      {/if}
    </div>
    <button 
      type="button" 
      class="text-gray-400 hover:text-gray-600"
      on:click={() => isExpanded = !isExpanded}
      aria-label="Toggle notifications"
    >
      {#if isExpanded}
        <X class="h-5 w-5" />
      {:else}
        <Mail class="h-5 w-5" />
      {/if}
    </button>
  </div>

  <!-- Filter tabs -->
  {#if showFilter}
    <div class="flex border-b">
      <button
        type="button"
        class={`flex-1 py-2 text-xs font-medium ${
          activeFilter === 'all' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
        on:click={() => activeFilter = 'all'}
      >
        All
      </button>
      <button
        type="button"
        class={`flex-1 py-2 text-xs font-medium ${
          activeFilter === 'unread' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
        on:click={() => activeFilter = 'unread'}
      >
        Unread ({notifications.filter(n => !n.read).length})
      </button>
      <button
        type="button"
        class={`flex-1 py-2 text-xs font-medium ${
          activeFilter === 'read' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
        on:click={() => activeFilter = 'read'}
      >
        Read
      </button>
    </div>
  {/if}

  <!-- Notifications list -->
  <div class="flex-1 overflow-y-auto max-h-96">
    {#if getFilteredNotifications().length === 0}
      <div class="p-6 text-center">
        <Mail class="h-10 w-10 text-gray-400 mx-auto mb-2" />
        <p class="text-sm text-gray-500">No notifications</p>
      </div>
    {:else}
      <ul class="divide-y divide-gray-200">
        {#each getFilteredNotifications() as notification}
          <li class={`p-3 ${!notification.read ? 'bg-blue-50' : ''} ${notificationClass}`}>
            <div class="flex">
              <div class={`flex-shrink-0 pt-0.5 ${getNotificationColor(notification.type)}`}>
                {#if true}
                  {@const Icon = getNotificationIcon(notification.type)}
                  <Icon class={`h-5 w-5 ${
                  notification.type === 'error' ? 'text-red-500' :
                  notification.type === 'warning' ? 'text-yellow-500' :
                  notification.type === 'success' ? 'text-green-500' : 'text-blue-500'
                }`} />
              {/if}
            </div>
              <div class="ml-3 flex-1">
                <p class={`text-sm font-medium ${
                  notification.read ? 'text-gray-700' : 'text-gray-900'
                }`}>
                  {notification.title}
                </p>
                <p class={`mt-1 text-sm ${notification.read ? 'text-gray-500' : 'text-gray-600'}`}>
                  {notification.message}
                </p>
                <div class="mt-2 flex items-center justify-between">
                  <p class="text-xs text-gray-500">{formatDate(notification.timestamp)}</p>
                  <div class="flex space-x-2">
                    {#if !notification.read} 
                      <button
                        type="button"
                        class="text-xs font-medium text-blue-600 hover:text-blue-800"
                        on:click={() => markAsRead(notification.id)}
                      >
                        Mark as read
                      </button>
                    {/if}
                    <button
                      type="button"
                      class="text-gray-400 hover:text-gray-600"
                      on:click={() => onDelete && onDelete(notification.id)}
                    >
                      <Trash2 class="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {#if notification.actions && notification.actions.length > 0}
                  <div class="mt-2 flex space-x-2">
                    {#each notification.actions as action}
                      <button
                        type="button"
                        class="inline-flex items-center px-2.5 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                        on:click={action.onClick}
                      >
                        {action.label}
                      </button>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <!-- Footer -->
  <div class={`p-3 border-t flex justify-between ${footerClass}`}>
    {#if showMarkAllRead && notifications.some(n => !n.read)}
      <button
        type="button"
        class="text-sm font-medium text-blue-600 hover:text-blue-800"
        on:click={markAllAsRead}
      >
        Mark all as read
      </button>
    {:else}
      <div></div>
    {/if}
    <button
      type="button"
      class="text-sm font-medium text-gray-600 hover:text-gray-800 flex items-center"
    >
      <Settings class="h-4 w-4 mr-1" />
      Settings
    </button>
  </div>
</div>