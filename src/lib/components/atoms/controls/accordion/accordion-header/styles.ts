export const getAccordionHeaderClasses = (isOpen: boolean, className: string, paddingClass: string = 'p-4') => {
  const baseClasses = "flex w-full items-center justify-between text-left font-medium";
  const stateClass = isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50';
  return `${baseClasses} ${paddingClass} ${stateClass} ${className}`.trim();
};

export const getChevronClasses = (isOpen: boolean, sizeClass: string = 'h-5 w-5') => {
  const baseClasses = `${sizeClass} text-gray-500 transition-transform duration-200`;
  const rotationClass = isOpen ? 'rotate-180' : '';
  return `${baseClasses} ${rotationClass}`.trim();
};