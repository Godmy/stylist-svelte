import type { AccordionHeaderProps } from '$stylist/design-system/attributes';
import { getAccordionHeaderClasses } from '../helpers';

export const createAccordionHeaderState = (props: AccordionHeaderProps) => {
	return {
		classes: getAccordionHeaderClasses(props.class)
	};
};
