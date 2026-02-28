export interface ColorPaletteStyles {
  container: string;
  header: string;
  grid: string;
  item: string;
  colorSwatch: string;
  label: string;
  value: string;
  [key: string]: string;
}

export interface ColorPaletteStyleManagerInterface {
  getContainerClass: () => string;
  getHeaderClass: () => string;
  getGridClass: () => string;
  getItemClass: () => string;
  getColorSwatchClass: () => string;
  getLabelClass: () => string;
  getValueClass: () => string;
}

export const createColorPaletteStyles = <TOptions extends { columns: number }>(
  { columns }: TOptions,
  baseClasses?: Partial<ColorPaletteStyles>
): ColorPaletteStyles => {
  const columnClass: Record<number, string> = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }[columns] || 'grid-cols-5';

  return {
    container: [
      'color-palette',
      baseClasses?.container || ''
    ].join(' '),
    
    header: [
      'mb-4 text-lg font-medium text-[var(--color-text-primary)]',
      baseClasses?.header || ''
    ].join(' '),
    
    grid: [
      `grid ${columnClass} gap-4`,
      baseClasses?.grid || ''
    ].join(' '),
    
    item: [
      'flex cursor-pointer flex-col items-center rounded-lg border border-transparent p-3 transition-[box-shadow,border-color] hover:border-[var(--color-border-primary)] hover:shadow-md',
      baseClasses?.item || ''
    ].join(' '),
    
    colorSwatch: [
      'mb-2 h-12 w-full rounded-md border border-[var(--color-border-primary)]',
      baseClasses?.colorSwatch || ''
    ].join(' '),
    
    label: [
      'w-full truncate text-center text-xs font-medium text-[var(--color-text-secondary)]',
      baseClasses?.label || ''
    ].join(' '),
    
    value: [
      'w-full truncate text-center font-mono text-xs text-[var(--color-text-tertiary)]',
      baseClasses?.value || ''
    ].join(' ')
  };
};
