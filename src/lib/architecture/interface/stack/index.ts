import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { TokenJustification } from '$stylist/architecture/type/token/justification';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { ChildrenHtmlAttributes } from '$stylist/architecture/type/attribute/children';

export interface StackProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	direction?: TokenOrientation;
	spacing?: TokenSize | string | number;
	align?: TokenAlignment;
	justify?: TokenJustification;
}
