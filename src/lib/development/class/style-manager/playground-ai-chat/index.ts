/**
 * Менеджер стилей для компонента PlaygroundAiChat
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class PlaygroundAiChatStyleManager {
	/**
	 * Получает CSS-классы для основного контейнера
	 */
	static getContainerClasses(): string {
		return 'chat-panel';
	}

	/**
	 * Получает CSS-классы для заголовка
	 */
	static getHeaderClasses(): string {
		return 'flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700';
	}

	/**
	 * Получает CSS-классы для контейнера сообщений
	 */
	static getMessagesContainerClasses(): string {
		return 'messages-container';
	}

	/**
	 * Получает CSS-классы для сообщения
	 */
	static getMessageClasses(role: 'user' | 'assistant'): string {
		return `message ${role}`;
	}

	/**
	 * Получает CSS-классы для контейнера ввода
	 */
	static getInputContainerClasses(): string {
		return 'input-container';
	}
}
