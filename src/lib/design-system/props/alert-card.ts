/**
 * Типы для компонента AlertCard
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Действие в алерте */
export interface IAlertAction {
  label: string;
  onClick: () => void;
}

/** Пропсы компонента AlertCard */
export interface IAlertCardProps {
  title?: string;
  subtitle?: string;
  icon?: string;
  actions?: IAlertAction[];
  class?: string;
}