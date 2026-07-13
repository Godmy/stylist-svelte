export const TOKEN_CURSOR = {
	DEFAULT: 'default',
	POINTER: 'pointer',
	TEXT: 'text',

	GRAB: 'grab',
	GRABBING: 'grabbing',
	MOVE: 'move',

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

	NOT_ALLOWED: 'not-allowed',
	NONE: 'none',
	PROGRESS: 'progress',
	WAIT: 'wait',
	HELP: 'help',

	ZOOM_IN: 'zoom-in',
	ZOOM_OUT: 'zoom-out'
} as const;
