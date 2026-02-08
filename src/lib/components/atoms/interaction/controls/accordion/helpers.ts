export const getAccordionHeaderClasses = (className = '') =>
	['flex w-full items-center justify-between py-3 text-left text-sm font-medium', className]
		.filter(Boolean)
		.join(' ');

export const getAccordionHeaderDoubleClasses = (className = '') =>
	['flex w-full items-center justify-between py-3 text-left', className].filter(Boolean).join(' ');

export const getAccordionHeaderDoubleChevronClasses = () =>
	'h-4 w-4 transition-transform data-[state=open]:rotate-180';

export const getAccordionItemClasses = (className = '') =>
	['border-b border-[--color-border-muted]', className].filter(Boolean).join(' ');

export const getAccordionPanelClasses = (className = '') =>
	['overflow-hidden text-sm transition-all', className].filter(Boolean).join(' ');

export const getAccordionPanelContentClasses = () => 'pb-4 pt-0';
