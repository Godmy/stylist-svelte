<script lang="ts">
  import { Check, CheckCheck } from 'lucide-svelte';

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

  // Status configuration
  const statusConfig = $derived(
    (() => {
      switch (status) {
        case 'sent':
          return { color: 'text-gray-400' };
        case 'delivered':
          return { color: 'text-gray-400' };
        case 'read':
          return { color: 'text-green-500' };
        default:
          return { color: 'text-gray-400' };
      }
    })()
  );

  const isDoubleCheck = $derived(status === 'read');
</script>

<div class="inline-flex items-center justify-center {statusConfig.color}">
  {#if isDoubleCheck}
    <!-- Double check icon for read status -->
    <CheckCheck class={sizeClasses[size]} />
  {:else}
    <!-- Single check icon for sent/delivered -->
    <Check class={sizeClasses[size]} />
  {/if}
</div>