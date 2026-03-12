import type { BorderRadiusContract } from '../../tokens/border-radius';
import type { BoxShadowContract } from '../../tokens/box-shadows';
import type { ThemeColors } from '../theme-colors';
import type { SpacingContract } from '../../tokens/spacing';
import type { ThemeTypography } from '../theme-typography';

export interface Theme {
	name: string;
	colors: ThemeColors;
	spacing: SpacingContract;
	typography: ThemeTypography;
	borderRadius: BorderRadiusContract;
	boxShadow: BoxShadowContract;
}
