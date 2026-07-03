<script lang="ts">
	import { DEFAULT_SCHEMA_TEXT } from '$stylist/erd/const/value/schema-text';
	import { schemaTextToDocument } from '$stylist/erd/function/transform/schema-text-to-document';
	import SchemaText from '$stylist/erd/component/organism/schema-text/index.svelte';
	import SchemaTool from '$stylist/erd/component/organism/schema-tool/index.svelte';
	import SchemaView from '$stylist/erd/component/organism/schema-view/index.svelte';
	import type { SchemaProps } from '$stylist/erd/type/struct/schema-props';

	let {
		value = DEFAULT_SCHEMA_TEXT,
		zoom = 1,
		showRelations = true,
		highlightRelations = true,
		layout = 'grid',
		draggable = true
	}: SchemaProps = $props();

	let source = $state(value);
	let currentZoom = $state(zoom);
	let relationsVisible = $state(showRelations);
	let relationHighlight = $state(highlightRelations);
	let currentLayout = $state(layout);
	let fileInput: HTMLInputElement | undefined = $state();
	let parseResult = $derived(schemaTextToDocument(source));

	function clampZoom(nextZoom: number): number {
		return Math.min(1.8, Math.max(0.45, Number(nextZoom.toFixed(2))));
	}

	function importSchema(): void {
		fileInput?.click();
	}

	function exportSchema(): void {
		const blob = new Blob([source], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');

		link.href = url;
		link.download = 'schema.erd.txt';
		link.click();
		URL.revokeObjectURL(url);
	}

	async function handleFileImport(event: Event): Promise<void> {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];

		if (!file) {
			return;
		}

		source = await file.text();
		input.value = '';
	}
</script>

<section class="schema">
	<input
		bind:this={fileInput}
		class="schema__file-input"
		type="file"
		accept=".txt,.schema,.erd,text/plain"
		onchange={handleFileImport}
	/>

	<header class="schema__toolbar">
		<SchemaTool
			zoom={currentZoom}
			showRelations={relationsVisible}
			highlightRelations={relationHighlight}
			layout={currentLayout}
			on:import={importSchema}
			on:export={exportSchema}
			on:zoom-in={() => (currentZoom = clampZoom(currentZoom + 0.1))}
			on:zoom-out={() => (currentZoom = clampZoom(currentZoom - 0.1))}
			on:zoom-reset={() => (currentZoom = 1)}
			on:layout-change={(event) => (currentLayout = event.detail.layout)}
			on:toggle-relations={(event) => (relationsVisible = event.detail.enabled)}
			on:toggle-highlight={(event) => (relationHighlight = event.detail.enabled)}
		/>
	</header>

	<div class="schema__workspace">
		<aside class="schema__editor">
			<SchemaText bind:value={source} />
		</aside>

		<div class="schema__view">
			<SchemaView
				document={parseResult.document}
				zoom={currentZoom}
				showRelations={relationsVisible}
				highlightRelations={relationHighlight}
				layout={currentLayout}
				{draggable}
			/>
		</div>
	</div>
</section>

<style>
	.schema {
		display: grid;
		gap: 0.75rem;
		min-width: 0;
		padding: 0.75rem;
		border: 1px solid rgba(22, 31, 44, 0.12);
		border-radius: 0.5rem;
		background: #f8fafc;
	}

	.schema__file-input {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}

	.schema__toolbar {
		display: flex;
		justify-content: flex-start;
	}

	.schema__workspace {
		display: grid;
		grid-template-columns: minmax(18rem, 0.42fr) minmax(0, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}

	.schema__editor,
	.schema__view {
		min-width: 0;
	}

	.schema__editor {
		display: grid;
	}

	@media (max-width: 980px) {
		.schema__workspace {
			grid-template-columns: 1fr;
		}
	}
</style>
