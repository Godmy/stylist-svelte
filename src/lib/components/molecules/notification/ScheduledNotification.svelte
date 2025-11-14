<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Clock, Calendar, Trash2, Edit3, Play, Pause, CheckCircle, AlertCircle, XCircle } from 'lucide-svelte';

  type ScheduledNotification = {
    id: string;
    title: string;
    message: string;
    scheduledTime: Date;
    status: 'scheduled' | 'sent' | 'cancelled';
    type: 'info' | 'success' | 'warning' | 'error';
    recipients?: string[]; // User IDs or email addresses
    repeat?: 'none' | 'daily' | 'weekly' | 'monthly';
  };

  type Props = {
    notifications: ScheduledNotification[];
    onReschedule?: (id: string, newTime: Date) => void;
    onCancel?: (id: string) => void;
    onSendNow?: (id: string) => void;
    onEdit?: (id: string) => void;
    showActions?: boolean;
    class?: string;
    headerClass?: string;
    notificationClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    notifications = [],
    onReschedule,
    onCancel,
    onSendNow,
    onEdit,
    showActions = true,
    class: className = '',
    headerClass = '',
    notificationClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  // Get notification color based on type
  function getNotificationColor(type: string) {
    switch(type) {
      case 'success': return 'bg-green-50 border-green-200 text-green-800';
      case 'warning': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error': return 'bg-red-50 border-red-200 text-red-800';
      case 'info':
      default: return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  }

  // Format date
  function formatDateTime(date: Date) {
    return date.toLocaleString([], {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Get status icon
  function getStatusIcon(status: string) {
    if (status === 'sent') return CheckCircle;
    if (status === 'cancelled') return XCircle;
    return Clock;
  }

  // Get status color
  function getStatusColor(status: string) {
    if (status === 'sent') return 'text-green-500';
    if (status === 'cancelled') return 'text-gray-500';
    return 'text-blue-500';
  }

  // Check if notification is overdue
  function isOverdue(notification: ScheduledNotification) {
    return notification.status === 'scheduled' && new Date() > notification.scheduledTime;
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <!-- Header -->
  <div class={`border-b px-4 py-3 flex items-center ${headerClass}`}>
    <Clock class="h-5 w-5 text-gray-500 mr-2" />
    <h3 class="text-lg font-medium text-gray-900">Scheduled Notifications</h3>
    <span class="ml-2 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
      {notifications.length}
    </span>
  </div>

  <!-- Notifications list -->
  <div class="divide-y divide-gray-200">
    {#if notifications.length === 0}
      <div class="p-8 text-center">
        <Clock class="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">No scheduled notifications</p>
      </div>
    {:else}
      {#each notifications as notification}
        <div class={`p-4 ${isOverdue(notification) ? 'bg-red-50' : ''} ${notificationClass}`}>
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-0.5">
              {#if true}
                {@const StatusIcon = getStatusIcon(notification.status)}
                <StatusIcon class={`h-5 w-5 ${getStatusColor(notification.status)}`} />
              {/if}
            </div>

            <div class="ml-3 flex-1">
              <div class="flex items-baseline justify-between">
                <h4 class="text-sm font-medium text-gray-900">{notification.title}</h4>
                <span class={`text-xs font-medium ${
                  notification.status === 'sent' ? 'text-green-800 bg-green-100' :
                  notification.status === 'cancelled' ? 'text-gray-800 bg-gray-100' :
                  isOverdue(notification) ? 'text-red-800 bg-red-100' :
                  'text-blue-800 bg-blue-100'
                } rounded-full px-2 py-0.5`}>
                  {notification.status.charAt(0).toUpperCase() + notification.status.slice(1)}
                  {#if isOverdue(notification)} (Overdue){/if}
                </span>
              </div>

              <p class="mt-1 text-sm text-gray-600">{notification.message}</p>

              <div class="mt-2 flex items-center text-xs text-gray-500">
                <Calendar class="h-3 w-3 mr-1" />
                <span>{formatDateTime(notification.scheduledTime)}</span>

                {#if notification.repeat && notification.repeat !== 'none'}
                  <span class="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Repeats: {notification.repeat.charAt(0).toUpperCase() + notification.repeat.slice(1)}
                  </span>
                {/if}
              </div>

              {#if notification.recipients && notification.recipients.length > 0}
                <div class="mt-2 text-xs text-gray-500">
                  Recipients: {notification.recipients.length} user(s)
                </div>
              {/if}
            </div>

            {#if showActions}
              <div class="ml-4 flex-shrink-0 flex space-x-2">
                {#if notification.status === 'scheduled' && !isOverdue(notification)}
                  <button
                    type="button"
                    class="text-blue-600 hover:text-blue-900"
                    on:click={() => onSendNow && onSendNow(notification.id)}
                    title="Send now"
                  >
                    <Play class="h-4 w-4" />
                  </button>
                {/if}

                {#if notification.status === 'scheduled'}
                  <button
                    type="button"
                    class="text-gray-500 hover:text-gray-700"
                    on:click={() => onCancel && onCancel(notification.id)}
                    title="Cancel"
                  >
                    <Pause class="h-4 w-4" />
                  </button>
                {/if}

                <button
                  type="button"
                  class="text-gray-500 hover:text-gray-700"
                  on:click={() => onEdit && onEdit(notification.id)}
                  title="Edit"
                >
                  <Edit3 class="h-4 w-4" />
                </button>

                <button
                  type="button"
                  class="text-gray-500 hover:text-red-500"
                  on:click={() => onCancel && onCancel(notification.id)}
                  title="Delete"
                >
                  <Trash2 class="h-4 w-4" />
                </button>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    {/if}
  </div>

  <!-- Footer -->
  {#if notifications.length > 0}
    <div class={`border-t px-4 py-3 text-xs text-gray-500 ${footerClass}`}>
      Showing {notifications.length} scheduled notification(s)
    </div>
  {/if}
</div>
