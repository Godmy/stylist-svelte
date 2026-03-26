<script lang="ts">
  import { DialogControlsStyleManager } from '$stylist/interaction/class/style-manager/dialog-controls';
  import type { ModalProps } from '$stylist/interaction/interface/dialog-controls';
  let { open = true, title='Modal', class: className='', onClose, ...restProps }: ModalProps = $props();
</script>
{#if open}
  <div class="fixed inset-0 bg-[var(--color-neutral-900)]/50 flex items-center justify-center p-4 z-[var(--z-index-modal)]">
    <div class={DialogControlsStyleManager.root('c-modal bg-[var(--color-background-primary)] rounded-xl p-6 w-full max-w-lg', className)} {...restProps}>
      <div class="flex items-center justify-between"><h2 class="text-lg font-semibold">{title}</h2><button type="button" onclick={onClose}>x</button></div>
      <div class="mt-4 text-sm text-[var(--color-text-primary)]">Modal body content</div>
      <div class="mt-6 flex justify-end gap-2"><button class="px-3 py-1 border rounded" type="button" onclick={onClose}>Cancel</button><button class="px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded" type="button" onclick={onClose}>Confirm</button></div>
    </div>
  </div>
{/if}








