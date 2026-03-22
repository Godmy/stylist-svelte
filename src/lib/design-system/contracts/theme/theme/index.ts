import type { BorderRadiusContract } from '$stylist/design-system/tokens/theme/border-radius';
import type { BoxShadowContract } from '$stylist/design-system/tokens/theme/box-shadows';
import type { ThemeColors } from '$stylist/design-system/contracts/theme/theme-colors';
import type { SpacingContract } from '$stylist/design-system/tokens/theme/spacing';
import type { ThemeTypography } from '$stylist/design-system/contracts/theme/theme-typography';
import type {
	DirectionalGradientKey,
	GradientKey,
	RadialGradientKey
} from '$stylist/design-system/tokens/theme/gradients';
import type { DurationKey, TransitionEasingKey, TransitionKey } from '$stylist/design-system/tokens/theme/motion';
import type { OpacityKey } from '$stylist/design-system/tokens/theme/opacity';
import type { SizeKey } from '$stylist/design-system/tokens/theme/size';
import type { ZIndexKey } from '$stylist/design-system/tokens/theme/z-index';

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



