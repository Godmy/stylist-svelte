import type { AccordionHeaderDoubleProps } from '$stylist/design-system/attributes';
import {
	getAccordionHeaderDoubleClasses,
	getAccordionHeaderDoubleChevronClasses
} from '../helpers';

export const createAccordionHeaderDoubleState = (props: AccordionHeaderDoubleProps) => {
	return {
		classes: getAccordionHeaderDoubleClasses(props.class),
		chevronClasses: getAccordionHeaderDoubleChevronClasses()
	};
};
