<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction/interaction-forms';
  import type { DocumentPreviewProps } from '$stylist/design-system/contracts/interaction/interaction-forms';
  let { title='Document Preview', content='No content', format='text', class: className='', ...restProps }: DocumentPreviewProps = $props();
</script>
<div class={InteractionFormsStyleManager.root('c-document-preview border rounded-lg p-4', className)} {...restProps}>
  <div class="font-semibold mb-2">{title}</div>
  <div class="text-xs text-[var(--color-text-secondary)] mb-2">Format: {format}</div>
  <pre class="text-sm bg-[var(--color-background-secondary)] border rounded p-2 overflow-auto">{content}</pre>
</div>




