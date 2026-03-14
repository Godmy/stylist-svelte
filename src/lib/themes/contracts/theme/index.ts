import type { BorderRadiusContract } from '../../tokens/border-radius';
import type { BoxShadowContract } from '../../tokens/box-shadows';
import type { ThemeColors } from '../theme-colors';
import type { SpacingContract } from '../../tokens/spacing';
import type { ThemeTypography } from '../theme-typography';
import type {
	DirectionalGradientKey,
	GradientKey,
	RadialGradientKey
} from '../../tokens/gradients';
import type { DurationKey, TransitionEasingKey, TransitionKey } from '../../tokens/motion';
import type { OpacityKey } from '../../tokens/opacity';
import type { SizeKey } from '../../tokens/size';
import type { ZIndexKey } from '../../tokens/z-index';

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



