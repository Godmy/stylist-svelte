/** Domain facade: consolidated presets for factory layer. */

import {
  animateNumberValue,
  formatAnimatedValue,
  formatNumberFlowValue,
  getAnnouncementBannerContainerClasses,
  getAnnouncementBannerContentClasses,
  getBaseIconClasses,
  getBadgeClasses,
  getBlockquoteClasses,
  getCaptionClasses,
  getCodeBlockClasses,
  getColorSwatchClasses,
  getColorSwatchStyle,
  getCounterClasses,
  getCountryFlagClasses,
  getDotClasses,
  getFaviconClasses,
  getIconChevronClasses,
  getIconCircleClasses,
  getIconClasses,
  getIconWrapperClasses,
  getImageWithCaptionHostClasses,
  getInlineCodeClasses,
  getLabelClasses,
  getLinkClasses,
  getNpmBadgeClasses,
  getNpmBadgeLabel,
  getNpmBadgeLinkClasses,
  getPieChartContainerClasses,
  getPieChartSvgClasses,
  getTableBodyClasses,
  getTableCaptionClasses,
  getTableCellClasses,
  getTableClasses,
  getTableHeaderClasses,
  getTableRowClasses
} from './information-canonical-adapter';
export type { AnimatedNumberProps, NumberFlowProps } from './information-canonical-adapter';

// Backward-compatible lightweight class resolver kept in canonical surface.
export const getNumberFlowClasses = (className = '') => ({
  container: `flex items-center ${className}`,
  prefix: 'mr-1',
  suffix: 'ml-1',
  srOnly: 'sr-only'
});

export const INFORMATION_PRESETS = {
  dataDisplay: {
    animateNumberValue,
    formatAnimatedValue,
    getPieChartContainerClasses,
    getPieChartSvgClasses,
    getColorSwatchClasses,
    getColorSwatchStyle,
    getNpmBadgeClasses,
    getNpmBadgeLabel,
    getNpmBadgeLinkClasses,
    formatNumberFlowValue,
    getTableClasses,
    getTableCaptionClasses,
    getTableHeaderClasses,
    getTableBodyClasses,
    getTableRowClasses,
    getTableCellClasses,
    getNumberFlowClasses
  },
  media: {
    getAnnouncementBannerContainerClasses,
    getAnnouncementBannerContentClasses,
    getBaseIconClasses,
    getCountryFlagClasses,
    getFaviconClasses,
    getIconClasses,
    getIconChevronClasses,
    getIconCircleClasses,
    getIconWrapperClasses,
    getImageWithCaptionHostClasses
  },
  typography: {
    getBlockquoteClasses,
    getBadgeClasses,
    getCodeBlockClasses,
    getLabelClasses,
    getCounterClasses,
    getDotClasses,
    getInlineCodeClasses,
    getLinkClasses,
    getCaptionClasses
  }
} as const;
