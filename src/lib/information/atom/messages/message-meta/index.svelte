<script lang="ts">
  import type { Message } from '$stylist/information/interface/chat';
  import { Icon as BaseIcon } from '$stylist';
  import MessageTimestamp from '$stylist/interaction/atom/chat/atoms/message-timestamp/index.svelte';
  const Check = 'check';
  const CheckCheck = 'check-check';

  // Props
  let {
    message,
    showTimestamp = true,
    showStatus = true
  }: {
    message?: Message;
    showTimestamp?: boolean;
    showStatus?: boolean;
  } = $props();

  const timestamp = $derived(
    message?.timestamp instanceof Date
      ? message.timestamp
      : message?.timestamp
        ? new Date(message.timestamp as unknown as string | number | Date)
        : undefined
  );

  // Message supports string statuses too, but MessageStatusAtom only accepts known literals.
  const displayStatus = $derived(
    message?.status === 'sent' || message?.status === 'delivered' || message?.status === 'read'
      ? message.status
      : undefined
  );

  const statusIcon = $derived(
    displayStatus === 'read' ? CheckCheck : displayStatus === 'delivered' ? CheckCheck : Check
  );
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

{#if showTimestamp || showStatus}
  <div class="message-meta">
    {#if showTimestamp && timestamp}
      <MessageTimestamp
        timestamp={timestamp}
        formatStyle="time"
      />
    {/if}

    {#if showTimestamp && timestamp && showStatus}
      <span class="meta-separator">&middot;</span>
    {/if}

    {#if showStatus && displayStatus}
      <span class="inline-flex items-center gap-1 text-xs text-[--color-gray-500]">
        <BaseIcon name={statusIcon} class={`h-3 w-3 ${displayStatus === 'read' ? 'text-[--color-primary-600]' : ''}`} />
        {displayStatus}
      </span>
    {/if}
  </div>
{/if}


