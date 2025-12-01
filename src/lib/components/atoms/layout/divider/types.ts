/**
 * Divider types and interfaces following SOLID principles
 */

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerAlign = 'start' | 'center' | 'end';

export interface IDividerProps {
  orientation?: DividerOrientation;
  label?: string;
  align?: DividerAlign;
  dashed?: boolean;
  class?: string;
}