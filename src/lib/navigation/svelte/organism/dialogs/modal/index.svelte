<script lang="ts">
  import type { SlotModal as ModalProps } from '$stylist/navigation/interface/slot/modal';
  import { createModalState } from '$stylist/navigation/function/state/modal';

  let props: ModalProps = $props();
  const state = createModalState(props);
</script>

{#if props.open}
  <div class="fixed inset-0 bg-[var(--color-neutral-900)]/50 flex items-center justify-center p-4 z-[var(--z-index-modal)]">
    <div class={state.dialogClasses} {...props}>
      <div class="flex items-center justify-between"><h2 class="text-lg font-semibold">{props.title}</h2><button type="button" onclick={props.onClose}>x</button></div>
      <div class="mt-4 text-sm text-[var(--color-text-primary)]">Modal body content</div>
      <div class="mt-6 flex justify-end gap-2"><button class="px-3 py-1 border rounded" type="button" onclick={props.onClose}>Cancel</button><button class="px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded" type="button" onclick={props.onClose}>Confirm</button></div>
    </div>
  </div>
{/if}
