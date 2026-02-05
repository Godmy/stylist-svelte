<script lang="ts">
  import { Check, CheckCheck } from 'lucide-svelte';
  import type { MessageStatusProps } from '$stylist/design-system';
  import { createMessageStatusState } from '../../state.svelte';

  let props: MessageStatusProps = $props();

  const state = createMessageStatusState(props);
</script>

<div class={state.containerClasses}>
  {#if state.isDoubleCheck}
    <CheckCheck class={state.iconClasses} />
  {:else}
    <Check class={state.iconClasses} />
  {/if}
</div>
