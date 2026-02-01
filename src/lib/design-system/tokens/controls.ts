export type ControlType = 'text' | 'number' | 'boolean' | 'select';

export interface ControlConfig {
  name: string;
  type: ControlType;
  defaultValue?: unknown;
  description?: string;
  options?: readonly string[];
}
