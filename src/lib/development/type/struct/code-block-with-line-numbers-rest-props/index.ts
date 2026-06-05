import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export type CodeBlockWithLineNumbersRestProps = Omit<
	InformationHTMLAttributes<HTMLDivElement>,
	'class'
>;
