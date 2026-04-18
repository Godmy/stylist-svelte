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

export interface SlotFileMetadata {
  /** Имя файла */
  name: string;
  
  /** Размер файла (в байтах или строковом формате) */
  size: string | number;
  
  /** Тип файла (MIME type или расширение) */
  type: string;
  
  /** Дата создания/обновления */
  date?: string;
}
