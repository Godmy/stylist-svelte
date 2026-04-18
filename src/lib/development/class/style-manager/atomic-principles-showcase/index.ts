/**
 * Менеджер стилей для компонента RecipeAtomicPrinciplesShowcase
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class AtomicPrinciplesShowcaseStyleManager {
	/**
	 * Получает CSS-классы для основного контейнера секции
	 */
	static getSectionClasses(additionalClass: string = ''): string {
		const baseClasses =
			'py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800';
		return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
	}

	/**
	 * Получает CSS-классы для внутреннего контейнера
	 */
	static getInnerContainerClasses(): string {
		return 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
	}

	/**
	 * Получает CSS-классы для текстового заголовка
	 */
	static getTextCenterClasses(): string {
		return 'text-center mb-20';
	}

	/**
	 * Получает CSS-классы для бейджа
	 */
	static getBadgeClasses(): string {
		return 'inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-full mb-6 border-2 border-orange-300 dark:border-orange-700';
	}

	/**
	 * Получает CSS-классы для иконки бейджа
	 */
	static getBadgeIconClasses(): string {
		return 'w-5 h-5 text-orange-600 dark:text-orange-400';
	}

	/**
	 * Получает CSS-классы для текста бейджа
	 */
	static getBadgeTextClasses(): string {
		return 'text-sm font-bold text-orange-900 dark:text-orange-300';
	}

	/**
	 * Получает CSS-классы для заголовка h2
	 */
	static getTitleClasses(): string {
		return 'text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6';
	}

	/**
	 * Получает CSS-классы для описания
	 */
	static getDescriptionClasses(): string {
		return 'text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto';
	}

	/**
	 * Получает CSS-классы для сетки карточек
	 */
	static getGridClasses(): string {
		return 'grid md:grid-cols-3 gap-10';
	}

	/**
	 * Получает CSS-классы для карточки уровня (atom/molecule/organism)
	 */
	static getLevelCardClasses(colorTheme: 'blue' | 'purple' | 'green'): string {
		const baseClasses =
			'group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl p-10 transition-all hover:scale-105 hover:-translate-y-2';
		const colorClasses: Record<string, string> = {
			blue: 'border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-400',
			purple: 'border-2 border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-400',
			green: 'border-2 border-green-300 dark:border-green-700 hover:border-green-500 dark:hover:border-green-400'
		};
		return `${baseClasses} ${colorClasses[colorTheme] ?? colorClasses.blue}`;
	}

	/**
	 * Получает CSS-классы для контейнера иконки уровня
	 */
	static getLevelIconContainerClasses(colorTheme: 'blue' | 'purple' | 'green'): string {
		const gradients: Record<string, string> = {
			blue: 'bg-gradient-to-br from-blue-500 to-cyan-500',
			purple: 'bg-gradient-to-br from-purple-500 to-pink-500',
			green: 'bg-gradient-to-br from-green-500 to-emerald-500'
		};
		return `w-24 h-24 ${gradients[colorTheme] ?? gradients.blue} rounded-2xl flex items-center justify-center mb-8 float-animation shadow-lg`;
	}

	/**
	 * Получает CSS-классы для иконки уровня
	 */
	static getLevelIconClasses(): string {
		return 'w-12 h-12 text-white';
	}

	/**
	 * Получает CSS-классы для заголовка уровня (h3)
	 */
	static getLevelTitleClasses(): string {
		return 'text-3xl font-black text-gray-900 dark:text-white mb-4';
	}

	/**
	 * Получает CSS-классы для описания уровня
	 */
	static getLevelDescriptionClasses(): string {
		return 'text-gray-600 dark:text-gray-400 mb-6 min-h-[60px]';
	}

	/**
	 * Получает CSS-классы для счётчика компонентов
	 */
	static getCounterClasses(colorTheme: 'blue' | 'purple' | 'green'): string {
		const colors: Record<string, string> = {
			blue: 'text-blue-600 dark:text-blue-400',
			purple: 'text-purple-600 dark:text-purple-400',
			green: 'text-green-600 dark:text-green-400'
		};
		return `text-5xl font-black ${colors[colorTheme] ?? colors.blue}`;
	}

	/**
	 * Получает CSS-классы для подписи счётчика
	 */
	static getCounterLabelClasses(): string {
		return 'text-sm text-gray-500 dark:text-gray-400 mt-2 font-semibold';
	}
}
