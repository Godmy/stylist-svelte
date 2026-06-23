/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export { ObjectManagerSharedCanvas } from './class';
export {
	CanvasToolbar,
	CollaborativeEditor,
	DrawingSurface,
	SharedCanvas,
	Stage,
	Viewport
} from './component';
export {
	SHARED_CANVAS_ACTION_ICONS,
	SHARED_CANVAS_TOOL_DEFINITIONS
} from './const';
export {
	cloneCanvasObjects,
	createCanvasObjectId,
	createCanvasToolbarState,
	createCollaborativeEditorState,
	createDraftCanvasObject,
	createDrawingSurfaceState,
	createSharedCanvasState,
	createStageState,
	createViewportState,
	drawCanvasObject,
	drawCanvasObjects,
	exportCanvasImage,
	finalizeDraftCanvasObject,
	getCanvasObjectBounds,
	getCanvasPointerPosition,
	getPathBounds,
	hitTestCanvasObject,
	updateDraftCanvasObject
} from './function';
export type {
	CanvasObject,
	CanvasToolbarDrawingTool,
	CanvasToolbarProps,
	CanvasUser,
	CollaborativeEditEvent,
	CollaborativeEditorContract,
	CollaborativeEditorProps,
	CollaborativeUser,
	DrawingSurfaceCanvasClearedEvent,
	DrawingSurfaceContract,
	DrawingSurfaceExposeMethodsEvent,
	DrawingSurfaceProps,
	SharedCanvasContract,
	SharedCanvasDraftObject,
	SharedCanvasObjectBounds,
	SharedCanvasPoint,
	SharedCanvasTool,
	SharedCanvasToolDefinition,
	StageCamera,
	StageContract,
	StageProps,
	ThemeGraphColors,
	ThemeGraphPortDataTypeColors,
	ThemeGraphPortStateColors,
	ViewportContract,
	ViewportProps
} from './type';
export type {
	CanvasToolbarDrawingOptions,
	RecipeCanvasImageEditor,
	SlotSharedCanvas,
	SlotViewportInput,
	SlotViewportState,
	ViewportBounds
} from './interface';
