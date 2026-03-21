import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ChildrenHtmlAttributes } from '$stylist/design-system/html/attributes/children';

/**
 * Aspect Ratio Props
 * Used for maintaining aspect ratios in containers
 */
export interface AspectRatioProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
  /** Aspect ratio value (e.g., 16/9, 4/3, 1) */
  ratio?: number;
}


