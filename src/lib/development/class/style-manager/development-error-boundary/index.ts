/**
 * Менеджер стилей для компонента DevelopmentErrorBoundary
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class DevelopmentErrorBoundaryStyleManager {
	/**
	 * Получает CSS-классы для основного контейнера
	 */
	static getContainerClasses(additionalClass: string = ''): string {
		return additionalClass || '';
	}

	/**
	 * Получает CSS-классы для контейнера fallback
	 */
	static getFallbackContainerClasses(fallbackClass: string = '', additionalClass: string = ''): string {
		const baseClasses = 'border border-red-200 rounded-lg bg-red-50 p-6';
		const classes = `${baseClasses} ${fallbackClass} ${additionalClass}`.trim();
		return classes;
	}

	/**
	 * Получает CSS-классы для заголовка
	 */
	static getHeaderClasses(): string {
		return 'flex items-start';
	}

	/**
	 * Получает CSS-классы для деталей ошибки
	 */
	static getDetailsClasses(): string {
		return 'mt-4 p-4 bg-white rounded border';
	}

	/**
	 * Получает CSS-классы для действий
	 */
	static getActionsClasses(): string {
		return 'mt-4 flex flex-wrap gap-3';
	}
}
