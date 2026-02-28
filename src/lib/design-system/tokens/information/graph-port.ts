/**
 * Токены для портов графа
 * Определяют цвета для различных типов данных
 */

export const GRAPH_PORT_COLORS = {
	// Типы данных
	number: '#4CAF50', // зелёный для чисел
	string: '#2196F3', // синий для строк
	boolean: '#FF9800', // оранжевый для булевых
	object: '#9C27B0', // фиолетовый для объектов
	array: '#00BCD4', // голубой для массивов
	any: '#9E9E9E', // серый для любых типов
	event: '#F44336', // красный для событий
	action: '#E91E63', // розовый для действий

	// Состояния
	default: '#9E9E9E',
	connected: '#4CAF50',
	hovered: '#2196F3',
	active: '#FF9800',
	error: '#F44336',
	selected: '#673AB7'
} as const;

/**
 * Размеры портов
 */
export const GRAPH_PORT_SIZES = {
	xs: {
		width: '8px',
		height: '8px',
		hoverArea: '16px'
	},
	sm: {
		width: '10px',
		height: '10px',
		hoverArea: '20px'
	},
	md: {
		width: '12px',
		height: '12px',
		hoverArea: '24px'
	},
	lg: {
		width: '16px',
		height: '16px',
		hoverArea: '32px'
	}
} as const;

/**
 * Тип порта
 */
export type GraphPortType = keyof typeof GRAPH_PORT_COLORS;

/**
 * Размер порта
 */
export type GraphPortSizeKey = keyof typeof GRAPH_PORT_SIZES;
