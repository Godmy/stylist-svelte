export type NpmBadgeType = 'version' | 'downloads' | 'license' | 'size' | 'custom';

export interface NpmBadgeProps {
  type: NpmBadgeType;
  value: string;
  label?: string;
  color?: string;
  link?: string;
  class?: string;
}

const NPM_BADGE_BASE_CLASSES =
  'npm-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

const NPM_BADGE_TYPE_CLASSES: Record<NpmBadgeType, string> = {
  version: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  downloads: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  license: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  size: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  custom: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
};

const NPM_BADGE_LABELS: Record<NpmBadgeType, string> = {
  version: 'Version',
  downloads: 'Downloads',
  license: 'License',
  size: 'Size',
  custom: 'Badge'
};

export const getNpmBadgeClasses = (type: NpmBadgeType, className = ''): string => {
  const baseClasses = `${NPM_BADGE_BASE_CLASSES} ${NPM_BADGE_TYPE_CLASSES[type]}`.trim();
  return className ? `${baseClasses} ${className}` : baseClasses;
};

export const getNpmBadgeLinkClasses = (): string => {
  return 'hover:opacity-80 transition-opacity duration-200';
};

export const getNpmBadgeLabel = (type: NpmBadgeType, label?: string): string => {
  if (type === 'custom') {
    return label || NPM_BADGE_LABELS.custom;
  }

  return NPM_BADGE_LABELS[type];
};
