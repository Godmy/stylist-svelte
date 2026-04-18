<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
  import type { SlotDocumentPreview as DocumentPreviewProps } from '$stylist/form/interface/slot/document-preview';
  import { createDocumentPreviewState } from '$stylist/file/function/state/document-preview';
  let props: DocumentPreviewProps = $props();
  const state = createDocumentPreviewState(props);
  const { title: _title, content: _content, format: _format, class: _class, ...restProps } = props;
</script>
<div class={InteractionFormsStyleManager.root('c-document-preview border rounded-lg p-4', state.classes)} {...restProps}>
  <div class="font-semibold mb-2">{props.title ?? 'Document Preview'}</div>
  <div class="text-xs text-[var(--color-text-secondary)] mb-2">Format: {props.format ?? 'text'}</div>
  <pre class="text-sm bg-[var(--color-background-secondary)] border rounded p-2 overflow-auto">{props.content ?? 'No content'}</pre>
</div>







