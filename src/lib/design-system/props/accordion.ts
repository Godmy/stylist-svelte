import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

import type { ContentProp, HtmlAttributesWithContent } from './common';

export interface AccordionBaseProps {
	value: string;
	class?: string;
	children?: Snippet;
}

export interface AccordionHeaderProps
	extends Omit<HTMLButtonAttributes, keyof AccordionBaseProps>,
		AccordionBaseProps {
	header?: string;
	chevronSize?: 'sm' | 'md' | 'lg';
	padding?: 'sm' | 'md' | 'lg';
	paddingClass?: string;
	chevronSizeClass?: string;
	open?: boolean;
}

export interface AccordionHeaderDoubleProps
	extends Omit<HTMLButtonAttributes, keyof AccordionBaseProps>,
		AccordionBaseProps {
	open?: boolean;
	disabled?: boolean;
}

export interface ComplexAccordionProps extends HtmlAttributesWithContent<HTMLDivElement> {
	multiple?: boolean;
	defaultValue?: string[];
	value?: string[];
	onValueChange?: (value: string[]) => void;
}

export interface AccordionItemProps
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof AccordionBaseProps>,
		AccordionBaseProps {}

export interface AccordionPanelProps
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof AccordionBaseProps>,
		AccordionBaseProps,
		ContentProp {
	paddingClass?: string;
	borderClass?: string;
	bgClass?: string;
	open?: boolean;
}
