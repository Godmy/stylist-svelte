import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';

export interface DividerProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	orientation?: TokenOrientation;
	inset?: boolean;
	align?: TokenAlignment;
	dashed?: boolean;
	label?: string;
}
