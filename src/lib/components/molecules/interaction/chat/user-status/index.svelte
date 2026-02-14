<script lang="ts">
  // Define local types
  interface User {
    id: string;
    name: string;
    avatar?: string;
    status?: 'online' | 'away' | 'offline' | 'typing';
    lastSeen?: Date;
  }

  import ChatStatusIndicator from '$stylist/components/atoms/interaction/chat/atoms/chat-status-indicator/index.svelte';

  // Props
  let { 
    user,
    showAvatar = true,
    showName = true,
    showStatusText = false
  }: {
    user: User;
    showAvatar?: boolean;
    showName?: boolean;
    showStatusText?: boolean;
  } = $props();

  // Status text
  const statusText = $derived(() => {
    switch (user.status) {
      case 'online': return 'в сети';
      case 'away': return 'не на месте';
      case 'typing': return 'печатает...';
      case 'offline': 
        return user.lastSeen 
          ? `был(а) ${new Date(user.lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` 
          : 'не в сети';
      default: return '';
    }
  });
</script>

<style>
  .user-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .user-info {
    display: flex;
    flex-direction: column;
  }

  .user-name {
    font-weight: 500;
    color: #1e293b;
    font-size: 0.875rem;
  }

  .status-text {
    font-size: 0.75rem;
    color: #64748b;
  }
</style>

<div class="user-status">
  {#if showAvatar && user}
    <ChatStatusIndicator 
      status={user.status}
      size="md"
      showLabel={false}
    />
  {/if}
  
  {#if showName || showStatusText}
    <div class="user-info">
      {#if showName && user.name}
        <div class="user-name">{user.name}</div>
      {/if}
      {#if showStatusText}
        <div class="status-text">{statusText}</div>
      {/if}
    </div>
  {/if}
</div>


