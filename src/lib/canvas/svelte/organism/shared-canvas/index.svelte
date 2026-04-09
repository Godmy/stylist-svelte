<script lang="ts">
	import type { SharedCanvasContract } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-contract';
	import { Icon as BaseIcon } from '$stylist';
	import { ObjectManagerSharedCanvas } from '$stylist/canvas/class/object-manager/shared-canvas/index';
	import { createSharedCanvasState } from '$stylist/canvas/function/state/shared-canvas';
	import { exportCanvasImage } from '$stylist/canvas/function/script/canvas/export-image';
	import { getCanvasPointerPosition } from '$stylist/canvas/function/script/canvas/share/index';

	const contract: SharedCanvasContract = $props();
	const state = createSharedCanvasState(contract);

	let canvasRef: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;

	$effect(() => {
		state.syncFromProps(contract.objects ?? []);
	});

	$effect(() => {
		if (!canvasRef) return;
		ctx = canvasRef.getContext('2d');
		state.redrawCanvas(ctx, canvasRef);
	});

	$effect(() => {
		state.redrawCanvas(ctx, canvasRef);
	});

	function handleMouseDown(event: MouseEvent): void {
		if (!canvasRef) return;
		state.beginDrawing(getCanvasPointerPosition(event, canvasRef));
		state.redrawCanvas(ctx, canvasRef);
	}

	function handleMouseMove(event: MouseEvent): void {
		if (!canvasRef) return;
		state.updateDrawing(getCanvasPointerPosition(event, canvasRef));
		state.redrawCanvas(ctx, canvasRef);
	}

	function handleMouseUp(): void {
		state.endDrawing();
		state.redrawCanvas(ctx, canvasRef);
	}

</script>

<div class={state.containerClass} {...state.restProps}>
	{#if state.showToolbar}
		<div class={state.toolbarClass}>
			<div class={state.toolbarGroupClass}>
				{#each state.toolDefinitions as tool (tool.id)}
					<button
						type="button"
						class={state.toolButtonClass(tool.id)}
						onclick={() => state.selectTool(tool.id)}
						title={tool.title}
						aria-label={tool.title}
					>
						<BaseIcon name={tool.icon} class="h-4 w-4" />
					</button>
				{/each}
			</div>

			<div class={state.toolbarDividerClass}></div>

			<div class={state.toolbarGroupClass}>
				<label class={state.colorLabelClass}>
					<BaseIcon name={state.actionIcons.color} class="h-4 w-4 mr-1" />
					Color:
					<input
						type="color"
						class={state.colorInputClass}
						value={state.selectedColor}
						oninput={(event) => state.setSelectedColor((event.currentTarget as HTMLInputElement).value)}
						aria-label="Select color"
					/>
				</label>
			</div>

			<div class={state.toolbarDividerClass}></div>

			<div class={state.toolbarGroupClass}>
				<button
					type="button"
					class={state.actionButtonClass}
					onclick={state.undo}
					title="Undo"
					aria-label="Undo"
					disabled={state.undoStack.length === 0}
				>
					<BaseIcon name={state.actionIcons.undo} class="h-4 w-4" />
				</button>
				<button
					type="button"
					class={state.actionButtonClass}
					onclick={state.redo}
					title="Redo"
					aria-label="Redo"
					disabled={state.redoStack.length === 0}
				>
					<BaseIcon name={state.actionIcons.redo} class="h-4 w-4" />
				</button>
				<button
					type="button"
					class={state.actionButtonClass}
					onclick={state.deleteSelected}
					title="Delete Selected"
					aria-label="Delete Selected"
					disabled={state.localObjects.length === 0}
				>
					<BaseIcon name={state.actionIcons.delete} class="h-4 w-4" />
				</button>
				<button
					type="button"
					class={state.actionButtonClass}
					onclick={() => exportCanvasImage(canvasRef, ObjectManagerSharedCanvas.exportFilename)}
					title="Export Canvas"
					aria-label="Export Canvas"
				>
					<BaseIcon name={state.actionIcons.export} class="h-4 w-4" />
				</button>
			</div>
		</div>
	{/if}

	<div class={state.workspaceClass}>
		<div class={state.canvasPaneClass}>
			<canvas
				bind:this={canvasRef}
				width={state.width}
				height={state.height}
				class={state.canvasClass}
				onmousedown={handleMouseDown}
				onmousemove={handleMouseMove}
				onmouseup={handleMouseUp}
				onmouseleave={handleMouseUp}
			></canvas>

			{#if state.showUsers && contract.users && contract.users.length > 0}
				{#each contract.users as user}
					{#if user.cursorPosition && user.id !== contract.currentUserId}
						<div
							class={state.remoteCursorClass}
							style={`left: ${user.cursorPosition.x}px; top: ${user.cursorPosition.y}px; background-color: ${user.color};`}
							title={user.name}
							aria-label={`Cursor of ${user.name}`}
						></div>
					{/if}
				{/each}
			{/if}
		</div>

		{#if state.showUsers}
			<div class={state.userPanelClass}>
				<h4 class={state.userPanelTitleClass}>Collaborators</h4>
				<div class={state.userListClass}>
					{#each contract.users ?? [] as user}
						<div class={state.userItemClass}>
							<div
								class={state.userSwatchClass}
								style={`background-color: ${user.color}`}
								title={user.name}
								aria-label={user.name}
							></div>
							<span class={state.userNameClass}>{user.name}</span>
							{#if user.id === contract.currentUserId}
								<span class={state.currentUserClass}>(You)</span>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
