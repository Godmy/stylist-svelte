export const CONTROL_TYPES = {
	TEXT: 'text',
	NUMBER: 'number',
	BOOLEAN: 'boolean',
	SELECT: 'select',
	COLOR: 'color',
	RANGE: 'range'
} as const;

export type ControlType = (typeof CONTROL_TYPES)[keyof typeof CONTROL_TYPES];

export interface ControlConfig {
	name: string;
	type: ControlType;
	defaultValue?: unknown;
	description?: string;
	options?: string[] | number[];
	min?: number;
	max?: number;
	step?: number;
}
