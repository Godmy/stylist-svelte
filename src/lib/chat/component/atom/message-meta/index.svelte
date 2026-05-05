<script lang="ts">
  import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
  import { Icon as BaseIcon } from '$stylist/media';
  import MessageTimestamp from '$stylist/chat/component/atom/message-timestamp/index.svelte';
  import { createMessageMetaState } from '$stylist/chat/function/state/message-meta';

  let props: {
    message?: Message;
    showTimestamp?: boolean;
    showStatus?: boolean;
  } = $props();

  const state = createMessageMetaState(props);
</script>

<style>
  .message-meta {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    margin-top: var(--spacing-1);
  }

  .meta-separator {
    color: var(--color-text-secondary);
    font-size: var(--font-size-3);
  }
</style>

{#if state.showTimestamp || state.showStatus}
  <div class={state.containerClasses}>
    {#if state.showTimestamp && state.timestamp}
      <MessageTimestamp
        timestamp={state.timestamp}
        formatStyle="time"
      />
    {/if}

    {#if state.showTimestamp && state.timestamp && state.showStatus}
      <span class={state.separatorClasses}>&middot;</span>
    {/if}

    {#if state.showStatus && state.displayStatus}
      <span class={state.statusTextClasses}>
        <BaseIcon name={state.statusIcon} class={state.statusIconClasses} />
        {state.displayStatus}
      </span>
    {/if}
  </div>
{/if}



