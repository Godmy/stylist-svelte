import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { DocumentationBlockVariant } from '$stylist/development/type/struct/documentation-block-variant';

export type DocumentationBlockProps = {
	title?: string;
	content: string;
	variant?: DocumentationBlockVariant;
	codeExamples?: {
		title?: string;
		code: string;
		language?: string;
		showLineNumbers?: boolean;
	}[];
	tags?: string[];
} & InformationHTMLAttributes<HTMLElement>;
