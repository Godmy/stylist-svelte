<script lang="ts">
	import SchemaDependency from '$stylist/erd/component/atom/schema-dependency/index.svelte';
	import SchemaTable from '$stylist/erd/component/molecule/schema-table/index.svelte';
	import type { SchemaDependency as SchemaDependencyData } from '$stylist/erd/type/struct/schema-dependency';
	import type { SchemaTablePosition } from '$stylist/erd/type/struct/schema-table-position';
	import type { SchemaViewProps } from '$stylist/erd/type/struct/schema-view-props';

	let {
		document,
		zoom = 1,
		showRelations = true,
		highlightRelations = true,
		activeTableId = '',
		draggable = true
	}: SchemaViewProps = $props();

	const tableWidth = 260;
	const columnGap = 80;
	const rowGap = 72;
	const canvasWidth = 1280;
	const canvasHeight = 820;
	const tableHeaderHeight = 48;
	const tableFieldHeight = 37;

	let positions = $state<SchemaTablePosition[]>([]);
	let documentLayoutKey = $state('');
	let draggedTableId = $state<string | null>(null);
	let dragStartClientX = $state(0);
	let dragStartClientY = $state(0);
	let dragStartX = $state(0);
	let dragStartY = $state(0);

	const positionByTable = $derived(
		new Map(positions.map((position) => [position.tableId, position]))
	);
	const relatedFieldIds = $derived(createRelatedFieldIds(document.dependencies));

	$effect(() => {
		const nextLayoutKey = document.tables
			.map((table) => `${table.id}:${table.fields.length}`)
			.join('|');

		if (nextLayoutKey === documentLayoutKey) {
			return;
		}

		positions = mergePositions();
		documentLayoutKey = nextLayoutKey;
		draggedTableId = null;
	});

	function createPositions(count: number): SchemaTablePosition[] {
		const columns = Math.max(1, Math.ceil(Math.sqrt(count)));

		return document.tables.map((table, index) => {
			const column = index % columns;
			const row = Math.floor(index / columns);

			return {
				tableId: table.id,
				x: 32 + column * (tableWidth + columnGap),
				y: 32 + row * (210 + rowGap),
				width: tableWidth,
				height: 160 + table.fields.length * 36
			};
		});
	}

	function mergePositions(): SchemaTablePosition[] {
		const generatedPositions = createPositions(document.tables.length);
		const previousPositions = new Map(positions.map((position) => [position.tableId, position]));

		return generatedPositions.map((position) => {
			const previousPosition = previousPositions.get(position.tableId);

			if (!previousPosition) {
				return position;
			}

			return {
				...position,
				x: previousPosition.x,
				y: previousPosition.y
			};
		});
	}

	function clamp(value: number, min: number, max: number): number {
		return Math.min(max, Math.max(min, value));
	}

	function createRelatedFieldIds(dependencies: readonly SchemaDependencyData[]): string[] {
		return Array.from(
			new Set(
				dependencies.flatMap((dependency) => [
					`${dependency.sourceTable}.${dependency.sourceField}`,
					`${dependency.targetTable}.${dependency.targetField}`
				])
			)
		);
	}

	function getDependencyPoints(dependency: SchemaDependencyData) {
		const source = positionByTable.get(dependency.sourceTable);
		const target = positionByTable.get(dependency.targetTable);
		const sourceTable = document.tables.find((table) => table.id === dependency.sourceTable);
		const targetTable = document.tables.find((table) => table.id === dependency.targetTable);

		if (!source || !target || !sourceTable || !targetTable) {
			return null;
		}

		const sourceFieldIndex = Math.max(
			0,
			sourceTable.fields.findIndex((field) => field.id === `${dependency.sourceTable}.${dependency.sourceField}`)
		);
		const targetFieldIndex = Math.max(
			0,
			targetTable.fields.findIndex((field) => field.id === `${dependency.targetTable}.${dependency.targetField}`)
		);
		const sourceCenterX = source.x + source.width / 2;
		const targetCenterX = target.x + target.width / 2;
		const sourceX = sourceCenterX <= targetCenterX ? source.x + source.width : source.x;
		const targetX = sourceCenterX <= targetCenterX ? target.x : target.x + target.width;

		return {
			x1: sourceX,
			y1: source.y + tableHeaderHeight + sourceFieldIndex * tableFieldHeight + tableFieldHeight / 2,
			x2: targetX,
			y2: target.y + tableHeaderHeight + targetFieldIndex * tableFieldHeight + tableFieldHeight / 2
		};
	}

	function startTableDrag(event: PointerEvent, tableId: string): void {
		if (!draggable || event.button !== 0) {
			return;
		}

		const position = positionByTable.get(tableId);
		if (!position) {
			return;
		}

		event.preventDefault();
		draggedTableId = tableId;
		dragStartClientX = event.clientX;
		dragStartClientY = event.clientY;
		dragStartX = position.x;
		dragStartY = position.y;
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
	}

	function moveTable(event: PointerEvent, tableId: string): void {
		if (!draggable || draggedTableId !== tableId) {
			return;
		}

		const position = positionByTable.get(tableId);
		if (!position) {
			return;
		}

		const deltaX = (event.clientX - dragStartClientX) / zoom;
		const deltaY = (event.clientY - dragStartClientY) / zoom;
		const nextX = clamp(dragStartX + deltaX, 0, canvasWidth - position.width);
		const nextY = clamp(dragStartY + deltaY, 0, canvasHeight - position.height);

		positions = positions.map((entry) =>
			entry.tableId === tableId
				? {
						...entry,
						x: nextX,
						y: nextY
					}
				: entry
		);
	}

	function stopTableDrag(event: PointerEvent, tableId: string): void {
		if (draggedTableId !== tableId) {
			return;
		}

		if ((event.currentTarget as HTMLElement).hasPointerCapture(event.pointerId)) {
			(event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
		}

		draggedTableId = null;
	}
</script>

<section class="schema-view">
	<div class="schema-view__canvas" style={`transform: scale(${zoom});`}>
		{#if showRelations}
			<svg class="schema-view__relations" aria-hidden="true">
				{#each document.dependencies as dependency (dependency.id)}
					{@const points = getDependencyPoints(dependency)}
					{#if points}
						<SchemaDependency
							{dependency}
							x1={points.x1}
							y1={points.y1}
							x2={points.x2}
							y2={points.y2}
							active={highlightRelations}
						/>
					{/if}
				{/each}
			</svg>
		{/if}

		{#each document.tables as table (table.id)}
			{@const position = positionByTable.get(table.id)}
			{#if position}
				<div
					class={`schema-view__table ${draggable ? 'schema-view__table--draggable' : ''} ${draggedTableId === table.id ? 'schema-view__table--dragging' : ''}`}
					style={`left:${position.x}px; top:${position.y}px;`}
					onpointerdown={(event) => startTableDrag(event, table.id)}
					onpointermove={(event) => moveTable(event, table.id)}
					onpointerup={(event) => stopTableDrag(event, table.id)}
					onpointercancel={(event) => stopTableDrag(event, table.id)}
				>
					<SchemaTable
						{table}
						active={activeTableId === table.id}
						relatedFieldIds={highlightRelations ? relatedFieldIds : []}
					/>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	.schema-view {
		min-height: 560px;
		overflow: auto;
		border: 1px solid rgba(22, 31, 44, 0.12);
		border-radius: 0.5rem;
		background:
			linear-gradient(rgba(22, 31, 44, 0.06) 1px, transparent 1px),
			linear-gradient(90deg, rgba(22, 31, 44, 0.06) 1px, transparent 1px),
			#eef3f8;
		background-size: 32px 32px;
	}

	.schema-view__canvas {
		position: relative;
		width: 1280px;
		min-height: 820px;
		transform-origin: top left;
	}

	.schema-view__relations {
		position: absolute;
		inset: 0;
		width: 1280px;
		height: 820px;
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
