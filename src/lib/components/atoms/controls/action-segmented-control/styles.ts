export const getActionSegmentedControlContainerClasses = (className: string) => {
  return `flex rounded-lg border ${className}`.trim();
};

export const getActionSegmentedControlItemClasses = (index: number, totalItems: number, isSelected: boolean) => {
  const baseClasses = "px-4 py-2 rounded-lg transition-colors";
  const roundedClass = 
    index === 0 ? 'rounded-l-lg' : 
    index === totalItems - 1 ? 'rounded-r-lg' : '';
  const stateClass = isSelected
    ? 'bg-blue-500 text-white'
    : 'bg-white text-gray-700 hover:bg-gray-100';
  
  return `${baseClasses} ${roundedClass} ${stateClass}`.trim();
};