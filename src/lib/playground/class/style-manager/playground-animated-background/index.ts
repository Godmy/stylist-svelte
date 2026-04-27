/**
 * Менеджер стилей для компонента RecipePlaygroundAnimatedBackground
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class PlaygroundAnimatedBackgroundStyleManager {
	/**
	 * Получает CSS-классы для основного контейнера
	 */
	static getContainerClasses(): string {
		return 'ambient-bg';
	}

	/**
	 * Получает CSS-классы для градиентного слоя
	 */
	static getWashClasses(): string {
		return 'ambient-bg__wash';
	}

	/**
	 * Получает CSS-классы для размытых фигур
	 */
	static getShapeClasses(): string {
		return 'ambient-bg__shape';
	}

	/**
	 * Получает CSS-классы для светящихся сфер
	 */
	static getOrbClasses(): string {
		return 'ambient-bg__orb';
	}

	/**
	 * Получает CSS-классы для контейнера частиц
	 */
	static getParticlesContainerClasses(): string {
		return 'ambient-bg__particles';
	}

	/**
	 * Получает CSS-классы для частицы
	 */
	static getParticleClasses(): string {
		return 'ambient-bg__particle';
	}

	/**
	 * Получает CSS-классы для геометрического оверлея
	 */
	static getGeoOverlayClasses(): string {
		return 'ambient-bg__geo';
	}

	/**
	 * Получает CSS-классы для обёртки контента
	 */
	static getContentWrapperClasses(): string {
		return 'playground-welcome';
	}
}
