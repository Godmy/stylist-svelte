export const GRAPH_PORT_COLORS = {
	number: '#4CAF50',
	string: '#2196F3',
	boolean: '#FF9800',
	object: '#9C27B0',
	array: '#00BCD4',
	any: '#9E9E9E',
	event: '#F44336',
	action: '#E91E63',
	default: '#9E9E9E',
	connected: '#4CAF50',
	hovered: '#2196F3',
	active: '#FF9800',
	error: '#F44336',
	selected: '#673AB7'
} as const;

export type GraphPortColors = keyof typeof GRAPH_PORT_COLORS;
