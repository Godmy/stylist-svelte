import {
	SHARED_CANVAS_ACTION_ICONS,
	SHARED_CANVAS_TOOL_DEFINITIONS
} from '$stylist/canvas/const/struct/canvas';
import type { SharedCanvasToolDefinition } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-tool-definition';
import type { SharedCanvasContract } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-contract';

export class ObjectManagerSharedCanvas {
	static readonly toolDefinitions: readonly SharedCanvasToolDefinition[] =
		SHARED_CANVAS_TOOL_DEFINITIONS;

	static readonly actionIcons = SHARED_CANVAS_ACTION_ICONS;

	static readonly exportFilename = 'shared-canvas.png';

	static getRestProps(contract: SharedCanvasContract) {
		const {
			width: _width,
			height: _height,
			objects: _objects,
			users: _users,
			currentUserId: _currentUserId,
			onObjectAdd: _onObjectAdd,
			onObjectUpdate: _onObjectUpdate,
			onObjectDelete: _onObjectDelete,
			showUsers: _showUsers,
			showToolbar: _showToolbar,
			toolbarClass: _toolbarClass,
			canvasClass: _canvasClass,
			variant: _variant,
			size: _size,
			class: _class,
			selectedTool: _selectedTool,
			selectedColor: _selectedColor,
			showZoomControls: _showZoomControls,
			...rest
		} = contract;

		return rest;
	}
}
