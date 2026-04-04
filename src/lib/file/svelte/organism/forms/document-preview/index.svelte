<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
  import type { DocumentPreviewProps } from '$stylist/form/interface/component/interaction-forms/other';
  let { title='Document Preview', content='No content', format='text', class: className='', ...restProps }: DocumentPreviewProps = $props();
</script>
<div class={InteractionFormsStyleManager.root('c-document-preview border rounded-lg p-4', className)} {...restProps}>
  <div class="font-semibold mb-2">{title}</div>
  <div class="text-xs text-[var(--color-text-secondary)] mb-2">Format: {format}</div>
  <pre class="text-sm bg-[var(--color-background-secondary)] border rounded p-2 overflow-auto">{content}</pre>
</div>







