export const getSliderTickBaseClasses = (className = '') =>
  ['absolute top-0 -translate-x-1/2', className].filter(Boolean).join(' ');

export const getSliderTickLabelContainerClasses = () =>
  'mt-2 text-xs text-[--color-text-secondary] whitespace-nowrap';

export const getSliderTickStyle = (position?: number, _value?: number, active?: boolean) => {
  const pct = typeof position === 'number' ? position : 0;
  return `left: ${pct}%;${active ? ' font-weight: 600;' : ''}`;
};
