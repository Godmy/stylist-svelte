<script lang="ts">
  import type { SlotDialog as DialogProps } from '$stylist/navigation/interface/slot/dialog';
  import { createDialogState } from '$stylist/navigation/function/state/dialog';

  let props: DialogProps = $props();
  const state = createDialogState(props);
</script>

{#if props.open}
  <div class="fixed inset-0 bg-[var(--color-neutral-900)]/40 flex items-center justify-center p-4 z-[var(--z-index-modal)]">
    <div class={state.dialogClasses} {...props}>
      <div class="flex items-center justify-between"><h3 class="font-semibold">{props.title}</h3><button type="button" onclick={props.onClose}>x</button></div>
      <p class="mt-2 text-sm text-[var(--color-text-secondary)]">{props.description}</p>
      <div class="mt-4 flex justify-end"><button type="button" class="px-3 py-1 border rounded" onclick={props.onClose}>Close</button></div>
    </div>
  </div>
{/if}
