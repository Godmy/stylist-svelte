<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { SchemaToolProps } from '$stylist/erd/type/struct/schema-tool-props';

	let dispatch = createEventDispatcher<{
		import: undefined;
		export: undefined;
		'zoom-in': undefined;
		'zoom-out': undefined;
		'zoom-reset': undefined;
		'layout-change': { layout: NonNullable<SchemaToolProps['layout']> };
		'toggle-relations': { enabled: boolean };
		'toggle-highlight': { enabled: boolean };
	}>();

	let {
		zoom = 1,
		showRelations = true,
		highlightRelations = true,
		layout = 'grid',
		canImport = true,
		canExport = true
	}: SchemaToolProps = $props();
</script>

<nav class="schema-tool" aria-label="Schema tools">
	<button
		type="button"
		aria-label="Import schema"
		title="Import schema"
		disabled={!canImport}
		onclick={() => dispatch('import')}
	>
		<Icon name="import" size={18} />
	</button>
	<button
		type="button"
		aria-label="Export schema"
		title="Export schema"
		disabled={!canExport}
		onclick={() => dispatch('export')}
	>
		<Icon name="export" size={18} />
	</button>
	<div class="schema-tool__separator"></div>
	<button type="button" aria-label="Zoom out" title="Zoom out" onclick={() => dispatch('zoom-out')}>
		<Icon name="zoom-out" size={18} />
	</button>
	<button
		type="button"
		class="schema-tool__value"
		aria-label="Reset zoom"
		title="Reset zoom"
		onclick={() => dispatch('zoom-reset')}
	>
		{Math.round(zoom * 100)}%
	</button>
	<button type="button" aria-label="Zoom in" title="Zoom in" onclick={() => dispatch('zoom-in')}>
		<Icon name="zoom-in" size={18} />
	</button>
	<div class="schema-tool__separator"></div>
	<label class="schema-tool__select" title="Layout">
		<span>Layout</span>
		<select
			aria-label="Layout"
			value={layout}
			onchange={(event) =>
				dispatch('layout-change', {
					layout: (event.currentTarget as HTMLSelectElement).value as NonNullable<
						SchemaToolProps['layout']
					>
				})}
		>
			<option value="grid">Grid</option>
			<option value="wide">Wide</option>
			<option value="columns">Columns</option>
			<option value="radial">Radial</option>
		</select>
	</label>
	<div class="schema-tool__separator"></div>
	<button
		type="button"
		class={showRelations ? 'schema-tool__button--active' : ''}
		aria-label="Show relations"
		title="Show relations"
		onclick={() => dispatch('toggle-relations', { enabled: !showRelations })}
	>
		<Icon name="link" size={18} />
	</button>
	<button
		type="button"
		class={highlightRelations ? 'schema-tool__button--active' : ''}
		aria-label="Highlight relations"
		title="Highlight relations"
		onclick={() => dispatch('toggle-highlight', { enabled: !highlightRelations })}
	>
		<Icon name="search" size={18} />
	</button>
</nav>

<style>
	.schema-tool {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem;
		padding: 0.55rem;
		border: 1px solid rgba(22, 31, 44, 0.12);
		border-radius: 0.5rem;
		background: #ffffff;
		box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
	}

	.schema-tool button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.35rem;
		min-height: 2.15rem;
		padding: 0 0.62rem;
		border: 1px solid rgba(22, 31, 44, 0.12);
		border-radius: 0.4rem;
		background: #f8fafc;
		color: #263244;
		cursor: pointer;
		font: inherit;
		font-size: 0.78rem;
	}

	.schema-tool__select {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		min-height: 2.15rem;
		padding: 0 0.62rem;
		border: 1px solid rgba(22, 31, 44, 0.12);
		border-radius: 0.4rem;
		background: #f8fafc;
		color: #263244;
		font-size: 0.78rem;
	}

	.schema-tool__select span {
		color: #5a6678;
	}

	.schema-tool__select select {
		min-width: 6.2rem;
		border: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}

	.schema-tool__value {
		min-width: 3.45rem !important;
		font-variant-numeric: tabular-nums;
	}

	.schema-tool button:hover:not(:disabled),
	.schema-tool__button--active {
		border-color: #4d92cf;
		background: #eaf3ff;
		color: #174a7c;
	}

	.schema-tool button:disabled {
		cursor: not-allowed;
		opacity: 0.45;
	}

	.schema-tool__separator {
		width: 1px;
		height: 1.75rem;
		background: rgba(22, 31, 44, 0.12);
	}
</style>
