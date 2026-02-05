export type DataDisplayTableCellAlign = 'left' | 'center' | 'right';
export type TableCellAlign = DataDisplayTableCellAlign;
export type TableCellVariant = 'header' | 'data';
export type NpmBadgeType = 'version' | 'downloads' | 'license' | 'size' | 'custom';
export type AnimatedNumberFormat = 'number' | 'percent' | 'currency';
export interface AnimatedNumberFormatOptions {
  format?: AnimatedNumberFormat;
  separator?: string;
  decimals?: number;
}
export interface NumberFlowFormatOptions extends Intl.NumberFormatOptions {}

export const TABLE_CLASSES = {
  table: ['min-w-full', 'divide-y', 'divide-[--color-border-secondary]'] as const,
  caption: [
    'py-3',
    'px-6',
    'text-left',
    'text-sm',
    'font-medium',
    'text-[--color-text-primary]',
    'bg-[--color-background-secondary]'
  ] as const,
  body: ['bg-[--color-background-primary]', 'divide-y', 'divide-[--color-border-secondary]'] as const,
  header: ['bg-[--color-background-secondary]'] as const,
  row: {
    striped: ['odd:bg-[--color-background-primary]', 'even:bg-[--color-background-secondary]'] as const,
    normal: ['bg-[--color-background-primary]'] as const,
    active: 'bg-[--color-primary-50]'
  },
  cell: {
    base: ['px-6', 'py-4'] as const,
    header: [
      'px-6',
      'py-3',
      'text-left',
      'text-xs',
      'font-medium',
      'text-[--color-text-secondary]',
      'uppercase',
      'tracking-wider'
    ] as const,
    data: ['whitespace-nowrap'] as const
  }
} as const;

export const TABLE_ALIGNMENT_CLASSES: Record<DataDisplayTableCellAlign, string[]> = {
  left: ['text-left'],
  center: ['text-center'],
  right: ['text-right']
};

export const NPM_BADGE_BASE_CLASSES =
  'npm-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

export const NPM_BADGE_TYPE_CLASSES: Record<NpmBadgeType, string> = {
  version: 'bg-[--color-primary-100] text-[--color-primary-800] dark:bg-[--color-primary-900]/30 dark:text-[--color-primary-300]',
  downloads: 'bg-[--color-success-100] text-[--color-success-800] dark:bg-[--color-success-900]/30 dark:text-[--color-success-300]',
  license: 'bg-[--color-secondary-100] text-[--color-secondary-800] dark:bg-[--color-secondary-900]/30 dark:text-[--color-secondary-300]',
  size: 'bg-[--color-warning-100] text-[--color-warning-800] dark:bg-[--color-warning-900]/30 dark:text-[--color-warning-300]',
  custom: 'bg-[--color-neutral-100] text-[--color-neutral-800] dark:bg-[--color-neutral-700] dark:text-[--color-neutral-300]'
};

export const NPM_BADGE_LABELS: Record<NpmBadgeType, string> = {
  version: 'Version',
  downloads: 'Downloads',
  license: 'License',
  size: 'Size',
  custom: 'Badge'
};
