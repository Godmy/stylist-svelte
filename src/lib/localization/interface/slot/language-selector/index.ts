import type { Language } from '$stylist/localization/type/struct/language';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface SlotLanguageSelector {
	languages: Language[];
	currentLanguage?: string;
	onLanguageChange?: (code: string) => void;
	showFlags?: boolean;
	showNativeName?: boolean;
	searchable?: boolean;
	dropdownPlacement?: 'top' | 'bottom';
	variant?: TokenColorTone;
	size?: TokenSize;
	class?: string;
	buttonClass?: string;
	dropdownClass?: string;
	languageClass?: string;
}
