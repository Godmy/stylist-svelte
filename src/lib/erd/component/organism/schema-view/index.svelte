<script lang="ts">
	import SchemaDependency from '$stylist/erd/component/atom/schema-dependency/index.svelte';
	import SchemaTable from '$stylist/erd/component/molecule/schema-table/index.svelte';
	import type { RecipeErdSchemaView } from '$stylist/erd/interface/recipe/erd-schema-view';
	import createSchemaViewState from './state.svelte';

	let props: RecipeErdSchemaView = $props();
	const state = createSchemaViewState(props);
</script>

<section class="schema-view">
	<div
		class="schema-view__canvas"
		style={`width:${state.canvasSize.width}px; min-height:${state.canvasSize.height}px; transform: scale(${state.zoom});`}
	>
		{#if state.showRelations}
			<svg
				class="schema-view__relations"
				width={state.canvasSize.width}
				height={state.canvasSize.height}
				aria-hidden="true"
			>
				{#each state.document.dependencies as dependency (dependency.id)}
					{@const points = state.getDependencyPoints(dependency)}
					{#if points}
						<SchemaDependency
							{dependency}
							x1={points.x1}
							y1={points.y1}
							x2={points.x2}
							y2={points.y2}
							active={state.highlightRelations}
						/>
					{/if}
				{/each}
			</svg>
		{/if}

		{#each state.document.tables as table (table.id)}
			{@const position = state.positionByTable.get(table.id)}
			{#if position}
				<div
					class={`schema-view__table ${state.draggable ? 'schema-view__table--draggable' : ''} ${state.draggedTableId === table.id ? 'schema-view__table--dragging' : ''}`}
					style={`left:${position.x}px; top:${position.y}px;`}
					role="group"
					aria-roledescription={state.draggable ? 'draggable table' : 'table'}
					aria-label={`Table ${table.name}`}
					onpointerdown={(event) => state.startTableDrag(event, table.id)}
					onpointermove={(event) => state.moveTable(event, table.id)}
					onpointerup={(event) => state.stopTableDrag(event, table.id)}
					onpointercancel={(event) => state.stopTableDrag(event, table.id)}
				>
					<SchemaTable
						{table}
						active={state.activeTableId === table.id}
						relatedFieldIds={state.highlightRelations ? state.relatedFieldIds : []}
					/>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	.schema-view {
		height: 100%;
		min-height: 560px;
		overflow: auto;
		border: 1px solid var(--color-border-primary, rgba(22, 31, 44, 0.12));
		border-radius: 0.5rem;
		background:
			linear-gradient(
					color-mix(in srgb, var(--color-border-primary, #22314c) 55%, transparent) 1px,
					transparent 1px
				)
				0 0,
			linear-gradient(
					90deg,
					color-mix(in srgb, var(--color-border-primary, #22314c) 55%, transparent) 1px,
					transparent 1px
				)
				0 0,
			var(--color-background-secondary, #eef3f8);
		background-size: 32px 32px;
	}

	.schema-view__canvas {
		position: relative;
		transform-origin: top left;
	}

	.schema-view__relations {
		position: absolute;
		inset: 0;
		overflow: visible;
		pointer-events: none;
	}

	.schema-view__table {
		position: absolute;
		user-select: none;
		touch-action: none;
	}

	.schema-view__table--draggable {
		cursor: grab;
	}

	.schema-view__table--dragging {
		z-index: 2;
		cursor: grabbing;
	}
</style>
