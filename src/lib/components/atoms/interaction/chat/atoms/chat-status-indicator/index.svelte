<script lang="ts">
  // Props
  let { 
    status = 'offline',
    size = 'sm',
    showLabel = false
  }: {
    status?: 'online' | 'offline' | 'away' | 'typing';
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
  } = $props();

  // Size classes
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  // Status classes
  const statusClasses = (status: string) => {
    switch (status) {
      case 'online': 
        return 'bg-green-500 ring-2 ring-green-200';
      case 'away': 
        return 'bg-yellow-500 ring-2 ring-yellow-200';
      case 'typing': 
        return 'bg-blue-500 animate-pulse ring-2 ring-blue-200';
      case 'offline': 
        return 'bg-gray-400 ring-2 ring-gray-200';
      default: 
        return 'bg-gray-400';
    }
  };

  // Status label
  const statusLabel = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'away': return 'Away';
      case 'typing': return 'Typing...';
      case 'offline': return 'Offline';
      default: return '';
    }
  };
</script>

<style>
  .status-indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    position: relative;
  }
  
  .label {
    margin-left: 0.5rem;
    font-size: 0.75rem;
    color: #64748b;
  }
</style>

<div class="status-indicator">
  <div class="{sizeClasses[size]} {statusClasses(status)} rounded-full"></div>
  {#if showLabel}
    <span class="label">{statusLabel(status)}</span>
  {/if}
</div>


