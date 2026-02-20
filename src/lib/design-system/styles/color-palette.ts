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
      'text-lg font-medium text-gray-900 mb-4',
      baseClasses?.header || ''
    ].join(' '),
    
    grid: [
      `grid ${columnClass} gap-4`,
      baseClasses?.grid || ''
    ].join(' '),
    
    item: [
      'flex flex-col items-center cursor-pointer rounded-lg p-3 transition-shadow hover:shadow-md',
      baseClasses?.item || ''
    ].join(' '),
    
    colorSwatch: [
      'w-full h-12 rounded-md mb-2 border border-gray-200',
      baseClasses?.colorSwatch || ''
    ].join(' '),
    
    label: [
      'text-xs font-medium text-gray-700 truncate w-full text-center',
      baseClasses?.label || ''
    ].join(' '),
    
    value: [
      'text-xs text-gray-500 font-mono truncate w-full text-center',
      baseClasses?.value || ''
    ].join(' ')
  };
};