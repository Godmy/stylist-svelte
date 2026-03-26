<script lang="ts">
  import { DialogControlsStyleManager } from '$stylist/interaction/class/style-manager/dialog-controls';
  import type { DialogProps } from '$stylist/interaction/interface/dialog-controls';
  let { open = true, title='Dialog', description='Dialog content', class: className='', onClose, ...restProps }: DialogProps = $props();
</script>
{#if open}
  <div class="fixed inset-0 bg-[var(--color-neutral-900)]/40 flex items-center justify-center p-4 z-[var(--z-index-modal)]">
    <div class={DialogControlsStyleManager.root('c-dialog bg-[var(--color-background-primary)] rounded-lg p-5 w-full max-w-md', className)} {...restProps}>
      <div class="flex items-center justify-between"><h3 class="font-semibold">{title}</h3><button type="button" onclick={onClose}>x</button></div>
      <p class="mt-2 text-sm text-[var(--color-text-secondary)]">{description}</p>
      <div class="mt-4 flex justify-end"><button type="button" class="px-3 py-1 border rounded" onclick={onClose}>Close</button></div>
    </div>
  </div>
{/if}








