import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

import type { ContentProp, HtmlAttributesWithContent } from '../information/common';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

import type { AccordionDataItem } from '../../types/interaction/accordion';
export interface AccordionBaseProps {
	value: string;
	class?: string;
	children?: Snippet;
}

export interface AccordionHeaderProps
	extends Omit<HTMLButtonAttributes, keyof AccordionBaseProps>,
		AccordionBaseProps {
	header?: string;
	chevronSize?: ComponentSize;
	padding?: ComponentSize;
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

/** Пропсы компонента Accordion */
export interface IAccordionProps {
  items: AccordionDataItem[];
  multiple?: boolean;
  class?: string;
  itemClass?: string;
  headerClass?: string;
  contentClass?: string;
}




