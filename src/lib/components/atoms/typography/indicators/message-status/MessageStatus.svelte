<script lang="ts">
  import { Check, CheckCheck } from 'lucide-svelte';
  import type { IMessageStatusProps } from './types';
  import { MessageStatusStyleManager } from './styles';

  let {
    status = 'sent',
    size = 'sm'
  }: IMessageStatusProps = $props();

  const containerClasses = MessageStatusStyleManager.getContainerClasses(status);
  const iconSizeClasses = MessageStatusStyleManager.getIconSizeClasses(size);

  const isDoubleCheck = status === 'read';
</script>

<div class={containerClasses}>
  {#if isDoubleCheck}
    <!-- Double check icon for read status -->
    <CheckCheck class={iconSizeClasses} />
  {:else}
    <!-- Single check icon for sent/delivered -->
    <Check class={iconSizeClasses} />
  {/if}
</div>