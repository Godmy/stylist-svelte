import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export type SvgProps = InformationHTMLAttributes<HTMLSpanElement> & {
	svg: string;
	size?: number | string;
	strokeWidth?: number;
	class?: string;
};
