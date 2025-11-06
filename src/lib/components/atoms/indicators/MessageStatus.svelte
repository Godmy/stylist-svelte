<script lang="ts">
  // Props
  let { 
    status = 'sent',
    size = 'sm'
  }: {
    status?: 'sent' | 'delivered' | 'read';
    size?: 'sm' | 'md';
  } = $props();

  // Size classes
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4'
  };

  // Status icon and color
  const statusConfig = $derived(
    (() => {
      switch (status) {
        case 'sent':
          return { icon: 'check', color: '#94a3b8', filled: false };
        case 'delivered':
          return { icon: 'check', color: '#94a3b8', filled: true };
        case 'read':
          return { icon: 'double-check', color: '#22c55e', filled: true };
        default:
          return { icon: 'check', color: '#94a3b8', filled: false };
      }
    })()
  );
</script>

<style>
  .message-status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="message-status" style="color: {statusConfig.color};">
  {#if statusConfig.icon === 'double-check'}
    <!-- Double check icon for read status -->
    <svg class={sizeClasses[size]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7.77459L5.07031 11L14 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.5 9.5L9.57031 12.7254L14.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  {:else}
    <!-- Single check icon for sent/delivered -->
    <svg class={sizeClasses[size]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1 7.77459L5.07031 11L14 3" 
        stroke="currentColor" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        fill={statusConfig.filled ? "currentColor" : "none"}
      />
    </svg>
  {/if}
</div>