import type { RecordBorderRadius } from '$stylist/architecture/type/record/border-radius';
import type { RecordElevation } from '$stylist/architecture/type/record/elevation';
import type { ThemeColors } from '$stylist/information/type/attribute/theme-colors';
import type { RecordSpacing } from '$stylist/architecture/type/record/spacing';
import type { ThemeTypography } from '$stylist/information/type/attribute/theme-typography';
import type { GradientDirectional } from '$stylist/information/type/gradient/directional';
import type { GradientCustom } from '$stylist/information/type/gradient/custom';
import type { GradientRadial } from '$stylist/information/type/gradient/radial';
import type { TokenDuration } from '$stylist/interaction/type/token/duration';
import type { TokenEasing } from '$stylist/architecture/type/token/easing';
import type { TokenTransition } from '$stylist/information/type/token/transition';
import type { TokenOpacity } from '$stylist/architecture/type/token/opacity';
import { TOKEN_SIZE_DX } from '$stylist/architecture/const/token/size-dx/index';
import { TOKEN_SIZE_REM } from '$stylist/architecture/const/token/size-rem/index';
import type { TokenSizeDx } from '$stylist/architecture/type/token/size-dx/index';
import type { TokenSizeRem } from '$stylist/architecture/type/token/size-rem/index';
import type { TokenZIndex } from '$stylist/architecture/type/token/z-index';
import type { ThemeElevation } from '$stylist/information/type/attribute/theme-elevation';
import type { ThemeScene } from '$stylist/information/type/attribute/theme-scene';

type GradientTokenGroup<K extends string = string> = Record<K, string>;

type MotionTokenGroup = {
	duration: Record<TokenDuration, string>;
	easing: Record<TokenEasing, string>;
	transitions: Record<TokenTransition, string>;
	animations: Record<string, string>;
};

type ThemeSizeKey = TokenSizeRem | TokenSizeDx | 'full';

const THEME_SIZE_REM = Object.fromEntries(
	TOKEN_SIZE_REM.map((size) => [size, size] as const)
) as Record<TokenSizeRem, TokenSizeRem>;

const THEME_SIZE_DX = Object.fromEntries(
	TOKEN_SIZE_DX.map((size) => [size, size] as const)
) as Record<TokenSizeDx, TokenSizeDx>;

export const THEME_SIZE: Record<ThemeSizeKey, string> = {
	...THEME_SIZE_REM,
	...THEME_SIZE_DX,
	full: '9999px'
};

/**
 * Полный контракт темы для дизайн-системы.
 * Включает semantic roles для компонентов и Prezi-like сцены.
 */
export interface Theme {
	/** Идентификатор темы */
	name: string;
	
	/** Цветовая схема (light/dark) */
	scheme?: 'light' | 'dark';
	
	/** Semantic color roles */
	colors: ThemeColors;
	
	/** Spacing contract */
	spacing: RecordSpacing;
	
	/** Typography roles */
	typography: ThemeTypography;
	
	/** Border radius contract */
	borderRadius: RecordBorderRadius;
	
	/** Box shadow / elevation contract */
	boxShadow: RecordElevation;
	
	/** Semantic elevation levels */
	elevation: ThemeElevation;
	
	/** Size scale */
	size: Record<ThemeSizeKey, string>;
	
	/** Opacity scale */
	opacity: Record<TokenOpacity, string>;
	
	/** Z-index layers */
	zIndex: Record<TokenZIndex, string>;
	
	/** Motion tokens */
	motion: MotionTokenGroup;
	
	/** Gradient tokens */
	gradients: {
		types: GradientTokenGroup<GradientCustom>;
		directional: GradientTokenGroup<GradientDirectional>;
		radial: GradientTokenGroup<GradientRadial>;
	};
	
	/** Scene-specific tokens для Prezi-like сцены */
	scene: ThemeScene;
}



