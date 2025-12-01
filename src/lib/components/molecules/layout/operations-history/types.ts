/**
 * Типы для компонента OperationsHistory
 * 
 * Этот файл содержит все типы и интерфейсы, используемые в компоненте OperationsHistory,
 * в соответствии с архитектурой SAMO (SOLID + Atomic Design).
 */

/**
 * @interface Operation
 * @description Определяет структуру операции в истории операций
 */
export interface Operation {
  id: string;
  name: string;
  query: string;
  timestamp: Date;
  status: 'success' | 'error' | 'pending';
  executionTime?: number;
}

/**
 * @interface IOperationsHistoryProps
 * @description Пропсы компонента OperationsHistory
 */
export interface IOperationsHistoryProps {
  operations?: Operation[];
  class?: string;
  'data-testid'?: string;
}

/**
 * @interface IOperationsHistoryEvents
 * @description События компонента OperationsHistory
 */
export interface IOperationsHistoryEvents {
  onSelect?: (operation: Operation) => void;
  onDelete?: (id: string) => void;
  onClear?: () => void;
}