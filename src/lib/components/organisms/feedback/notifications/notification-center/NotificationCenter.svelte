<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Bell, X, Mail, AlertCircle, CheckCircle, Info, Settings, Trash2 } from 'lucide-svelte';

  import type { INotificationCenterProps, INotificationCenterNotification, FilterOption } from './types';
  import { NotificationCenterStyleManager } from './styles';

  /**
   * NotificationCenter component - A comprehensive notification center with filtering and management
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other notification components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param notifications - Array of notifications to display
   * @param onMarkAsRead - Callback when a notification is marked as read
   * @param onMarkAllAsRead - Callback when all notifications are marked as read
   * @param onArchive - Callback when a notification is archived
   * @param onDelete - Callback when a notification is deleted
   * @param showFilter - Whether to show the filter tabs
   * @param showMarkAllRead - Whether to show the "Mark all as read" button
   * @param maxNotifications - Maximum number of notifications to display
   * @param headerClass - Additional CSS classes for the header
   * @param notificationClass - Additional CSS classes for notification items
   * @param footerClass - Additional CSS classes for the footer
   * @returns A styled, accessible notification center element
   */
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
  }: INotificationCenterProps = $props();

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
  function getNotificationIcon(type: string) {
    switch(type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertCircle;
      case 'error': return AlertCircle;
      case 'info':
      default: return Info;
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

  // Get CSS classes using the style manager
  let containerClasses = $derived(NotificationCenterStyleManager.getContainerClasses(className));
  let headerClasses = $derived(NotificationCenterStyleManager.getHeaderClasses(headerClass));
  let unreadBadgeClasses = $derived(NotificationCenterStyleManager.getUnreadBadgeClasses());
  let filterTabClassesAll = $derived(NotificationCenterStyleManager.getFilterTabClasses(activeFilter === 'all' as FilterOption));
  let filterTabClassesUnread = $derived(NotificationCenterStyleManager.getFilterTabClasses(activeFilter === 'unread' as FilterOption));
  let filterTabClassesRead = $derived(NotificationCenterStyleManager.getFilterTabClasses(activeFilter === 'read' as FilterOption));
  let notificationTimestampClasses = $derived(NotificationCenterStyleManager.getNotificationTimestampClasses());
  let footerClasses = $derived(NotificationCenterStyleManager.getFooterClasses(footerClass));
</script>

<div class={containerClasses} {...restProps}>
  <!-- Header -->
  <div class={headerClasses}>
    <div class="flex items-center">
      <Bell class="h-5 w-5 text-[--color-text-secondary] mr-2" />
      <h3 class="font-semibold text-[--color-text-primary]">Notifications</h3>
      {#if getUnreadCount() > 0}
        <span class={unreadBadgeClasses}>
          {getUnreadCount()}
        </span>
      {/if}
    </div>
    <button
      type="button"
      class="text-[--color-text-secondary] hover:text-[--color-text-primary]"
      onclick={() => isExpanded = !isExpanded}
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
    <div class="flex border-b border-[--color-border-primary]">
      <button
        type="button"
        class={filterTabClassesAll}
        onclick={() => activeFilter = 'all'}
      >
        All
      </button>
      <button
        type="button"
        class={filterTabClassesUnread}
        onclick={() => activeFilter = 'unread'}
      >
        Unread ({notifications.filter(n => !n.read).length})
      </button>
      <button
        type="button"
        class={filterTabClassesRead}
        onclick={() => activeFilter = 'read'}
      >
        Read
      </button>
    </div>
  {/if}

  <!-- Notifications list -->
  <div class="flex-1 overflow-y-auto max-h-96">
    {#if getFilteredNotifications().length === 0}
      <div class="p-6 text-center">
        <Mail class="h-10 w-10 text-[--color-text-secondary] mx-auto mb-2" />
        <p class="text-sm text-[--color-text-secondary]">No notifications</p>
      </div>
    {:else}
      <ul class="divide-y divide-[--color-border-primary]">
        {#each getFilteredNotifications() as notification}
          {@const notificationItemClasses = NotificationCenterStyleManager.getNotificationItemClasses(!notification.read, notificationClass)}
          {@const notificationIconColor = NotificationCenterStyleManager.getNotificationIconColor(notification.type as any)}
          {@const notificationTitleClasses = NotificationCenterStyleManager.getNotificationTitleClasses(notification.read)}
          {@const notificationMessageClasses = NotificationCenterStyleManager.getNotificationMessageClasses(notification.read)}
          <li class={notificationItemClasses}>
            <div class="flex">
              <div class="flex-shrink-0 pt-0.5">
                {#if notification.type === 'success'}
                  <CheckCircle class={`h-5 w-5 ${notificationIconColor}`} />
                {:else if notification.type === 'warning' || notification.type === 'error'}
                  <AlertCircle class={`h-5 w-5 ${notificationIconColor}`} />
                {:else if notification.type === 'info'}
                  <Info class={`h-5 w-5 ${notificationIconColor}`} />
                {/if}
              </div>
              <div class="ml-3 flex-1">
                <p class={notificationTitleClasses}>
                  {notification.title}
                </p>
                <p class={notificationMessageClasses}>
                  {notification.message}
                </p>
                <div class="mt-2 flex items-center justify-between">
                  <p class={notificationTimestampClasses}>{notification.timestamp ? formatDate(notification.timestamp) : ''}</p>
                  <div class="flex space-x-2">
                    {#if !notification.read}
                      <button
                        type="button"
                        class="text-xs font-medium text-[--color-primary-600] hover:text-[--color-primary-800]"
                        onclick={() => markAsRead(notification.id)}
                      >
                        Mark as read
                      </button>
                    {/if}
                    <button
                      type="button"
                      class="text-[--color-text-secondary] hover:text-[--color-text-primary]"
                      onclick={() => onDelete && onDelete(notification.id)}
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
                        class="inline-flex items-center px-2.5 py-1 border border-[--color-border-primary] shadow-sm text-xs font-medium rounded text-[--color-text-primary] bg-[--color-surface-primary] hover:bg-[--color-surface-secondary] focus:outline-none"
                        onclick={action.handler}
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
  <div class={footerClasses}>
    {#if showMarkAllRead && notifications.some(n => !n.read)}
      <button
        type="button"
        class="text-sm font-medium text-[--color-primary-600] hover:text-[--color-primary-800]"
        onclick={markAllAsRead}
      >
        Mark all as read
      </button>
    {:else}
      <div></div>
    {/if}
    <button
      type="button"
      class="text-sm font-medium text-[--color-text-secondary] hover:text-[--color-text-primary] flex items-center"
    >
      <Settings class="h-4 w-4 mr-1" />
      Settings
    </button>
  </div>
</div>