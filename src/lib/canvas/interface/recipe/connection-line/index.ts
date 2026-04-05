/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';

export interface ConnectionLineRecipe {
  id?: string;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  type?: TokenTrajectory;
  label?: string;
  color?: string;
  activeColor?: string;
  hoverColor?: string;
  active?: boolean;
  onclick?: () => void;
  width?: number;
  style?: 'solid' | 'dashed' | 'dotted';
  animated?: boolean;
  showArrow?: boolean;
  arrowSize?: number;
  class?: string;
}
