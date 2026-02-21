<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction/interaction-forms';
  import type { DocumentPreviewProps } from '$stylist/design-system/props/interaction/interaction-forms';
  let { title='Document Preview', content='No content', format='text', class: className='', ...restProps }: DocumentPreviewProps = $props();
</script>
<div class={InteractionFormsStyleManager.root('c-document-preview border rounded-lg p-4', className)} {...restProps}>
  <div class="font-semibold mb-2">{title}</div>
  <div class="text-xs text-gray-500 mb-2">Format: {format}</div>
  <pre class="text-sm bg-gray-50 border rounded p-2 overflow-auto">{content}</pre>
</div>
