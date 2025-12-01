export const getAccordionPanelClasses = (isOpen: boolean, className: string) => {
  const baseClasses = "overflow-hidden transition-all duration-200 ease-in-out";
  const stateClasses = isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0';
  return `${baseClasses} ${stateClasses} ${className}`.trim();
};

export const getAccordionPanelContentClasses = (paddingClass: string = 'p-4', borderClass: string = 'border-t border-gray-200', bgClass: string = 'bg-white') => {
  return `${paddingClass} ${borderClass} ${bgClass}`;
};