/**
 * Токены курсоров для интерактивных элементов
 */
export const TOKEN_CURSOR = {
	// Базовые
	DEFAULT: 'default',
	POINTER: 'pointer',
	TEXT: 'text',
	
	// Drag-and-drop
	GRAB: 'grab',
	GRABBING: 'grabbing',
	MOVE: 'move',
	
	// Изменение размера
	E_RESIZE: 'e-resize',
	N_RESIZE: 'n-resize',
	NE_RESIZE: 'ne-resize',
	NW_RESIZE: 'nw-resize',
	S_RESIZE: 's-resize',
	SE_RESIZE: 'se-resize',
	SW_RESIZE: 'sw-resize',
	W_RESIZE: 'w-resize',
	EW_RESIZE: 'ew-resize',
	NS_RESIZE: 'ns-resize',
	NESW_RESIZE: 'nesw-resize',
	NWSE_RESIZE: 'nwse-resize',
	
	// Состояния
	NOT_ALLOWED: 'not-allowed',
	NONE: 'none',
	PROGRESS: 'progress',
	WAIT: 'wait',
	HELP: 'help',
	
	// Zoom
	ZOOM_IN: 'zoom-in',
	ZOOM_OUT: 'zoom-out'
} as const;
