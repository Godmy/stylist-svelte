import type { AccordionHeaderProps } from '$stylist/design-system/interaction/controls/accordion/accordion-header';

export function createAccordionHeaderState(props: AccordionHeaderProps) {
  const header = $derived(props.header ?? '');
  const disabled = $derived(props.disabled ?? false);
  const chevronSize = $derived(props.chevronSize ?? 'md');
  const padding = $derived(props.padding ?? 'md');
  const classes = $derived(
    `flex items-center justify-between w-full p-${padding === 'sm' ? '2' : padding === 'lg' ? '4' : '3'} font-medium ${
      disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900 cursor-pointer hover:bg-gray-50'
    } ${props.class ?? ''}`.trim()
  );
  const chevronClasses = $derived(
    `transform transition-transform ${chevronSize === 'sm' ? 'w-4 h-4' : chevronSize === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`
  );

  return {
    get header() {
      return header;
    },
    get disabled() {
      return disabled;
    },
    get chevronSize() {
      return chevronSize;
    },
    get padding() {
      return padding;
    },
    get classes() {
      return classes;
    },
    get chevronClasses() {
      return chevronClasses;
    }
  };
}