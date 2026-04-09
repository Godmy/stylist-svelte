<script lang="ts">
  import type { SimpleModalProps } from '$stylist/notification/interface/component/interaction-feedback/other';
  import { createSimpleModalState } from '$stylist/navigation/function/state/simple-modal';

  let props: SimpleModalProps = $props();
  const state = createSimpleModalState(props);
</script>

{#if props.open}
  <div class="fixed inset-0 bg-[var(--color-neutral-900)]/40 flex items-center justify-center p-4 z-[var(--z-index-modal)]">
    <div class={state.dialogClasses} {...props}>
      <div class="flex items-center justify-between"><h3 class="font-semibold">{props.title}</h3><button type="button" onclick={props.onClose}>x</button></div>
      <p class="text-sm text-[var(--color-text-secondary)] mt-2">Simple modal content</p>
    </div>
  </div>
{/if}
