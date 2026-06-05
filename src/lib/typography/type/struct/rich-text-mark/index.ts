export type StructRichTextMark = {
	start: number;
	end: number;
	color?: string;
	backgroundColor?: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikeThrough?: boolean;
	highlight?: boolean;
	subscript?: boolean;
	superscript?: boolean;
	code?: boolean;
	href?: string;
	target?: string;
	title?: string;
	rel?: string;
};
