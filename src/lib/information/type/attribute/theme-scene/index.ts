/**
 * Scene-specific токены для Prezi-like сцены.
 * 
 * Описывает визуальное поведение сцены и узлов на разных стадиях semantic zoom:
 * - dot (звезда)
 * - icon (иконка)
 * - pill (пилюля)
 * - minimal (минимальная карточка)
 * - compact (компактная карточка)
 * - detailed (детализированная карточка)
 * - screen (полноэкранный режим)
 */

/**
 * Стадии представления узла (tier)
 */
export type NodeTier = 'dot' | 'icon' | 'pill' | 'minimal' | 'compact' | 'detailed' | 'screen';

/**
 * Токены для узлов сцены на разных tier
 */
export interface SceneNodeTokens {
	/** Радиусы для разных tier */
	radius: Record<NodeTier, string>;
	
	/** Тени для разных tier */
	shadow: Record<NodeTier, string>;
	
	/** Отступы для разных tier */
	padding: Record<NodeTier, string>;
}

/**
 * Токены для поверхности сцены
 */
export interface SceneSurfaceTokens {
	/** Фон далёкого плана (far background) */
	far: string;
	
	/** Фон среднего плана (mid background) */
	mid: string;
	
	/** Фон фокусного плана (focus background) */
	focus: string;
	
	/** Цвет сетки (grid) */
	grid: string;
	
	/** Прозрачность сетки (visible) */
	gridVisibleOpacity: string;
	
	/** Прозрачность сетки (hidden) */
	gridHiddenOpacity: string;
	
	/** Backdrop для фокуса */
	backdrop: string;
	
	/** Сила затемнения (dimming) */
	dimmingStrength: string;
	
	/** Свечение кластера */
	clusterGlow: string;
	
	/** Цвет выделения кластера */
	clusterHighlight: string;
}

/**
 * Переходы для морфинга между tier
 */
export interface SceneTransitions {
	/** Переход dot -> icon */
	dotToIcon: string;
	
	/** Переход icon -> pill */
	iconToPill: string;
	
	/** Переход pill -> minimal */
	pillToMinimal: string;
	
	/** Переход minimal -> compact */
	minimalToCompact: string;
	
	/** Переход compact -> detailed */
	compactToDetailed: string;
	
	/** Переход detailed -> screen */
	detailedToScreen: string;
	
	/** Переход focus -> fullscreen */
	focusToFullscreen: string;
}

/**
 * Scene-specific токены для Prezi-like сцены.
 */
export interface ThemeScene {
	/** Токены для узлов сцены */
	node: SceneNodeTokens;
	
	/** Токены для сцены (surface) */
	surface: SceneSurfaceTokens;
	
	/** Переходы для морфинга tier */
	transitions: SceneTransitions;
}
