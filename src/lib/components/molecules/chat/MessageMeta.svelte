<script lang="ts">
  // Define local types
  interface User {
    id: string;
    name: string;
    avatar?: string;
    status?: 'online' | 'away' | 'offline' | 'typing';
    lastSeen?: Date;
  }

  interface Message {
    id: string;
    sender: User;
    content: string;
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
    attachments?: any[]; // Simplified for this component
    isSystemMessage?: boolean;
  }

  import MessageStatusAtom from '../../atoms/indicators/MessageStatus.svelte';
  import MessageTimestamp from '../../atoms/indicators/MessageTimestamp.svelte';

  // Props
  let { 
    message,
    showTimestamp = true,
    showStatus = true
  }: {
    message: Message;
    showTimestamp?: boolean;
    showStatus?: boolean;
  } = $props();

  // Determine status for display
  const displayStatus = $derived(message.status);
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
    {#if showTimestamp}
      <MessageTimestamp 
        timestamp={message.timestamp} 
        formatStyle="time" 
      />
    {/if}
    
    {#if showTimestamp && showStatus}
      <span class="meta-separator">•</span>
    {/if}
    
    {#if showStatus}
      <MessageStatusAtom 
        status={displayStatus} 
        size="sm" 
      />
    {/if}
  </div>
{/if}