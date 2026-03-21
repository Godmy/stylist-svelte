import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { DividerAlign } from '$stylist/design-system/tokens/architecture/alignments';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';

/**
 * Divider Props
 * Used for visual dividers/separators
 *
 * Note: Использует HTMLDivElement, так как компонент может рендерить
 * как div (для горизонтальных разделителей с label), так и hr
 */
export interface DividerProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
  /** Orientation of the divider */
  orientation?: Orientation;
  /** Whether the divider is inset */
  inset?: boolean;
  /** Alignment of the divider content */
  align?: DividerAlign;
  /** Whether the divider is dashed */
  dashed?: boolean;
  /** Label text to display on the divider */
  label?: string;
}



