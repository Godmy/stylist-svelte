import type { Snippet } from 'svelte';
import type { CommonSize, NeutralVariant, SemanticVariant } from '../tokens/variants';

export interface ClassProp {
	class?: string;
}

export interface ChildrenProp {
	children?: Snippet;
}

export interface ContentProp {
	content?: Snippet;
}

export interface TypographyTextProps {
	variant?: string;
	size?: CommonSize;
	disabled?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
}

export type ToolbarVariant = 'default' | SemanticVariant | NeutralVariant | 'dark' | 'light';

export interface ToolbarInteractiveProps {
	variant?: ToolbarVariant;
	size?: CommonSize | 'xl';
	active?: boolean;
	disabled?: boolean;
}

export interface ToolbarFieldProps {
	variant?: ToolbarVariant;
	size?: CommonSize | 'xl';
	disabled?: boolean;
}

export type ButtonElementBaseProps<TCore, TDom> = Omit<TCore, 'children'> &
	TDom & {
		class?: string;
		children?: Snippet;
	};
