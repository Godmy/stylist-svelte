import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { Justification } from '$stylist/design-system/tokens/architecture/alignments';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ChildrenHtmlAttributes } from '$stylist/design-system/html/attributes/children';

export interface StackProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	direction?: Orientation;
	spacing?: ComponentSize | string | number;
	align?: Alignment;
	justify?: Justification;
}
