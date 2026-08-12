<script lang="ts">
	import SchemaDependency from '$stylist/erd/component/atom/schema-dependency/index.svelte';
	import SchemaTable from '$stylist/erd/component/molecule/schema-table/index.svelte';
	import type { SchemaDependency as SchemaDependencyData } from '$stylist/erd/type/object/schema-dependency';
	import type { SchemaTablePosition } from '$stylist/erd/type/object/schema-table-position';
	import type { SlotErdView } from '$stylist/erd/interface/slot/erd-view';

	let {
		document,
		zoom = 1,
		showRelations = true,
		highlightRelations = true,
		layout = 'grid',
		activeTableId = '',
		draggable = true
	}: SlotErdView = $props();

	const tableWidth = 260;
	const columnGap = 110;
	const rowGap = 90;
	// A floor, not a target: keeps tiny documents from collapsing to near-zero
	// canvas. Previously fixed at 4800x3200 regardless of content, which for a
	// typical (non-demo-scale) document left most of the canvas empty -- the
	// default (0,0) scroll position then showed blank space instead of the
	// diagram, and radial's center (tied to this same minimum) landed well
	// off to the side of the visible viewport. canvasPadding is extra slack
	// beyond the auto-computed layout bounds specifically so there's room to
	// drag tables around -- a freeform diagram needs more than just enough
	// space for its own initial layout.
	const minCanvasWidth = 2600;
	const minCanvasHeight = 1700;
	const canvasPadding = 480;
	const tableHeaderHeight = 48;
	const tableFieldHeight = 37;

	let positions = $state<SchemaTablePosition[]>([]);
	let documentLayoutKey = $state('');
	// Seeded empty (not from the `layout` prop) so it never equals `layout` on
	// the first effect run -- that run always takes the createPositions()
	// branch, which is equivalent to mergePositions() while `positions` is
	// still empty anyway. Avoids capturing a reactive prop's value into local
	// $state at declaration time (state_referenced_locally).
	let activeLayout = $state('');
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
			return resolveOverlaps(
				createGridPositions(count, Math.max(1, Math.ceil(Math.sqrt(count * 2.2))), 140, 130)
			);
		}

		if (layout === 'columns') {
			return resolveOverlaps(
				createGridPositions(count, Math.min(6, Math.max(1, Math.ceil(count / 14))), 240, 110)
			);
		}

		if (layout === 'radial') {
			return resolveOverlaps(createRadialPositions(count));
		}

		return resolveOverlaps(
			createGridPositions(count, Math.max(1, Math.ceil(Math.sqrt(count))), columnGap, rowGap)
		);
	}

	// Final safety net on top of the per-layout math above: pushes any two
	// still-overlapping cards apart along whichever axis needs the smaller
	// nudge, iterating until stable. The per-layout functions get the common
	// cases right on their own, but closed-form angle/row math can't fully
	// account for arbitrarily-tall cards (e.g. a table with 20+ fields next
	// to one with 2) without this -- a card's height can intrude on a
	// neighbor's space in ways a simple arc-length or row-height formula
	// doesn't predict at every angle.
	function resolveOverlaps(items: SchemaTablePosition[]): SchemaTablePosition[] {
		const result = items.map((item) => ({ ...item }));
		const gap = 24;
		const maxIterations = 200;

		for (let iteration = 0; iteration < maxIterations; iteration += 1) {
			let moved = false;

			for (let i = 0; i < result.length; i += 1) {
				for (let j = i + 1; j < result.length; j += 1) {
					const a = result[i];
					const b = result[j];

					const overlapX =
						Math.min(a.x + a.width + gap, b.x + b.width + gap) - Math.max(a.x, b.x);
					const overlapY =
						Math.min(a.y + a.height + gap, b.y + b.height + gap) - Math.max(a.y, b.y);

					if (overlapX <= 0 || overlapY <= 0) {
						continue;
					}

					moved = true;

					const aCenterX = a.x + a.width / 2;
					const aCenterY = a.y + a.height / 2;
					const bCenterX = b.x + b.width / 2;
					const bCenterY = b.y + b.height / 2;

					if (overlapX < overlapY) {
						const push = overlapX / 2 + 1;
						if (aCenterX <= bCenterX) {
							a.x -= push;
							b.x += push;
						} else {
							a.x += push;
							b.x -= push;
						}
					} else {
						const push = overlapY / 2 + 1;
						if (aCenterY <= bCenterY) {
							a.y -= push;
							b.y += push;
						} else {
							a.y += push;
							b.y -= push;
						}
					}
				}
			}

			if (!moved) {
				break;
			}
		}

		const minX = Math.min(0, ...result.map((item) => item.x));
		const minY = Math.min(0, ...result.map((item) => item.y));

		if (minX < 0 || minY < 0) {
			return result.map((item) => ({ ...item, x: item.x - minX + 40, y: item.y - minY + 40 }));
		}

		return result;
	}

	function createGridPositions(
		count: number,
		columns: number,
		horizontalGap: number,
		verticalGap: number
	): SchemaTablePosition[] {
		const heights = document.tables.map((table) => createTableHeight(table.fields.length));
		const rowCount = Math.max(1, Math.ceil(count / columns));

		// Row Y must come from the tallest card actually placed in each
		// preceding row, not from each card's own height -- using "this
		// table's height" for `row * height` (the previous formula) only
		// happened to work when every card was the same height. Real tables
		// have wildly different field counts, so rows silently overlapped.
		const rowHeights = new Array(rowCount).fill(0);
		document.tables.forEach((_, index) => {
			const row = Math.floor(index / columns);
			rowHeights[row] = Math.max(rowHeights[row], heights[index]);
		});

		const rowY = new Array(rowCount).fill(56);
		for (let row = 1; row < rowCount; row += 1) {
			rowY[row] = rowY[row - 1] + rowHeights[row - 1] + verticalGap;
		}

		return document.tables.map((table, index) => {
			const column = index % columns;
			const row = Math.floor(index / columns);

			return {
				tableId: table.id,
				x: 56 + column * (tableWidth + horizontalGap),
				y: rowY[row],
				width: tableWidth,
				height: heights[index]
			};
		});
	}

	function createRadialPositions(count: number): SchemaTablePosition[] {
		const firstRingCapacity = 8;
		const ringCapacityGrowth = 6;
		const arcGap = 70; // breathing room between cards sharing a ring
		const ringGap = 90; // radial breathing room between rings
		const minRadius = 320;

		const heights = document.tables.map((table) => createTableHeight(table.fields.length));

		// Assign tables to rings first (same growth scheme as before), then size
		// each ring from what's actually in it.
		const ringAssignments: number[][] = [];
		{
			let index = 0;
			let ring = 0;
			while (index < count) {
				const capacity = firstRingCapacity + ring * ringCapacityGrowth;
				const slice: number[] = [];
				for (let slot = 0; slot < capacity && index < count; slot += 1, index += 1) {
					slice.push(index);
				}
				ringAssignments.push(slice);
				ring += 1;
			}
		}

		// A ring's radius must be large enough for two independent reasons:
		// (1) enough arc length per slot that cards on the same ring don't
		// collide sideways, and (2) enough clearance from the previous ring's
		// tallest card that rings don't collide radially. The previous version
		// used a single fixed radius-per-ring regardless of how many tables
		// were on it or how tall they were, which is what caused overlaps.
		const ringRadius: number[] = [];
		let previousOuterEdge = 0;
		ringAssignments.forEach((indices, ring) => {
			const maxHeightInRing = Math.max(...indices.map((index) => heights[index]));
			const arcRequiredRadius = ((tableWidth + arcGap) * indices.length) / (2 * Math.PI);
			const clearanceRadius =
				ring === 0 ? 0 : previousOuterEdge + maxHeightInRing / 2 + ringGap;
			const radius = Math.max(arcRequiredRadius, clearanceRadius, minRadius);

			ringRadius.push(radius);
			previousOuterEdge = radius + maxHeightInRing / 2;
		});

		const center = previousOuterEdge + tableWidth / 2 + canvasPadding / 2;
		const positions: SchemaTablePosition[] = [];

		ringAssignments.forEach((indices, ring) => {
			const radius = ringRadius[ring];
			const capacity = indices.length;

			indices.forEach((tableIndex, slot) => {
				const table = document.tables[tableIndex];
				const height = heights[tableIndex];
				const angle = (Math.PI * 2 * slot) / capacity - Math.PI / 2;

				positions.push({
					tableId: table.id,
					x: center + Math.cos(angle) * radius - tableWidth / 2,
					y: center + Math.sin(angle) * radius - height / 2,
					width: tableWidth,
					height
				});
			});
		});

		return positions;
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
					role="group"
					aria-roledescription={draggable ? 'draggable table' : 'table'}
					aria-label={`Table ${table.name}`}
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
