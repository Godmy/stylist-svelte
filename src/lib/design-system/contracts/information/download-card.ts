/**
 * Типы и интерфейсы для компонента DownloadCard
 * 
 * DownloadCard - компонент для отображения карточки файла с возможностью скачивания
 * Следует принципам SOLID:
 * 
 * Single Responsibility: Компонент отвечает только за отображение карточки файла и действия скачивания
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим компонентом файл-менеджмента
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export type DownloadCardVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface IFileMetadata {
  /** Имя файла */
  name: string;
  
  /** Размер файла (в байтах или строковом формате) */
  size: string | number;
  
  /** Тип файла (MIME type или расширение) */
  type: string;
  
  /** Дата создания/обновления */
  date?: string;
}

export interface IDownloadCardProps {
  /** Метаданные файла */
  file: IFileMetadata;
  
  /** Вариант оформления */
  variant?: DownloadCardVariant;
  
  /** URL для скачивания файла */
  downloadUrl: string;
  
  /** Альтернативный текст для иконки файла */
  iconAlt?: string;
  
  /** Показывать ли метаданные файла */
  showMetadata?: boolean; // default: true
  
  /** Пользовательская иконка для файла */
  icon?: string;
  
  /** Дополнительные CSS классы */
  class?: string;
}