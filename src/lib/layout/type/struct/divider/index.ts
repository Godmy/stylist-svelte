import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';

export type DividerProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	orientation?: TokenOrientation;
	align?: string;
	dashed?: boolean;
	label?: string;
};
