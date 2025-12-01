<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { X, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-svelte';

  import type { INotificationProps, NotificationType } from './types';
  import { NotificationStyleManager } from './styles';

  /**
   * Notification component - A flexible notification component with various styles and states
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other notification components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param show - Whether the notification is visible
   * @param title - Title of the notification
   * @param message - Message of the notification
   * @param children - Snippet content for the notification
   * @param type - Visual style of the notification ('success' | 'warning' | 'error' | 'info' | 'default')
   * @param duration - Duration in milliseconds before auto-dismissal (0 for persistent)
   * @param closable - Whether the notification can be closed
   * @param onClose - Callback when notification is closed
   * @param position - Position of the notification ('top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center')
   * @param contentClass - Additional CSS classes for the content area
   * @param headerClass - Additional CSS classes for the header
   * @param bodyClass - Additional CSS classes for the body
   * @returns A styled, accessible notification element
   */
  let {
    show = false,
    title,
    message,
    children,
    type = 'default',
    duration = 5000,
    closable = true,
    onClose,
    position = 'top-right',
    showIcon = true,
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    bodyClass = '',
    ...restProps
  }: INotificationProps = $props();

  let isVisible = $state(show);
  let timeoutId: number | null = null;

  $effect(() => {
    isVisible = show;
    if (show && duration > 0) {
      timeoutId = window.setTimeout(() => {
        handleClose();
      }, duration) as unknown as number;
    }
  });

  $effect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });

  function handleClose() {
    isVisible = false;
    onClose?.();
  }

  const iconMap: Record<NotificationType, typeof Info> = {
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
    info: Info,
    default: Info
  };

  let iconComponent = $derived(iconMap[type] ?? Info);

  // Get CSS classes using the style manager
  let containerClasses = $derived(NotificationStyleManager.getBaseClasses(type, position, hostClass));
  let contentClasses = $derived(NotificationStyleManager.getContentClasses(contentClass));
  let headerClasses = $derived(NotificationStyleManager.getHeaderClasses(headerClass));
  let bodyClasses = $derived(NotificationStyleManager.getBodyClasses(bodyClass));
  let closeButtonClasses = $derived(NotificationStyleManager.getCloseButtonClasses());
</script>

{#if isVisible}
  <div
    class={containerClasses}
    role="alert"
    {...restProps}
  >
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <iconComponent class="h-5 w-5"></iconComponent>
      </div>
      <div class={contentClasses}>
        {#if title}
          <p class={headerClasses}>
            {title}
          </p>
        {/if}
        {#if message}
          <p class={bodyClasses}>
            {message}
          </p>
        {/if}
        {#if children}
          <div class={bodyClasses}>
            {@render children()}
          </div>
        {/if}
      </div>
      {#if closable}
        <div class="ml-4 flex-shrink-0 flex">
          <button
            type="button"
            class={closeButtonClasses}
            onclick={handleClose}
            aria-label="Close"
          >
            <X class="h-5 w-5" />
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
