/**
 * Менеджер стилей для компонента RecipePlaygroundAiPanel
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class PlaygroundAiPanelStyleManager {
	/**
	 * Получает CSS-классы для основного контейнера
	 */
	static getContainerClasses(): string {
		return 'ai-panel-container';
	}

	/**
	 * Получает CSS-классы для заголовка
	 */
	static getHeaderClasses(): string {
		return 'p-4 border-b border-gray-200 dark:border-gray-700';
	}

	/**
	 * Получает CSS-классы для заголовка провайдера
	 */
	static getProviderHeaderClasses(): string {
		return 'provider-header';
	}

	/**
	 * Получает CSS-классы для элемента опции
	 */
	static getOptionItemClasses(): string {
		return 'option-item';
	}

	/**
	 * Получает CSS-классы для выбранного элемента опции
	 */
	static getSelectedOptionItemClasses(): string {
		return 'option-item selected';
	}
}
