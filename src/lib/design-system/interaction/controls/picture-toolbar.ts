import { BASE_CLASSES, STATE_CLASSES } from '../../tokens/classes';

export interface PictureToolbarTool {
  id: string;
  label: string;
  icon?: string;
}

export interface PictureToolbarProps {
  tools: PictureToolbarTool[];
  onToolSelect?: (tool: string) => void;
  activeTool?: string;
  class?: string;
}

export const DEFAULT_PICTURE_TOOLBAR_ACTIVE = '';

export const getPictureToolbarContainerClasses = (className = '') => {
  const baseClasses = `${BASE_CLASSES.surface} p-2 rounded-lg flex items-center`;
  return [baseClasses, className].filter(Boolean).join(' ');
};

export const getPictureToolbarButtonClasses = (isActive: boolean) => {
  return [
    'mx-1 p-2 rounded-md',
    isActive ? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]' : 'hover:bg-[var(--color-secondary-100)]'
  ]
    .filter(Boolean)
    .join(' ');
};

export const getPictureToolbarIconClasses = () => 'w-5 h-5';
