<script lang="ts">
  import type { INotificationProps } from './Notification.types'; // Используем оригинальные типы для базового компонента
  import { NotificationStyleManager } from './Notification.styles';
  import { X } from 'lucide-svelte';

  let props: INotificationProps = $props();

  let {
    notification,
    showCloseButton = true,
    autoDismiss = false,
    dismissDelay = 5000,
    onDismiss,
    class: hostClass = ''
  } = $state(props);

  const wrapperClasses = $derived(
    NotificationStyleManager.getNotificationClass(notification.type, hostClass)
  );

  // Auto-dismiss functionality
  $effect(() => {
    if (autoDismiss && dismissDelay > 0) {
      const timer = setTimeout(() => {
        onDismiss?.(notification.id);
      }, dismissDelay);

      return () => clearTimeout(timer);
    }
  });

  function handleDismiss() {
    onDismiss?.(notification.id);
  }
</script>

<div class={wrapperClasses}>
  <div class={NotificationStyleManager.getContentClass()}>
    {#if notification.title}
      <div class={NotificationStyleManager.getTitleClass()}>{notification.title}</div>
    {/if}
    <div class={NotificationStyleManager.getMessageClass()}>{notification.message}</div>
    {#if notification.timestamp}
      <div class={NotificationStyleManager.getTimestampClass()}>
        {notification.timestamp.toLocaleString()}
      </div>
    {/if}
  </div>
  
  {#if showCloseButton}
    <button 
      class={NotificationStyleManager.getCloseButtonClass()} 
      onclick={handleDismiss}
      aria-label="Close notification"
    >
      <X class="w-4 h-4" />
    </button>
  {/if}
</div>