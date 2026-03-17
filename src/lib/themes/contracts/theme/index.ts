import type { BorderRadiusContract } from '$stylist/themes/tokens/border-radius';
import type { BoxShadowContract } from '$stylist/themes/tokens/box-shadows';
import type { ThemeColors } from '$stylist/themes/contracts/theme-colors';
import type { SpacingContract } from '$stylist/themes/tokens/spacing';
import type { ThemeTypography } from '$stylist/themes/contracts/theme-typography';
import type {
	DirectionalGradientKey,
	GradientKey,
	RadialGradientKey
} from '../../tokens/gradients';
import type { DurationKey, TransitionEasingKey, TransitionKey } from '$stylist/themes/tokens/motion';
import type { OpacityKey } from '$stylist/themes/tokens/opacity';
import type { SizeKey } from '$stylist/themes/tokens/size';
import type { ZIndexKey } from '$stylist/themes/tokens/z-index';

type GradientTokenGroup<K extends string = string> = Record<K, string>;

type MotionTokenGroup = {
	duration: Record<DurationKey, string>;
	easing: Record<TransitionEasingKey, string>;
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
	opacity: Record<OpacityKey, string>;
	zIndex: Record<ZIndexKey, string>;
	motion: MotionTokenGroup;
	gradients: {
		types: GradientTokenGroup<GradientKey>;
		directional: GradientTokenGroup<DirectionalGradientKey>;
		radial: GradientTokenGroup<RadialGradientKey>;
	};
}



