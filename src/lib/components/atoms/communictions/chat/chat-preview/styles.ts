/**
 * Менеджер стилей для компонента ChatPreview
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

export class ChatPreviewStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера ChatPreview
   */
  static getContainerClasses(className?: string): string {
    return `chat-preview border rounded-lg bg-white shadow-sm overflow-hidden ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для заголовка чата
   */
  static getHeaderClasses(): string {
    return 'p-4 border-b bg-gray-50 flex items-center justify-between';
  }

  /**
   * Возвращает CSS-классы для информации о чате
   */
  static getChatInfoClasses(): string {
    return 'flex items-center';
  }

  /**
   * Возвращает CSS-классы для названия чата
   */
  static getTitleClasses(): string {
    return 'font-semibold text-gray-900';
  }

  /**
   * Возвращает CSS-классы для участников чата
   */
  static getParticipantsClasses(): string {
    return 'text-sm text-gray-500 ml-2';
  }

  /**
   * Возвращает CSS-классы для контейнера сообщений
   */
  static getMessagesContainerClasses(): string {
    return 'max-h-80 overflow-y-auto p-4 space-y-4';
  }

  /**
   * Возвращает CSS-классы для аватара участника
   */
  static getAvatarClasses(): string {
    return 'w-6 h-6 rounded-full mr-2 flex-shrink-0';
  }
}