<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { X, Bell, Check, AlertTriangle, Info, XCircle } from 'lucide-svelte';

  type NotificationType = 'info' | 'success' | 'warning' | 'error';

  type Props = {
    title: string;
    message: string;
    type?: NotificationType;
    showIcon?: boolean;
    showCloseButton?: boolean;
    autoDismiss?: boolean;
    dismissDelay?: number; // in milliseconds
    onDismiss?: () => void;
    actions?: Array<{
      label: string;
      onClick: () => void;
      primary?: boolean;
    }>;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    actionsClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title,
    message,
    type = 'info',
    showIcon = true,
    showCloseButton = true,
    autoDismiss = true,
    dismissDelay = 5000, // 5 seconds
    onDismiss,
    actions = [],
    class: className = '',
    headerClass = '',
    contentClass = '',
    actionsClass = '',
    ...restProps
  }: Props = $props();

  let shouldAutoDismiss = $state(autoDismiss);
  let dismissed = $state(false);

  // Auto-dismiss functionality
  $effect(() => {
    if (shouldAutoDismiss && dismissDelay > 0) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, dismissDelay);

      return () => clearTimeout(timer);
    }
  });

  function handleDismiss() {
    dismissed = true;

    if (onDismiss) {
      onDismiss();
    }
  }

  function handleAction(action: { onClick: () => void }) {
    action.onClick();
    handleDismiss();
  }

  // Get notification icon based on type
  function getNotificationIcon() {
    switch(type) {
      case 'success': return Check;
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      case 'info':
      default: return Info;
    }
  }

  // Get notification color based on type
  function getNotificationColor() {
    switch(type) {
      case 'success': return 'bg-green-50 border-green-200 text-green-800';
      case 'warning': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error': return 'bg-red-50 border-red-200 text-red-800';
      case 'info':
      default: return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  }

  // Get icon color based on type
  function getIconColor() {
    switch(type) {
      case 'success': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      case 'info':
      default: return 'text-blue-500';
    }
  }

  // Get title color based on type
  function getTitleColor() {
    switch(type) {
      case 'success': return 'text-green-800';
      case 'warning': return 'text-yellow-800';
      case 'error': return 'text-red-800';
      case 'info':
      default: return 'text-blue-800';
    }
  }

  // Get close button color based on type
  function getCloseButtonColor() {
    switch(type) {
      case 'success': return 'text-green-500 hover:text-green-700';
      case 'warning': return 'text-yellow-500 hover:text-yellow-700';
      case 'error': return 'text-red-500 hover:text-red-700';
      case 'info':
      default: return 'text-blue-500 hover:text-blue-700';
    }
  }

  // Get close button hover color
  function getCloseButtonHoverColor() {
    switch(type) {
      case 'success': return 'hover:bg-green-100';
      case 'warning': return 'hover:bg-yellow-100';
      case 'error': return 'hover:bg-red-100';
      case 'info':
      default: return 'hover:bg-blue-100';
    }
  }

  function dismissNotification() {
    handleDismiss();
  }
</script>

{#if !dismissed}
  <div class={`border rounded-lg p-4 shadow-lg max-w-sm w-full ${getNotificationColor()} ${className}`} {...restProps}>
    <div class="flex">
      {#if showIcon}
        <div class="flex-shrink-0 pt-0.5">
          {#if true}
            {@const Icon = getNotificationIcon()}
            <Icon class={`h-5 w-5 ${getIconColor()}`} />
          {/if}
        </div>
      {/if}

      <div class="ml-3 flex-1">
        <div class={`flex items-start justify-between ${headerClass}`}>
          <div>
            <h3 class="text-sm font-medium">{title}</h3>
            <p class={`mt-1 text-sm ${contentClass}`}>{message}</p>
          </div>

          {#if showCloseButton}
            <button
              type="button"
              class="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
              on:click={handleDismiss}
              aria-label="Dismiss notification"
            >
              <X class="h-5 w-5" />
            </button>
          {/if}
        </div>

        {#if actions.length > 0}
          <div class={`mt-3 flex space-x-2 ${actionsClass}`}>
            {#each actions as action}
              <button
                type="button"
                class={`inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none ${
                  action.primary
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
                on:click={() => handleAction(action)}
              >
                {action.label}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}