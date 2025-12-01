/**
 * Типы и интерфейсы для компонента PropsEditor
 * 
 * PropsEditor - компонент для динамического редактирования props компонентов
 * Следует принципам SOLID:
 * 
 * Single Responsibility: Компонент отвечает только за редактирование props
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим редактором props
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export type PropType = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'function' | 'enum';

export interface IPropDefinition {
  /** Название пропса */
  name: string;
  
  /** Тип пропса */
  type: PropType;
  
  /** Значение по умолчанию */
  defaultValue?: any;
  
  /** Описание пропса */
  description?: string;
  
  /** Возможные значения (для enum) */
  options?: string[] | number[];
  
  /** Обязательный ли пропс */
  required?: boolean;
  
  /** Минимальное значение (для чисел) */
  min?: number;
  
  /** Максимальное значение (для чисел) */
  max?: number;
  
  /** Шаг значения (для чисел) */
  step?: number;
}

export interface IPropsEditorProps {
  /** Определения пропсов */
  propDefinitions: IPropDefinition[];
  
  /** Текущие значения пропсов */
  propValues: Record<string, any>;
  
  /** Обработчик изменения пропса */
  onPropChange?: (name: string, value: any) => void;
  
  /** Дополнительные CSS классы */
  class?: string;
}