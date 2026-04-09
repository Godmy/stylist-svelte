<script lang="ts">
  import { createPushNotificationState } from '$stylist/management/function/state/push-notification';

  let props: Parameters<typeof createPushNotificationState>[0] = $props();
  const state = createPushNotificationState(props);
</script>

{#if state.visible}
  <div class={state.containerClasses}>
    <div class="flex items-start">
      {#if state.showIcon}
        <span class="mr-3 text-lg">{state.typeIcons[state.type as keyof typeof state.typeIcons]}</span>
      {/if}
      <div>
        {#if state.title}
          <h3 class="font-semibold">{state.title}</h3>
        {/if}
        <p>{state.message}</p>
      </div>
    </div>
    <button
      onclick={state.handleClose}
      aria-label="Close notification"
      class="ml-4 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
{/if}
