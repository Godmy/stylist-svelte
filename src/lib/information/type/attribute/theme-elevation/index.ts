/**
 * Semantic elevation levels для темизации компонентов.
 * 
 * Вдохновлено Material Design 3 elevation system,
 * но адаптировано для Prezi-like сцены.
 */

export interface ThemeElevation {
	/** Без тени */
	none: string;
	
	/** Уровень 1: лёгкая тень */
	level1: string;
	
	/** Уровень 2: средняя тень */
	level2: string;
	
	/** Уровень 3: высокая тень */
	level3: string;
	
	/** Уровень 4: очень высокая тень */
	level4: string;
	
	/** Уровень 5: максимальная тень */
	level5: string;
	
	/** Focus ring */
	focus: string;
	
	/** Focus ring сильный */
	focusStrong: string;
	
	/** Accent glow */
	accent: string;
	
	/** Accent glow сильный */
	accentStrong: string;
	
	/** Overlay тень */
	overlay: string;
	
	/** Modal тень */
	modal: string;
	
	// ===== Scene-specific elevation =====
	
	/** Scene-specific: dot stage (звезда) */
	star: string;
	
	/** Scene-specific: icon stage */
	icon: string;
	
	/** Scene-specific: pill stage */
	pill: string;
	
	/** Scene-specific: card stage */
	card: string;
	
	/** Scene-specific: card hover */
	cardHover: string;
	
	/** Scene-specific: detailed card */
	detail: string;
	
	/** Scene-specific: focused node */
	focusNode: string;
	
	/** Scene-specific: fullscreen */
	fullscreen: string;
}
