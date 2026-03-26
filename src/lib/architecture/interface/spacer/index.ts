import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import type { TokenSize } from '$stylist/architecture/type/token/size';

export interface SpacerProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	size?: TokenSize;
	axis?: TokenOrientation;
}
