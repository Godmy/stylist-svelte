/**
 * Типы и интерфейсы для компонента ChatPreview
 * 
 * ChatPreview - компонент для отображения превью чата команды
 * Следует принципам SOLID:
 * 
 * Single Responsibility: Компонент отвечает только за отображение превью чата
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим компонентом чата
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

// Define the message bubble props interface directly since the message-bubble component may not exist yet
export interface IChatPreviewMessageBubbleProps {
  text: string;
  sender: string;
  timestamp?: string;
  isOwn?: boolean;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}

export interface IChatPreviewProps {
  /** Название чата */
  title: string;

  /** Участники чата */
  participants: string[];

  /** Сообщения в чате */
  messages: IChatPreviewMessageBubbleProps[];

  /** Максимальное количество сообщений для отображения */
  maxMessages?: number; // default: 5

  /** Показывать ли аватары участников */
  showAvatars?: boolean; // default: true

  /** Дополнительные CSS классы */
  class?: string;
}