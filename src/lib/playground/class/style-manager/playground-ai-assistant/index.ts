/**
 * Менеджер стилей для компонента RecipePlaygroundAiAssistant
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class PlaygroundAiAssistantStyleManager {
	/**
	 * Получает CSS-классы для основного контейнера
	 */
	static getContainerClasses(): string {
		return 'chat-assistant';
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

	/**
	 * Получает CSS-классы для баннера ошибки
	 */
	static getErrorBannerClasses(): string {
		return 'error-banner';
	}

	/**
	 * Получает CSS-классы для индикатора загрузки
	 */
	static getLoadingIndicatorClasses(): string {
		return 'loading-indicator';
	}
}
