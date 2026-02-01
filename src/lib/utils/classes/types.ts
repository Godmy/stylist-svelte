import { clsx } from 'clsx';
import { twMerge as twMergeLib } from 'tailwind-merge';

export type ClassValue =
  | string
  | number
  | bigint
  | null
  | undefined
  | boolean
  | { [key: string]: boolean }
  | Iterable<ClassValue>;

export function twJoin(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function twMerge(...inputs: ClassValue[]): string {
  return twMergeLib(clsx(inputs));
}

export function cn(...inputs: ClassValue[]): string {
  return twMergeLib(clsx(inputs));
}