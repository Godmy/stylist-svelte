import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassList
  | { [key: string]: boolean | number | string }
  | readonly ClassValue[];

export type ClassList = readonly ClassValue[];

export interface AnnouncementBannerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  title?: string;
  description?: string;
  icon?: string;
  class?: ClassValue;
  children?: Snippet;
}

const cn = (...inputs: ClassValue[]): string => {
  const result: string[] = [];

  const flatten = (value: ClassValue): void => {
    if (typeof value === 'string') {
      result.push(value);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      result.push(String(value));
    } else if (value === null || value === undefined) {
      return;
    } else if (Array.isArray(value)) {
      value.forEach(flatten);
    } else if (typeof value === 'object') {
      Object.entries(value).forEach(([key, val]) => {
        if (val) result.push(key);
      });
    }
  };

  inputs.forEach(flatten);
  return result.filter(Boolean).join(' ');
};

export const getAnnouncementBannerContainerClasses = (className?: ClassValue) => {
  return `bg-white rounded-lg shadow p-6 ${cn(className)}`.trim();
};

export const getAnnouncementBannerIconClasses = () => {
  return 'w-12 h-12 mr-4';
};

export const getAnnouncementBannerContentClasses = () => {
  return 'flex-1';
};

export const getAnnouncementBannerTitleClasses = () => {
  return 'text-xl font-semibold mb-2';
};

export const getAnnouncementBannerDescriptionClasses = () => {
  return 'text-gray-600 mb-4';
};

export const getAnnouncementBannerChildrenContainerClasses = () => {
  return 'mt-4';
};

export const getAnnouncementBannerFlexContainerClasses = () => {
  return 'flex items-start';
};
