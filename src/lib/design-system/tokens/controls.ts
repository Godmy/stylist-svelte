export type ControlType = 'text' | 'number' | 'boolean' | 'select' | 'color' | 'range';

/**
 * @deprecated Use string literals instead (e.g., 'text', 'select', 'boolean')
 * This enum is kept for backward compatibility only.
 */
export const CONTROL_TYPES = {
	TEXT: 'text' as ControlType,
	NUMBER: 'number' as ControlType,
	BOOLEAN: 'boolean' as ControlType,
	SELECT: 'select' as ControlType,
	COLOR: 'color' as ControlType,
	RANGE: 'range' as ControlType
} as const;

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
