export const getInputGroupContainerClasses = () => {
  return "flex rounded-md shadow-sm";
};

export const getInputGroupInputClasses = (className: string) => {
  return `rounded-none rounded-l-md focus:z-10 border-r-0 ${className}`.trim();
};

export const getInputGroupButtonClasses = () => {
  return "rounded-none rounded-r-md -ml-px";
};