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
		layout = 'grid',
		activeTableId = '',
		draggable = true
	}: SchemaViewProps = $props();

	const tableWidth = 260;
	const columnGap = 80;
	const rowGap = 72;
	const minCanvasWidth = 4800;
	const minCanvasHeight = 3200;
	const canvasPadding = 720;
	const tableHeaderHeight = 48;
	const tableFieldHeight = 37;

	let positions = $state<SchemaTablePosition[]>([]);
	let documentLayoutKey = $state('');
	let activeLayout = $state(layout);
	let draggedTableId = $state<string | null>(null);
	let dragStartClientX = $state(0);
	let dragStartClientY = $state(0);
	let dragStartX = $state(0);
	let dragStartY = $state(0);

	const positionByTable = $derived(
		new Map(positions.map((position) => [position.tableId, position]))
	);
	const relatedFieldIds = $derived(createRelatedFieldIds(document.dependencies));
	const canvasSize = $derived(createCanvasSize(positions));

	$effect(() => {
		const nextLayoutKey = document.tables
			.map((table) => `${table.id}:${table.fields.length}`)
			.join('|')
			.concat(`:${layout}`);

		if (nextLayoutKey === documentLayoutKey) {
			return;
		}

		positions = layout === activeLayout ? mergePositions() : createPositions(document.tables.length);
		documentLayoutKey = nextLayoutKey;
		activeLayout = layout;
		draggedTableId = null;
	});

	function createPositions(count: number): SchemaTablePosition[] {
		if (layout === 'wide') {
			return createGridPositions(count, Math.max(1, Math.ceil(Math.sqrt(count * 2.2))), 96, 96);
		}

		if (layout === 'columns') {
			return createGridPositions(count, Math.min(6, Math.max(1, Math.ceil(count / 14))), 180, 58);
		}

		if (layout === 'radial') {
			return createRadialPositions(count);
		}

		return createGridPositions(count, Math.max(1, Math.ceil(Math.sqrt(count))), columnGap, rowGap);
	}

	function createGridPositions(
		count: number,
		columns: number,
		horizontalGap: number,
		verticalGap: number
	): SchemaTablePosition[] {
		return document.tables.map((table, index) => {
			const column = index % columns;
			const row = Math.floor(index / columns);
			const height = createTableHeight(table.fields.length);

			return {
				tableId: table.id,
				x: 56 + column * (tableWidth + horizontalGap),
				y: 56 + row * (height + verticalGap),
				width: tableWidth,
				height
			};
		});
	}

	function createRadialPositions(count: number): SchemaTablePosition[] {
		const firstRingCapacity = 10;
		const ringGap = 520;
		const maxRing = Math.max(0, Math.floor((count - 1) / firstRingCapacity));
		const centerX = Math.max(minCanvasWidth / 2, 900 + maxRing * ringGap);
		const centerY = Math.max(minCanvasHeight / 2, 900 + maxRing * ringGap);

		return document.tables.map((table, index) => {
			const height = createTableHeight(table.fields.length);
			const ring = Math.floor(index / firstRingCapacity);
			const ringStart = ring * firstRingCapacity;
			const ringCapacity = firstRingCapacity + ring * 8;
			const ringIndex = index - ringStart;
			const radius = 420 + ring * ringGap;
			const angle = (Math.PI * 2 * ringIndex) / ringCapacity - Math.PI / 2;

			if (index === 0) {
				return {
					tableId: table.id,
					x: centerX - tableWidth / 2,
					y: centerY - height / 2,
					width: tableWidth,
					height
				};
			}

			return {
				tableId: table.id,
				x: centerX + Math.cos(angle) * radius - tableWidth / 2,
				y: centerY + Math.sin(angle) * radius - height / 2,
				width: tableWidth,
				height
			};
		});
	}

	function createTableHeight(fieldCount: number): number {
		return tableHeaderHeight + fieldCount * tableFieldHeight;
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

	function createCanvasSize(currentPositions: readonly SchemaTablePosition[]): {
		width: number;
		height: number;
	} {
		const rightEdge = Math.max(
			0,
			...currentPositions.map((position) => position.x + position.width)
		);
		const bottomEdge = Math.max(
			0,
			...currentPositions.map((position) => position.y + position.height)
		);

		return {
			width: Math.max(minCanvasWidth, rightEdge + canvasPadding),
			height: Math.max(minCanvasHeight, bottomEdge + canvasPadding)
		};
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
		const nextX = clamp(dragStartX + deltaX, 0, canvasSize.width - position.width);
		const nextY = clamp(dragStartY + deltaY, 0, canvasSize.height - position.height);

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
	<div
		class="schema-view__canvas"
		style={`width:${canvasSize.width}px; min-height:${canvasSize.height}px; transform: scale(${zoom});`}
	>
		{#if showRelations}
			<svg
				class="schema-view__relations"
				width={canvasSize.width}
				height={canvasSize.height}
				aria-hidden="true"
			>
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
