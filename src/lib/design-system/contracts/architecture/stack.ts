import type { TokenAlignment } from '$stylist/design-system/tokens/architecture/alignment';
import type { TokenJustification } from '$stylist/design-system/tokens/architecture/justification';
import type { TokenOrientation } from '$stylist/design-system/tokens/architecture/ownership/orientation';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ChildrenHtmlAttributes } from '$stylist/design-system/html/attributes/children';

export interface StackProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	direction?: TokenOrientation;
	spacing?: TokenSize | string | number;
	align?: TokenAlignment;
	justify?: TokenJustification;
}

