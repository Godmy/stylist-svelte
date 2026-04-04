export const SHARED_CANVAS_DEFAULT_COLOR = 'var(--color-primary-500)';
export const SHARED_CANVAS_EXPORT_FILENAME = 'shared-canvas.png';

export const SHARED_CANVAS_TOOL_DEFINITIONS = [
	{
		id: 'select',
		icon: 'mouse-pointer-2',
		title: 'Select Tool'
	},
	{
		id: 'rectangle',
		icon: 'square',
		title: 'Rectangle Tool'
	},
	{
		id: 'circle',
		icon: 'circle',
		title: 'Circle Tool'
	},
	{
		id: 'text',
		icon: 'type',
		title: 'Text Tool'
	}
] as const;

export const SHARED_CANVAS_ACTION_ICONS = {
	color: 'palette',
	undo: 'undo',
	redo: 'redo',
	delete: 'trash-2',
	export: 'download'
} as const;
