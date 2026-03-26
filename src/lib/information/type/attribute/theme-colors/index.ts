import type { ColorScale } from '$stylist/architecture/interface/color-scale/index';
import type { TokenPropertyType } from '$stylist/information/type/token/property-type';

export type GraphPortDataTypeColor = Record<TokenPropertyType, string>;

export interface GraphPortStateColor {
	default: string;
	connected: string;
	hovered: string;
	active: string;
	error: string;
	selected: string;
}

/**
 * Semantic color roles для темизации компонентов.
 * Вдохновлено Material Design 3 color system.
 */
export interface ThemeColors {
	// ===== Brand colors (scales) =====
	/** Основной бренд-цвет и его оттенки */
	primary: ColorScale;
	/** Вторичный бренд-цвет */
	secondary: ColorScale;
	/** Третичный акцентный цвет */
	tertiary: ColorScale;
	/** Нейтральная палитра */
	neutral: ColorScale;
	
	// ===== Status colors (scales) =====
	/** Цвет успеха (positive) */
	success: ColorScale;
	/** Цвет информации (info) */
	info: ColorScale;
	/** Цвет предупреждения (warning) */
	warning: ColorScale;
	/** Цвет ошибки (error) */
	error: ColorScale;
	/** Цвет опасности (danger) */
	danger: ColorScale;
	
	// ===== Background surfaces =====
	background: {
		/** Основной фон приложения */
		primary: string;
		/** Вторичный фон (секции, панели) */
		secondary: string;
		/** Третичный фон (вложенные панели) */
		tertiary: string;
		/** Фон по умолчанию */
		default: string;
		/** Тонкий фон (hover states) */
		subtle: string;
		/** Приподнятый фон (cards, elevated surfaces) */
		raised: string;
		/** Плавающий фон (floating surfaces) */
		floating: string;
		/** Фон контейнера */
		container: string;
		/** Low container */
		containerLow: string;
		/** High container */
		containerHigh: string;
		/** Прозрачный фон */
		transparent: string;
		/** Инвертированный фон */
		inverse: string;
	};
	
	// ===== Text colors =====
	text: {
		/** Основной текст */
		primary: string;
		/** Вторичный текст (subtitles, captions) */
		secondary: string;
		/** Третичный текст (hints, disabled) */
		tertiary: string;
		/** Текст по умолчанию */
		default: string;
		/** Инвертированный текст (на тёмном фоне) */
		inverse: string;
		/** Текст на акцентном фоне */
		onAccent: string;
		/** Ссылки */
		link: string;
	};
	
	// ===== Border colors =====
	border: {
		/** Основная граница */
		primary: string;
		/** Вторичная граница (subtle dividers) */
		secondary: string;
		/** Третичная граница (minimal dividers) */
		tertiary: string;
		/** Граница по умолчанию */
		default: string;
		/** Инвертированная граница */
		inverse: string;
		/** Акцентная граница (focus, selected) */
		accent: string;
	};
	
	// ===== Surface tint colors (для elevation) =====
	surfaceTint: {
		/** Тинт для level 1 */
		level1: string;
		/** Тинт для level 2 */
		level2: string;
		/** Тинт для level 3 */
		level3: string;
		/** Тинт для level 4 */
		level4: string;
		/** Тинт для level 5 */
		level5: string;
	};
	
	// ===== On-color counterparts =====
	/** Цвет контента на primary фоне */
	onPrimary: string;
	/** Цвет контента на secondary фоне */
	onSecondary: string;
	/** Цвет контента на tertiary фоне */
	onTertiary: string;
	/** Цвет контента на success фоне */
	onSuccess: string;
	/** Цвет контента на info фоне */
	onInfo: string;
	/** Цвет контента на warning фоне */
	onWarning: string;
	/** Цвет контента на error фоне */
	onError: string;
	/** Цвет контента на background фоне */
	onBackground: string;
	/** Цвет контента на surface фоне */
	onSurface: string;
	/** Цвет контента на surface container фоне */
	onSurfaceContainer: string;
	
	// ===== Container colors =====
	primaryContainer: string;
	onPrimaryContainer: string;
	secondaryContainer: string;
	onSecondaryContainer: string;
	tertiaryContainer: string;
	onTertiaryContainer: string;
	errorContainer: string;
	onErrorContainer: string;
	successContainer: string;
	onSuccessContainer: string;
	warningContainer: string;
	onWarningContainer: string;
	
	// ===== Outline colors =====
	/** Основная обводка */
	outline: string;
	/** Вторичная обводка (variant) */
	outlineVariant: string;
	/** Обводка по умолчанию */
	outlineDefault: string;
	/** Тонкая обводка */
	outlineSubtle: string;
	/** Сильная обводка */
	outlineStrong: string;
	
	// ===== Shadow and scrim =====
	/** Цвет тени */
	shadow: string;
	/** Цвет скрима (затемнения) */
	scrim: string;
	/** Цвет backdrop (overlay фона) */
	backdrop: string;
	
	// ===== Scene-specific colors (для Prezi-like сцены) =====
	scene: {
		/** Фон далёкого плана (far background) */
		far: string;
		/** Фон среднего плана (mid background) */
		mid: string;
		/** Фон фокусного плана (focus background) */
		focus: string;
		/** Цвет сетки (grid) */
		grid: string;
		/** Цвет точек/звёзд (dot stage) */
		star: string;
		/** Цвет иконок (icon stage) */
		icon: string;
		/** Цвет кластеров (cluster glow) */
		cluster: string;
		/** Цвет выделения (selection) */
		selection: string;
		/** Цвет фокуса (focus glow) */
		focusGlow: string;
	};
	graph: {
		portDataType: GraphPortDataTypeColor;
		portState: GraphPortStateColor;
	};
}
