<script lang="ts">
  import type { SimpleModalProps } from '$stylist/design-system/props/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/design-system/styles/interaction-feedback';
  let { open=true, title='Simple Modal', class: className='', onClose, ...restProps }: SimpleModalProps = $props();
</script>
{#if open}
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
    <div class={InteractionFeedbackStyleManager.root('c-simple-modal bg-white rounded-lg p-5 w-full max-w-sm', className)} {...restProps}>
      <div class="flex items-center justify-between"><h3 class="font-semibold">{title}</h3><button type="button" onclick={onClose}>x</button></div>
      <p class="text-sm text-gray-600 mt-2">Simple modal content</p>
    </div>
  </div>
{/if}
