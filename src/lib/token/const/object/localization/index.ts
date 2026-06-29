import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_TRANSLATION } from '$stylist/localization/const/array/translation';
import { TOKEN_TRANSLATION_EDITOR_ICON } from '$stylist/localization/const/array/translation-editor-icon';

export const TOKEN_LOCALIZATION_SETTING = [
	{ key: 'translation', label: 'Translation', domain: 'localization', controlKind: 'radio', values: TOKEN_TRANSLATION },
	{ key: 'translation-editor-icon', label: 'Translation Editor Icon', domain: 'localization', controlKind: 'radio', values: TOKEN_TRANSLATION_EDITOR_ICON }
] satisfies readonly Token[];