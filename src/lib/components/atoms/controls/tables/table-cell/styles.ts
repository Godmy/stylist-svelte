export class TableCellStyleManager {
  static getTableCellClasses(
    variant: 'header' | 'data' = 'data',
    align: 'left' | 'center' | 'right' = 'left',
    additionalClass: string = ''
  ): string {
    const baseClasses = [
      'px-6',
      'py-4'
    ];

    // Alignment classes
    const alignmentMap: Record<'left' | 'center' | 'right', string[]> = {
      left: ['text-left'],
      center: ['text-center'],
      right: ['text-right']
    };

    baseClasses.push(...alignmentMap[align]);

    // Variant-specific classes
    if (variant === 'header') {
      baseClasses.push(
        'px-6',
        'py-3',
        'text-left',
        'text-xs',
        'font-medium',
        'text-gray-500',
        'uppercase',
        'tracking-wider'
      );
    } else {
      baseClasses.push('whitespace-nowrap');
    }

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}