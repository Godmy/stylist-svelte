<script lang="ts">
  import { DialogControlsStyleManager } from '$stylist/design-system/styles/interaction/dialog-controls';
  import type { ModalProps } from '$stylist/design-system/props/interaction/dialog-controls';
  let { open = true, title='Modal', class: className='', onClose, ...restProps }: ModalProps = $props();
</script>
{#if open}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div class={DialogControlsStyleManager.root('c-modal bg-white rounded-xl p-6 w-full max-w-lg', className)} {...restProps}>
      <div class="flex items-center justify-between"><h2 class="text-lg font-semibold">{title}</h2><button type="button" onclick={onClose}>x</button></div>
      <div class="mt-4 text-sm text-gray-700">Modal body content</div>
      <div class="mt-6 flex justify-end gap-2"><button class="px-3 py-1 border rounded" type="button" onclick={onClose}>Cancel</button><button class="px-3 py-1 bg-blue-600 text-white rounded" type="button" onclick={onClose}>Confirm</button></div>
    </div>
  </div>
{/if}
