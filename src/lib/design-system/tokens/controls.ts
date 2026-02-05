export type ControlType = 'text' | 'number' | 'boolean' | 'select' | 'color' | 'range';

export interface ControlConfig {
  name: string;
  type: ControlType;
  defaultValue?: unknown;
  description?: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}