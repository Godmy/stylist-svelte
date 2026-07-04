import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export interface SlotTheme {
	'theme-mode'?: TokenThemeMode;
	'theme-scheme'?: TokenThemeScheme;
	'theme-tone'?: TokenColorTone;
}
