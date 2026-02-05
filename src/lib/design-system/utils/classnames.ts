import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Объединяет несколько классов в одну строку, применяя twMerge для разрешения конфликтов
 * 
 * @param inputs - Массив значений классов (строки, объекты, массивы)
 * @returns Объединенная строка классов с разрешенными конфликтами
 */
export function cn(...inputs: import('clsx').ClassValue[]) {
  return twMerge(clsx(inputs));
}