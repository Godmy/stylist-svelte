<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { 
    Bell,
    BellOff,
    X,
    Mail,
    MessageCircle,
    MessageSquare,
    Users,
    UserPlus,
    AlertTriangle,
    CheckCircle,
    Info,
    Activity,
    XCircle,
    AtSign,
    Heart,
    Circle
  } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'message' | 'mention' | 'follow' | 'like' | 'comment';

  type Notification = {
    id: string;
    title: string;
    content: string;
    type: NotificationType;
    timestamp: Date;
    unread?: boolean;
    actions?: {
      label: string;
      handler: () => void;
    }[];
    icon?: string; // Optional custom icon
    dismissible?: boolean;
    avatar?: string; // Sender's avatar
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    notifications: Notification[];
    maxNotifications?: number;
    showUnreadBadge?: boolean;
    showTimestamp?: boolean;
    showActions?: boolean;
    showDismissAll?: boolean;
    showMarkAllAsRead?: boolean;
    enableAutoDismiss?: boolean;
    autoDismissDelay?: number; // in milliseconds
    class?: string;
    itemClass?: string;
    headerClass?: string;
    footerClass?: string;
    onNotificationClick?: (notification: Notification) => void;
    onNotificationDismiss?: (notificationId: string) => void;
    onNotificationMarkRead?: (notificationId: string) => void;
    onDismissAll?: () => void;
    onMarkAllAsRead?: () => void;
    locale?: string;
  };

  let {
    notifications = [],
    maxNotifications = 10,
    showUnreadBadge = true,
    showTimestamp = true,
    showActions = true,
    showDismissAll = true,
    showMarkAllAsRead = true,
    enableAutoDismiss = false,
    autoDismissDelay = 5000,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    footerClass = '',
    onNotificationClick,
    onNotificationDismiss,
    onNotificationMarkRead,
    onDismissAll,
    onMarkAllAsRead,
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let notificationList = $state<Notification[]>(notifications.slice(0, maxNotifications));
  let dismissedIds = $state<Set<string>>(new Set());

  $effect(() => {
    notificationList = notifications.slice(0, maxNotifications);
  });

  function handleNotificationClick(notification: Notification) {
    onNotificationClick?.(notification);
    
    // Mark as read
    const updatedNotifications = notificationList.map(notif => 
      notif.id === notification.id ? { ...notif, unread: false } : notif
    );
    notificationList = updatedNotifications;
  }

  function handleDismiss(notificationId: string) {
    onNotificationDismiss?.(notificationId);
    
    // Add to dismissed IDs instead of removing immediately
    // This allows for potential "undo" functionality
    if (enableAutoDismiss) {
      dismissedIds.add(notificationId);
      setTimeout(() => {
        notificationList = notificationList.filter(notif => notif.id !== notificationId);
        dismissedIds.delete(notificationId);
      }, autoDismissDelay);
    } else {
      notificationList = notificationList.filter(notif => notif.id !== notificationId);
    }
  }

  function handleMarkAsRead(notificationId: string) {
    const updatedNotifications = notificationList.map(notif => 
      notif.id === notificationId ? { ...notif, unread: false } : notif
    );
    notificationList = updatedNotifications;
    onNotificationMarkRead?.(notificationId);
  }

  function handleDismissAll() {
    onDismissAll?.();
    notificationList = [];
  }

  function handleMarkAllAsRead() {
    const updatedNotifications = notificationList.map(notif => ({ ...notif, unread: false }));
    notificationList = updatedNotifications;
    onMarkAllAsRead?.();
  }

  function getNotificationIcon(type: NotificationType) {
    const iconMap: Record<NotificationType, any> = {
      info: Info,
      success: CheckCircle,
      warning: AlertTriangle,
      error: XCircle,
      message: MessageCircle,
      mention: AtSign,
      follow: UserPlus,
      like: Heart,
      comment: MessageSquare
    };
    
    return iconMap[type] || Bell;
  }

  function getNotificationColor(type: NotificationType) {
    const colorMap: Record<NotificationType, string> = {
      info: 'text-blue-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      error: 'text-red-500',
      message: 'text-indigo-500',
      mention: 'text-purple-500',
      follow: 'text-blue-500',
      like: 'text-pink-500',
      comment: 'text-teal-500'
    };
    
    return colorMap[type] || 'text-gray-500';
  }

  function formatTime(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    
    return new Date(date).toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  let unreadCount = $derived(notificationList.filter(n => n.unread).length);
  
</script>

<div class={`notification-list ${hostClass}`} {...restProps}>
  <div class={`border-b border-gray-200 p-4 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <Bell class="h-5 w-5 text-gray-500 mr-2" />
        <h2 class="text-lg font-medium text-gray-900">Notifications</h2>
        
        {#if showUnreadBadge && unreadCount > 0}
          <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            {unreadCount} unread
          </span>
        {/if}
      </div>
      
      <div class="flex space-x-2">
        {#if showMarkAllAsRead}
          <Button 
            variant="ghost" 
            size="sm"
            onclick={handleMarkAllAsRead}
            disabled={unreadCount === 0}
          >
            Mark all read
          </Button>
        {/if}
        
        {#if showDismissAll}
          <Button 
            variant="ghost" 
            size="sm"
            onclick={handleDismissAll}
            disabled={notificationList.length === 0}
          >
            Dismiss all
          </Button>
        {/if}
        
        <Button 
          variant="ghost" 
          size="sm"
          onclick={() => {
            // Close notification panel in a real app
          }}
          aria-label="Close notifications"
        >
          <X class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
  
  <div class="max-h-[500px] overflow-y-auto">
    {#if notificationList.length === 0}
      <div class="text-center py-12">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
          <BellOff class="h-6 w-6 text-gray-400" />
        </div>
        <h3 class="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
        <p class="mt-1 text-sm text-gray-500">You'll see important updates here.</p>
      </div>
    {:else}
      <ul class="divide-y divide-gray-200">
        {#each notificationList as notification}
          {@const NotificationIcon = getNotificationIcon(notification.type)}
          {@const iconColor = getNotificationColor(notification.type)}
          <li 
            class={`p-4 hover:bg-gray-50 transition-colors ${
              notification.unread ? 'bg-blue-50' : 'bg-white'
            } ${itemClass}`}
          >
            <div
              class="flex items-start"
              role="button"
              tabindex="0"
              onclick={() => handleNotificationClick(notification)}
              onkeydown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleNotificationClick(notification);
                }
              }}
            >
              <div class="flex-shrink-0 pt-0.5">
                {#if notification.avatar}
                  <img 
                    class="h-8 w-8 rounded-full" 
                    src={notification.avatar} 
                    alt="Sender avatar" 
                  />
                {:else}
                  <div class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <NotificationIcon class={`h-5 w-5 ${iconColor}`} />
                  </div>
                {/if}
              </div>
              
              <div class="ml-3 flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900 truncate">{notification.title}</p>
                  {#if showTimestamp}
                    <p class="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {formatTime(notification.timestamp)}
                    </p>
                  {/if}
                </div>
                
                <p class="mt-1 text-sm text-gray-600">
                  {notification.content}
                </p>
                
                {#if showActions && notification.actions && notification.actions.length > 0}
                  <div class="mt-3 flex space-x-3">
                    {#each notification.actions as action}
                      <button
                        type="button"
                        class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onclick={(e) => {
                          e.stopPropagation();
                          action.handler();
                        }}
                      >
                        {action.label}
                      </button>
                    {/each}
                  </div>
                {/if}
              </div>
              
              <div class="ml-4 flex items-start space-x-2">
                {#if notification.unread}
                  <button
                    type="button"
                    class="text-gray-400 hover:text-gray-500"
                    onclick={(e) => {
                      e.stopPropagation();
                      handleMarkAsRead(notification.id);
                    }}
                    aria-label="Mark as read"
                  >
                    <Circle class="h-5 w-5" />
                  </button>
                {/if}
                
                {#if notification.dismissible !== false}
                  <button
                    type="button"
                    class="text-gray-400 hover:text-gray-500"
                    onclick={(e) => {
                      e.stopPropagation();
                      handleDismiss(notification.id);
                    }}
                    aria-label="Dismiss notification"
                  >
                    <X class="h-5 w-5" />
                  </button>
                {/if}
              </div>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
  
  {#if notificationList.length > 0}
    <div class={`border-t border-gray-200 p-4 ${footerClass}`}>
      <Button 
        variant="ghost" 
        class="w-full"
        onclick={handleDismissAll}
      >
        Clear all notifications
      </Button>
    </div>
  {/if}
</div>
