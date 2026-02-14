<script lang="ts">
  import { DialogControlsStyleManager } from '$stylist/design-system/styles/dialog-controls';
  import type { DialogProps } from '$stylist/design-system/props/dialog-controls';
  let { open = true, title='Dialog', description='Dialog content', class: className='', onClose, ...restProps }: DialogProps = $props();
</script>
{#if open}
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
    <div class={DialogControlsStyleManager.root('c-dialog bg-white rounded-lg p-5 w-full max-w-md', className)} {...restProps}>
      <div class="flex items-center justify-between"><h3 class="font-semibold">{title}</h3><button type="button" onclick={onClose}>x</button></div>
      <p class="mt-2 text-sm text-gray-600">{description}</p>
      <div class="mt-4 flex justify-end"><button type="button" class="px-3 py-1 border rounded" onclick={onClose}>Close</button></div>
    </div>
  </div>
{/if}
