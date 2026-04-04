<script lang="ts">
  // Define local types
  interface User {
    id: string;
    name: string;
    avatar?: string;
    status?: 'online' | 'away' | 'offline' | 'typing';
    lastSeen?: Date;
  }

  import ChatStatusIndicator from '$stylist/communication/svelte/atom/chat/atoms/chat-status-indicator/index.svelte';

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
      case 'online': return 'РІ СЃРµС‚Рё';
      case 'away': return 'РЅРµ РЅР° РјРµСЃС‚Рµ';
      case 'typing': return 'РїРµС‡Р°С‚Р°РµС‚...';
      case 'offline': 
        return user.lastSeen 
          ? `Р±С‹Р»(Р°) ${new Date(user.lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` 
          : 'РЅРµ РІ СЃРµС‚Рё';
      default: return '';
    }
  });
</script>

<style>
  .user-status {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }

  .user-info {
    display: flex;
    flex-direction: column;
  }

  .user-name {
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
    font-size: var(--font-size-3);
  }

  .status-text {
    font-size: var(--font-size-3);
    color: var(--color-text-secondary);
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



