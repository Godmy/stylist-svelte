import type { ComponentSize } from '../architecture/component-size';

/**
 * Токены для портов графа
 * Определяют цвета для различных типов данных
 */

export const GRAPH_PORT_DATA_TYPES = [
	'number',
	'string',
	'boolean',
	'object',
	'array',
	'any',
	'event',
	'action'
] as const;

export const GRAPH_PORT_DIRECTIONS = ['input', 'output'] as const;

export type GraphPortDataType = (typeof GRAPH_PORT_DATA_TYPES)[number];
export type GraphPortDirection = (typeof GRAPH_PORT_DIRECTIONS)[number];

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
type GraphPortDimensions = {
	width: string;
	height: string;
	hoverArea: string;
};

export const GRAPH_PORT_SIZE_MAP: Record<ComponentSize, GraphPortDimensions> = {
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
	},
	xl: {
		width: '20px',
		height: '20px',
		hoverArea: '40px'
	},
	'2xl': {
		width: '24px',
		height: '24px',
		hoverArea: '48px'
	}
} as const;

/**
 * Тип порта
 */
export type GraphPortType = keyof typeof GRAPH_PORT_COLORS;

/**
 * Размер порта
 */
export type GraphPortSize = ComponentSize;
export type GraphPortSizeKey = keyof typeof GRAPH_PORT_SIZE_MAP;



