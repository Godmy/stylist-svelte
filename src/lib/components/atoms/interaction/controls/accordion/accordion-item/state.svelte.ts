import type { AccordionItemProps } from '$stylist/design-system/attributes';
import { getAccordionItemClasses } from '../helpers';

export const createAccordionItemState = (props: AccordionItemProps) => {
	return {
		classes: getAccordionItemClasses(props.class)
	};
};
