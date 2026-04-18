import { ObjectManagerSharedCanvas } from '$stylist/canvas/class/object-manager/shared-canvas';
import { StyleManagerSharedCanvas } from '$stylist/canvas/class/style-manager/shared-canvas';
import {
	cloneCanvasObjects,
	createDraftCanvasObject,
	drawCanvasObjects,
	finalizeDraftCanvasObject,
	hitTestCanvasObject,
	updateDraftCanvasObject
} from '$stylist/canvas/function/script/canvas/share/index';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';
import type { SharedCanvasPoint } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-point';
import type { SharedCanvasTool } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-tool';
import type { SharedCanvasContract } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-contract';

export function createSharedCanvasState(contract: SharedCanvasContract) {
	let selectedTool = $state<SharedCanvasTool>('select');
	let selectedColor = $state(
		contract.users?.find(u => u.id === contract.currentUserId)?.color ?? 'var(--color-primary-500)'
	);
	let isDrawing = $state(false);
	let startPoint = $state<SharedCanvasPoint>({ x: 0, y: 0 });
	let currentPoint = $state<SharedCanvasPoint>({ x: 0, y: 0 });
	let currentObject = $state<CanvasObject | null>(null);
	let selectedObjectId = $state<string | null>(null);
	let localObjects = $state<CanvasObject[]>(cloneCanvasObjects(contract.objects ?? []));
	let undoStack = $state<CanvasObject[][]>([]);
	let redoStack = $state<CanvasObject[][]>([]);

	const width = $derived(contract.width ?? 800);
	const height = $derived(contract.height ?? 600);
	const users = $derived(contract.users ?? []);
	const showUsers = $derived(contract.showUsers ?? true);
	const showToolbar = $derived(contract.showToolbar ?? true);
	const restProps = $derived.by(() => ObjectManagerSharedCanvas.getRestProps(contract));

	const containerClass = $derived(
		StyleManagerSharedCanvas.getContainerClass(
			contract.variant ?? 'default',
			contract.size,
			mergeClassNames(contract.class)
		)
	);
	const toolbarClass = $derived(StyleManagerSharedCanvas.getToolbarClass(contract.toolbarClass));
	const canvasClass = $derived(StyleManagerSharedCanvas.getCanvasClass(contract.canvasClass));
	const toolDefinitions = $derived(ObjectManagerSharedCanvas.toolDefinitions);
	const toolbarGroupClass = $derived(StyleManagerSharedCanvas.getToolbarGroupClass());
	const toolbarDividerClass = $derived(StyleManagerSharedCanvas.getToolbarDividerClass());
	const colorLabelClass = $derived(StyleManagerSharedCanvas.getColorLabelClass());
	const colorInputClass = $derived(StyleManagerSharedCanvas.getColorInputClass());
	const workspaceClass = $derived(StyleManagerSharedCanvas.getWorkspaceClass());
	const canvasPaneClass = $derived(StyleManagerSharedCanvas.getCanvasPaneClass());
	const remoteCursorClass = $derived(StyleManagerSharedCanvas.getRemoteCursorClass());
	const userPanelClass = $derived(StyleManagerSharedCanvas.getUserPanelClass());
	const userPanelTitleClass = $derived(StyleManagerSharedCanvas.getUserPanelTitleClass());
	const userListClass = $derived(StyleManagerSharedCanvas.getUserListClass());
	const userItemClass = $derived(StyleManagerSharedCanvas.getUserItemClass());
	const userSwatchClass = $derived(StyleManagerSharedCanvas.getUserSwatchClass());
	const userNameClass = $derived(StyleManagerSharedCanvas.getUserNameClass());
	const currentUserClass = $derived(StyleManagerSharedCanvas.getCurrentUserClass());
	const toolButtonClass = $derived.by(() => (tool: SharedCanvasTool) =>
		StyleManagerSharedCanvas.getToolButtonClass(selectedTool === tool)
	);
	const actionButtonClass = $derived(StyleManagerSharedCanvas.getActionButtonClass());
	const actionIcons = $derived(ObjectManagerSharedCanvas.actionIcons);

	function syncFromProps(nextObjects: readonly CanvasObject[] = []): void {
		localObjects = cloneCanvasObjects(nextObjects);
		undoStack = [];
		redoStack = [];
		selectedObjectId = null;
		currentObject = null;
	}

	function redrawCanvas(
		ctx: CanvasRenderingContext2D | null | undefined,
		canvas: HTMLCanvasElement | null | undefined
	): void {
		if (!ctx || !canvas) return;

		const objects = currentObject ? [...localObjects, currentObject] : localObjects;
		drawCanvasObjects(ctx, canvas, objects, selectedObjectId);
	}

	function selectTool(tool: SharedCanvasTool): void {
		selectedTool = tool;
	}

	function setSelectedColor(color: string): void {
		selectedColor = color;
	}

	function beginDrawing(point: SharedCanvasPoint): void {
		startPoint = point;
		currentPoint = point;

		if (selectedTool === 'select') {
			selectedObjectId = hitTestCanvasObject(localObjects, point)?.id ?? null;
			return;
		}

		const draft = createDraftCanvasObject(
			selectedTool,
			point,
			selectedColor,
			contract.currentUserId
		);

		if (!draft) return;

		isDrawing = true;
		currentObject = draft;
	}

	function updateDrawing(point: SharedCanvasPoint): void {
		if (!isDrawing || !currentObject) return;

		currentPoint = point;
		currentObject = updateDraftCanvasObject(currentObject, selectedTool, startPoint, point);
	}

	function endDrawing(): void {
		if (!isDrawing || !currentObject) return;

		const nextObject = finalizeDraftCanvasObject(
			currentObject,
			selectedTool,
			startPoint,
			currentPoint
		);

		isDrawing = false;
		currentObject = null;
		commitObjects([...localObjects, nextObject], 'add', nextObject);
		selectedObjectId = nextObject.id;
	}

	function commitObjects(
		nextObjects: CanvasObject[],
		change: 'add' | 'update' | 'delete',
		payload?: CanvasObject | string
	): void {
		undoStack = [...undoStack, cloneCanvasObjects(localObjects)];
		redoStack = [];
		localObjects = cloneCanvasObjects(nextObjects);

		if (change === 'add' && payload && typeof payload !== 'string') {
			contract.onObjectAdd?.(payload);
		} else if (change === 'update' && payload && typeof payload !== 'string') {
			contract.onObjectUpdate?.(payload);
		} else if (change === 'delete' && typeof payload === 'string') {
			contract.onObjectDelete?.(payload);
		}
	}

	function deleteSelected(): void {
		const targetId = selectedObjectId ?? localObjects[localObjects.length - 1]?.id;
		if (!targetId) return;

		commitObjects(
			localObjects.filter((object) => object.id !== targetId),
			'delete',
			targetId
		);
		selectedObjectId = null;
	}

	function undo(): void {
		const previous = undoStack[undoStack.length - 1];
		if (!previous) return;

		redoStack = [...redoStack, cloneCanvasObjects(localObjects)];
		undoStack = undoStack.slice(0, -1);
		localObjects = cloneCanvasObjects(previous);
		selectedObjectId = null;
	}

	function redo(): void {
		const next = redoStack[redoStack.length - 1];
		if (!next) return;

		undoStack = [...undoStack, cloneCanvasObjects(localObjects)];
		redoStack = redoStack.slice(0, -1);
		localObjects = cloneCanvasObjects(next);
		selectedObjectId = null;
	}

	return {
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get users() {
			return users;
		},
		get showUsers() {
			return showUsers;
		},
		get showToolbar() {
			return showToolbar;
		},
		get restProps() {
			return restProps;
		},
		get selectedTool() {
			return selectedTool;
		},
		get selectedColor() {
			return selectedColor;
		},
		get localObjects() {
			return localObjects;
		},
		get undoStack() {
			return undoStack;
		},
		get redoStack() {
			return redoStack;
		},
		get containerClass() {
			return containerClass;
		},
		get toolbarClass() {
			return toolbarClass;
		},
		get canvasClass() {
			return canvasClass;
		},
		get toolDefinitions() {
			return toolDefinitions;
		},
		get toolbarGroupClass() {
			return toolbarGroupClass;
		},
		get toolbarDividerClass() {
			return toolbarDividerClass;
		},
		get colorLabelClass() {
			return colorLabelClass;
		},
		get colorInputClass() {
			return colorInputClass;
		},
		get workspaceClass() {
			return workspaceClass;
		},
		get canvasPaneClass() {
			return canvasPaneClass;
		},
		get remoteCursorClass() {
			return remoteCursorClass;
		},
		get userPanelClass() {
			return userPanelClass;
		},
		get userPanelTitleClass() {
			return userPanelTitleClass;
		},
		get userListClass() {
			return userListClass;
		},
		get userItemClass() {
			return userItemClass;
		},
		get userSwatchClass() {
			return userSwatchClass;
		},
		get userNameClass() {
			return userNameClass;
		},
		get currentUserClass() {
			return currentUserClass;
		},
		get toolButtonClass() {
			return toolButtonClass;
		},
		get actionButtonClass() {
			return actionButtonClass;
		},
		get actionIcons() {
			return actionIcons;
		},
		syncFromProps,
		redrawCanvas,
		selectTool,
		setSelectedColor,
		beginDrawing,
		updateDrawing,
		endDrawing,
		deleteSelected,
		undo,
		redo
	};
}

export default createSharedCanvasState;

