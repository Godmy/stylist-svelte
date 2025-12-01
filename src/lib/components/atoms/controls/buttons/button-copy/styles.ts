export const getCopyButtonClasses = (className: string, copied: boolean) => {
  const baseClasses = "inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md";
  const colorClasses = copied 
    ? "text-green-700 bg-green-100" 
    : "text-gray-700 bg-white hover:bg-gray-50";
  const focusClasses = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
  const transitionClasses = "transition-colors";

  return `${baseClasses} ${colorClasses} ${focusClasses} ${transitionClasses} ${className}`.trim();
};

export const getCopyButtonIconClasses = (copied: boolean) => {
  const baseClasses = "h-4 w-4";
  const colorClass = copied ? "text-green-500" : "";

  return `${baseClasses} ${colorClass}`.trim();
};