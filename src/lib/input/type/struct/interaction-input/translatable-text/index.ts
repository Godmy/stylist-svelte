import type { TokenTranslation } from '$stylist/localization/type/enum/translation';

export interface TranslatableText {
	id: string;
	key: string;
	original: string;
	translations: Record<string, string>;
	context?: string;
	status: TokenTranslation;
}
