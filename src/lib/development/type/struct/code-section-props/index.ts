import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { CodeSectionVariant } from '$stylist/development/type/struct/code-section-variant';

export type CodeSectionProps = {
	title?: string;
	language?: string;
	code: string;
	variant?: CodeSectionVariant;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	showCopyButton?: boolean;
	copySuccessMessage?: string;
	copyErrorMessage?: string;
	tags?: string[];
} & InformationHTMLAttributes<HTMLElement>;
