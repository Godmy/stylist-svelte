<script lang="ts">
  import type { Message } from '$stylist/design-system/props/information/chat';

  import MessageStatusAtom from '$stylist/components/atoms/information/typography/indicators/message-status/index.svelte';
  import MessageTimestamp from '$stylist/components/atoms/interaction/chat/atoms/message-timestamp/index.svelte';

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
</script>

<style>
  .message-meta {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.25rem;
  }

  .meta-separator {
    color: #94a3b8;
    font-size: 0.6rem;
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

    {#if showStatus}
      <MessageStatusAtom
        status={displayStatus}
        size="sm"
      />
    {/if}
  </div>
{/if}