import type { AccordionPanelProps } from '$stylist/design-system/attributes';
import { getAccordionPanelClasses, getAccordionPanelContentClasses } from '../helpers';

export const createAccordionPanelState = (props: AccordionPanelProps) => {
  return {
    classes: getAccordionPanelClasses(props.class),
    contentClasses: getAccordionPanelContentClasses()
  };
};
