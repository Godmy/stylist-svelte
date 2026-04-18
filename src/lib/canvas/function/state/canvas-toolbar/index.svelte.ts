import type { CanvasToolbarDrawingOptions } from '$stylist/canvas/interface/slot/canvas-toolbar-drawing-options';
import type { CanvasToolbarDrawingTool } from '$stylist/canvas/type/enum/canvas-toolbar-drawing-tool';
import type { CanvasToolbarProps } from '$stylist/canvas/type/struct/canvas-toolbar/canvas-toolbar-props';

export function createCanvasToolbarState(
	props: CanvasToolbarProps,
	dispatch: (type: 'tool-change' | 'clear-canvas' | 'undo' | 'redo' | 'save', detail?: unknown) => void
) {
	let currentTool = $state<CanvasToolbarDrawingTool>(props.selectedTool ?? 'pen');
	let currentOptions = $state<CanvasToolbarDrawingOptions>({
		lineWidth: props.drawingOptions?.lineWidth ?? 2,
		strokeColor: props.drawingOptions?.strokeColor ?? 'black',
		tool: props.drawingOptions?.tool ?? props.selectedTool ?? 'pen',
		mode: props.drawingOptions?.mode ?? ((props.selectedTool ?? 'pen') === 'eraser' ? 'erase' : 'draw')
	});

	$effect(() => {
		currentTool = props.selectedTool ?? 'pen';
		currentOptions = {
			lineWidth: props.drawingOptions?.lineWidth ?? 2,
			strokeColor: props.drawingOptions?.strokeColor ?? 'black',
			tool: props.drawingOptions?.tool ?? props.selectedTool ?? 'pen',
			mode: props.drawingOptions?.mode ?? ((props.selectedTool ?? 'pen') === 'eraser' ? 'erase' : 'draw')
		};
	});

	function selectTool(tool: CanvasToolbarDrawingTool): void {
		currentTool = tool;
		currentOptions = { ...currentOptions, tool, mode: tool === 'eraser' ? 'erase' : 'draw' };
		dispatch('tool-change', { tool: currentTool, options: currentOptions });
	}

	function handleOptionsUpdate(options: CanvasToolbarDrawingOptions): void {
		currentOptions = { ...options };
		dispatch('tool-change', { tool: currentTool, options: currentOptions });
	}

	function clearCanvas(): void {
		dispatch('clear-canvas');
	}

	function undo(): void {
		dispatch('undo');
	}

	function redo(): void {
		dispatch('redo');
	}

	function save(): void {
		dispatch('save');
	}

	return {
		get currentTool() { return currentTool; },
		get currentOptions() { return currentOptions; },
		selectTool,
		handleOptionsUpdate,
		clearCanvas,
		undo,
		redo,
		save
	};
}

export default createCanvasToolbarState;
