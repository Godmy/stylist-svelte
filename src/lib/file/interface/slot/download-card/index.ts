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

import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { SlotFileMetadata } from '$stylist/file/interface/slot/file-metadata';

export interface SlotDownloadCard {
  /** Метаданные файла */
  file: SlotFileMetadata;
  
  /** Вариант оформления */
  variant?: TokenAppearance;
  
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
