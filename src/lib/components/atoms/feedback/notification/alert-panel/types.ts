/**
 * Типы для компонента AlertPanel
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Статус алерта */
export type AlertPanelStatus = 'info' | 'success' | 'warning' | 'error';

/** Пропсы компонента AlertPanel */
export interface IAlertPanelProps {
  title?: string;
  description?: string;
  status?: AlertPanelStatus;
  showIcon?: boolean;
  class?: string;
}