<script lang="ts">
	import { untrack } from 'svelte';
	import { DEFAULT_SCHEMA_TEXT } from '$stylist/erd/const/value/schema-text';
	import { EDIT_CANDIDATE_SCHEMA_TEXT } from '$stylist/erd/const/value/schema-text-candidate';
	import { schemaTextToDocument } from '$stylist/erd/function/transform/schema-text-to-document';
	import SchemaText from '$stylist/erd/component/organism/schema-text/index.svelte';
	import SchemaHeader from '$stylist/erd/component/organism/schema-header/index.svelte';
	import SchemaView from '$stylist/erd/component/organism/schema-view/index.svelte';
	import type { SchemaMode } from '$stylist/erd/type/alias/schema-mode';
	import type { SchemaProps } from '$stylist/erd/type/struct/schema-props';

	let {
		title = 'Schema',
		value = DEFAULT_SCHEMA_TEXT,
		zoom = 1,
		showRelations = true,
		highlightRelations = true,
		layout = 'grid',
		draggable = true
	}: SchemaProps = $props();

	// Each of these intentionally captures the prop only once (uncontrolled
	// widget: initial value from the prop, then locally editable via the
	// toolbar/text editor) -- untrack() makes that explicit instead of
	// tripping the "did you mean a closure?" state_referenced_locally warning.
	let liveSource = $state<string>(untrack(() => value));
	// Candidate pool for Mode: Edit -- see docs/chat/20260726/001-CLAUDE-ERD-EDIT.md.
	// Purely a format conversion of erd/data/md/schema/schema.md, nothing added
	// or removed yet.
	let editSource = $state<string>(EDIT_CANDIDATE_SCHEMA_TEXT);
	let currentZoom = $state(untrack(() => zoom));
	let relationsVisible = $state(untrack(() => showRelations));
	let relationHighlight = $state(untrack(() => highlightRelations));
	let currentLayout = $state(untrack(() => layout));
	let currentMode = $state<SchemaMode>('live');
	let textPanelVisible = $state(true);
	let fileInput: HTMLInputElement | undefined = $state();

	// Migrate = Live + Edit.selected once table selection exists (iteration 2/3
	// of the plan doc above). No selection UI yet, so it mirrors Live for now
	// rather than pretending to merge nothing meaningful.
	let activeSource = $derived(currentMode === 'edit' ? editSource : liveSource);
	let parseResult = $derived(schemaTextToDocument(activeSource));

	function clampZoom(nextZoom: number): number {
		return Math.min(1.8, Math.max(0.45, Number(nextZoom.toFixed(2))));
	}

	function importSchema(): void {
		fileInput?.click();
	}

	function exportSchema(): void {
		const blob = new Blob([activeSource], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');

		link.href = url;
		link.download = `schema.${currentMode}.erd.txt`;
		link.click();
		URL.revokeObjectURL(url);
	}

	async function handleFileImport(event: Event): Promise<void> {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];

		if (!file) {
			return;
		}

		const text = await file.text();

		if (currentMode === 'edit') {
			editSource = text;
		} else {
			liveSource = text;
		}

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

	<SchemaHeader
		{title}
		stats={{
			tables: parseResult.document.tables.length,
			relations: parseResult.document.dependencies.length,
			errors: parseResult.errors.length
		}}
		zoom={currentZoom}
		showRelations={relationsVisible}
		highlightRelations={relationHighlight}
		layout={currentLayout}
		mode={currentMode}
		{textPanelVisible}
		on:import={importSchema}
		on:export={exportSchema}
		on:zoom-in={() => (currentZoom = clampZoom(currentZoom + 0.1))}
		on:zoom-out={() => (currentZoom = clampZoom(currentZoom - 0.1))}
		on:zoom-reset={() => (currentZoom = 1)}
		on:layout-change={(event) => (currentLayout = event.detail.layout)}
		on:toggle-relations={(event) => (relationsVisible = event.detail.enabled)}
		on:toggle-highlight={(event) => (relationHighlight = event.detail.enabled)}
		on:mode-change={(event) => (currentMode = event.detail.mode)}
		on:toggle-text-panel={(event) => (textPanelVisible = event.detail.visible)}
	/>

	<div class={`schema__workspace ${textPanelVisible ? '' : 'schema__workspace--full'}`}>
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

		{#if textPanelVisible}
			<aside class="schema__editor">
				{#if currentMode === 'edit'}
					<SchemaText bind:value={editSource} />
				{:else}
					<SchemaText bind:value={liveSource} />
				{/if}
			</aside>
		{/if}
	</div>
</section>

<style>
	.schema {
		display: flex;
		flex-direction: column;
		min-width: 0;
		min-height: 0;
		height: 100%;
	}

	.schema__file-input {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}

	.schema__workspace {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.42fr);
		gap: 0;
		min-width: 0;
		min-height: 0;
		flex: 1;
		padding: 0.5rem 0;
	}

	.schema__workspace--full {
		grid-template-columns: minmax(0, 1fr);
	}

	.schema__editor,
	.schema__view {
		min-width: 0;
		min-height: 0;
	}

	.schema__editor {
		display: grid;
	}

	.schema__view {
		display: grid;
	}

	@media (max-width: 980px) {
		.schema__workspace {
			grid-template-columns: 1fr;
		}
	}
</style>
