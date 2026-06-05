export type StructRichTextSegment = {
	key: string;
	text: string;
	tag: 'span' | 'mark' | 'code' | 'sub' | 'sup';
	color?: string;
	backgroundColor?: string;
	bold: boolean;
	italic: boolean;
	underline: boolean;
	strikeThrough: boolean;
	highlight: boolean;
	href?: string;
	target?: string;
	title?: string;
	rel?: string;
};
