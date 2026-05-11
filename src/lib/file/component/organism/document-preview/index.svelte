<script lang="ts">
	import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
	import type { SlotDocumentPreview as DocumentPreviewProps } from '$stylist/form/interface/slot/document-preview';
	import { createDocumentPreviewState } from '$stylist/file/function/state/document-preview';
	let props: DocumentPreviewProps = $props();
	const state = createDocumentPreviewState(props);
	const { title: _title, content: _content, format: _format, class: _class, ...restProps } = props;
</script>

<div
	class={InteractionFormsStyleManager.root(
		'c-document-preview rounded-lg border p-4',
		state.classes
	)}
	{...restProps}
>
	<div class="mb-2 font-semibold">{props.title ?? 'Document Preview'}</div>
	<div class="mb-2 text-xs text-[var(--color-text-secondary)]">
		Format: {props.format ?? 'text'}
	</div>
	<pre
		class="overflow-auto rounded border bg-[var(--color-background-secondary)] p-2 text-sm">{props.content ??
			'No content'}</pre>
</div>
