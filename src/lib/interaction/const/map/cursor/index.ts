/**
 * РўРѕРєРµРЅС‹ РєСѓСЂСЃРѕСЂРѕРІ РґР»СЏ РёРЅС‚РµСЂР°РєС‚РёРІРЅС‹С… СЌР»РµРјРµРЅС‚РѕРІ
 */
export const TOKEN_CURSOR = {
	// Р‘Р°Р·РѕРІС‹Рµ
	DEFAULT: 'default',
	POINTER: 'pointer',
	TEXT: 'text',
	
	// Drag-and-drop
	GRAB: 'grab',
	GRABBING: 'grabbing',
	MOVE: 'move',
	
	// РР·РјРµРЅРµРЅРёРµ СЂР°Р·РјРµСЂР°
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
	
	// РЎРѕСЃС‚РѕСЏРЅРёСЏ
	NOT_ALLOWED: 'not-allowed',
	NONE: 'none',
	PROGRESS: 'progress',
	WAIT: 'wait',
	HELP: 'help',
	
	// Zoom
	ZOOM_IN: 'zoom-in',
	ZOOM_OUT: 'zoom-out'
} as const;
