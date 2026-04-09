import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type SvgProps = InformationHTMLAttributes<HTMLSpanElement> & {
	svg: string;
	size?: number | string;
	strokeWidth?: number;
	class?: string;
};
