import type { BorderRadiusContract } from '$stylist/design-system/defaults/theme/border-radius';
import type { BoxShadowContract } from '$stylist/design-system/defaults/theme/box-shadows';
import type { ThemeColors } from '$stylist/design-system/contracts/theme/theme-colors';
import type { SpacingContract } from '$stylist/design-system/defaults/theme/spacing';
import type { ThemeTypography } from '$stylist/design-system/contracts/theme/theme-typography';
import type { DirectionalGradientKey } from '$stylist/design-system/defaults/theme/gradient-directional';
import type { GradientKey } from '$stylist/design-system/defaults/theme/gradient-type';
import type { RadialGradientKey } from '$stylist/design-system/defaults/theme/gradient-radial';
import type { TokenDuration } from '$stylist/design-system/tokens/interaction/duration';
import type { TokenEasing } from '$stylist/design-system/tokens/architecture/easing';
import type { TransitionKey } from '$stylist/design-system/defaults/theme/transitions';
import type { TokenOpacity } from '$stylist/design-system/tokens/architecture/opacity';
import type { SizeKey } from '$stylist/design-system/defaults/theme/size';
import type { TokenZIndex } from '$stylist/design-system/tokens/architecture/z-index';

type GradientTokenGroup<K extends string = string> = Record<K, string>;

type MotionTokenGroup = {
	duration: Record<TokenDuration, string>;
	easing: Record<TokenEasing, string>;
	transitions: Record<TransitionKey, string>;
	animations: Record<string, string>;
};

export interface Theme {
	name: string;
	colors: ThemeColors;
	spacing: SpacingContract;
	typography: ThemeTypography;
	borderRadius: BorderRadiusContract;
	boxShadow: BoxShadowContract;
	size: Record<SizeKey, string>;
	opacity: Record<TokenOpacity, string>;
	zIndex: Record<TokenZIndex, string>;
	motion: MotionTokenGroup;
	gradients: {
		types: GradientTokenGroup<GradientKey>;
		directional: GradientTokenGroup<DirectionalGradientKey>;
		radial: GradientTokenGroup<RadialGradientKey>;
	};
}



