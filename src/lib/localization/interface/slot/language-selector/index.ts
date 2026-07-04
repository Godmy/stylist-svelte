import type { Language } from '$stylist/control/type/struct/language';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface SlotLanguageSelector {
	languages: Language[];
	currentLanguage?: string;
	onLanguageChange?: (code: string) => void;
	showFlags?: boolean;
	showNativeName?: boolean;
	searchable?: boolean;
	dropdownPlacement?: 'top' | 'bottom';
	variant?: TokenAppearance;
	size?: TokenSize;
	class?: string;
	buttonClass?: string;
	dropdownClass?: string;
	languageClass?: string;
}
