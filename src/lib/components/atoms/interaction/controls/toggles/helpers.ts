export const getToggleGroupRootClasses = (className = '') =>
  ['inline-flex items-center gap-1', className].filter(Boolean).join(' ');
