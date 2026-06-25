/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export { ObjectManagerSharedCanvas } from './class';
export {
	CanvasToolbar,
	CollaborativeEditor,
	DrawingSurface,
	SharedCanvas
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
	CanvasToolbarProps,
	CanvasUser,
	CollaborativeEditEvent,
	CollaborativeEditorProps,
	CollaborativeUser,
	DrawingSurfaceCanvasClearedEvent,
	DrawingSurfaceContract,
	DrawingSurfaceExposeMethodsEvent,
	DrawingSurfaceProps,
	SharedCanvasContract,
	SharedCanvasObjectBounds,
	SharedCanvasPoint,
	SharedCanvasTool,
	SharedCanvasToolDefinition,
	ThemeGraphColors,
	ThemeGraphPortDataTypeColors,
	ThemeGraphPortStateColors
} from './type';
export type {
	CanvasToolbarDrawingOptions,
	RecipeCanvasImageEditor,
	SlotSharedCanvas
} from './interface';
