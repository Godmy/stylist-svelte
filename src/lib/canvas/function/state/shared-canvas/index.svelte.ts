import { ObjectManagerSharedCanvas } from '$stylist/canvas/class/object-manager/shared-canvas';
import { cloneCanvasObjects } from '$stylist/canvas/function/script/canvas/share/index';
import { createDraftCanvasObject } from '$stylist/canvas/function/script/canvas-create-draft-object';
import { drawCanvasObjects } from '$stylist/canvas/function/script/canvas-draw-objects';
import { finalizeDraftCanvasObject } from '$stylist/canvas/function/script/canvas-finalize-draft-object';
import { hitTestCanvasObject } from '$stylist/canvas/function/script/canvas-hit-test-object';
import { updateDraftCanvasObject } from '$stylist/canvas/function/script/canvas-update-draft-object';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';
import type { Point2D } from '$stylist/architecture/type/struct/point-2d';
import type { SharedCanvasTool } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-tool';
import type { SharedCanvasContract } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-contract';

export function createSharedCanvasState(contract: SharedCanvasContract) {
	let selectedTool = $state<SharedCanvasTool>('select');
	let selectedColor = $state(
		contract.users?.find((u) => u.id === contract.currentUserId)?.color ??
			'var(--color-primary-500)'
	);
	let isDrawing = $state(false);
	let startPoint = $state<Point2D>({ x: 0, y: 0 });
	let currentPoint = $state<Point2D>({ x: 0, y: 0 });
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
		mergeClassNames(
			'c-shared-canvas',
			contract.variant === 'minimal' && 'c-shared-canvas--minimal',
			mergeClassNames(contract.class)
		)
	);
	const toolbarClass = $derived(mergeClassNames('c-shared-canvas__toolbar', contract.toolbarClass));
	const canvasClass = $derived(mergeClassNames('c-shared-canvas__canvas', contract.canvasClass));
	const toolDefinitions = $derived(ObjectManagerSharedCanvas.toolDefinitions);
	const toolbarGroupClass = $derived('c-shared-canvas__toolbar-group');
	const toolbarDividerClass = $derived('c-shared-canvas__toolbar-divider');
	const colorLabelClass = $derived('c-shared-canvas__color-label');
	const colorInputClass = $derived('c-shared-canvas__color-input');
	const workspaceClass = $derived('c-shared-canvas__workspace');
	const canvasPaneClass = $derived('c-shared-canvas__pane');
	const remoteCursorClass = $derived('c-shared-canvas__cursor');
	const userPanelClass = $derived('c-shared-canvas__user-panel');
	const userPanelTitleClass = $derived('c-shared-canvas__user-panel-title');
	const userListClass = $derived('c-shared-canvas__user-list');
	const userItemClass = $derived('c-shared-canvas__user-item');
	const userSwatchClass = $derived('c-shared-canvas__user-swatch');
	const userNameClass = $derived('c-shared-canvas__user-name');
	const currentUserClass = $derived('c-shared-canvas__current-user');
	const toolButtonClass = $derived.by(
		() => (tool: SharedCanvasTool) =>
			mergeClassNames(
				'c-shared-canvas__tool-btn',
				selectedTool === tool && 'c-shared-canvas__tool-btn--active'
			)
	);
	const actionButtonClass = $derived('c-shared-canvas__action-btn');
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

	function beginDrawing(point: Point2D): void {
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

	function updateDrawing(point: Point2D): void {
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
