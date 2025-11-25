/**
 * TabIndicator props and supporting types
 */
export type TabIndicatorColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gray';

export interface ITabIndicatorProps {
  left?: string;
  width?: string;
  color?: TabIndicatorColor;
  class?: string;
}
