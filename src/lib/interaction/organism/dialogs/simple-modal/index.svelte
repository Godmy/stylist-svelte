<script lang="ts">
  import type { SimpleModalProps } from '$stylist/interaction/interface/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/interaction/class/style-manager/interaction-feedback';
  let { open=true, title='Simple Modal', class: className='', onClose, ...restProps }: SimpleModalProps = $props();
</script>
{#if open}
  <div class="fixed inset-0 bg-[var(--color-neutral-900)]/40 flex items-center justify-center p-4 z-[var(--z-index-modal)]">
    <div class={InteractionFeedbackStyleManager.root('c-simple-modal bg-[var(--color-background-primary)] rounded-lg p-5 w-full max-w-sm', className)} {...restProps}>
      <div class="flex items-center justify-between"><h3 class="font-semibold">{title}</h3><button type="button" onclick={onClose}>x</button></div>
      <p class="text-sm text-[var(--color-text-secondary)] mt-2">Simple modal content</p>
    </div>
  </div>
{/if}









