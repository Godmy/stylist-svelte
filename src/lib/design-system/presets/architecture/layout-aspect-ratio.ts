export const getAspectRatioClasses = (className = '') => {
  return `relative w-full [aspect-ratio:var(--aspect-ratio)] ${className}`.trim();
};
