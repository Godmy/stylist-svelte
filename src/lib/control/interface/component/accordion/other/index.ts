import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { ContentProp, HtmlAttributesWithContent } from '$stylist/information/type/struct';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface AccordionDataItem {
	id: string;
	title: string;
	content: Snippet | string;
	disabled?: boolean;
}

export interface AccordionBaseProps {
	value: string;
	class?: string;
	children?: Snippet;
}

export interface AccordionHeaderProps
	extends Omit<HTMLButtonAttributes, keyof AccordionBaseProps>,
		AccordionBaseProps {
	header?: string;
	chevronSize?: TokenSize;
	padding?: TokenSize;
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

export interface IAccordionProps {
	items: AccordionDataItem[];
	multiple?: boolean;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	contentClass?: string;
}

