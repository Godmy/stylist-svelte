import type { HTMLAttributes, HTMLTableAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface TableProps extends HTMLTableAttributes {
  caption?: string;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  content?: Snippet;
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  content?: Snippet;
}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  content?: Snippet;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  striped?: boolean;
  active?: boolean;
  content?: Snippet;
}

export type TableCellVariant = 'header' | 'data';
export type TableCellAlign = 'left' | 'center' | 'right';

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  variant?: TableCellVariant;
  align?: TableCellAlign;
  content?: Snippet;
}

export const getTableClasses = (additionalClass = ''): string => {
  return [
    'min-w-full',
    'divide-y',
    'divide-gray-200',
    additionalClass
  ].filter(Boolean).join(' ');
};

export const getCaptionClasses = (): string => {
  return [
    'py-3',
    'px-6',
    'text-left',
    'text-sm',
    'font-medium',
    'text-gray-900',
    'bg-gray-50'
  ].join(' ');
};

export const getTableBodyClasses = (additionalClass = ''): string => {
  return [
    'bg-white',
    'divide-y',
    'divide-gray-200',
    additionalClass
  ].filter(Boolean).join(' ');
};

export const getTableHeaderClasses = (additionalClass = ''): string => {
  return [
    'bg-gray-50',
    additionalClass
  ].filter(Boolean).join(' ');
};

export const getTableRowClasses = (striped = false, active = false, additionalClass = ''): string => {
  const classes: string[] = [];
  if (striped) classes.push('odd:bg-white', 'even:bg-gray-50');
  else classes.push('bg-white');
  if (active) classes.push('bg-blue-50');
  if (additionalClass) classes.push(additionalClass);
  return classes.filter(Boolean).join(' ');
};

export const getTableCellClasses = (
  variant: TableCellVariant = 'data',
  align: TableCellAlign = 'left',
  additionalClass = ''
): string => {
  const baseClasses: string[] = ['px-6', 'py-4'];
  const alignmentMap: Record<TableCellAlign, string[]> = {
    left: ['text-left'],
    center: ['text-center'],
    right: ['text-right']
  };
  baseClasses.push(...alignmentMap[align]);
  if (variant === 'header') {
    baseClasses.push('px-6', 'py-3', 'text-left', 'text-xs', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider');
  } else {
    baseClasses.push('whitespace-nowrap');
  }
  if (additionalClass) baseClasses.push(additionalClass);
  return baseClasses.filter(Boolean).join(' ');
};