import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';
import { TOKEN_THEME_TONE } from '$stylist/theme/const/array/theme-tone';
import { TOKEN_TOKEN_VALUE } from '$stylist/theme/const/array/token-value';

export const TOKEN_THEME_SETTING = [
	{ key: 'theme-mode', label: 'Theme Mode', domain: 'theme', controlKind: 'radio', values: TOKEN_THEME_MODE },
	{ key: 'theme-scheme', label: 'Theme Scheme', domain: 'theme', controlKind: 'radio', values: TOKEN_THEME_SCHEME },
	{ key: 'theme-tone', label: 'Theme Tone', domain: 'theme', controlKind: 'radio', values: TOKEN_THEME_TONE },
	{ key: 'token-value', label: 'Token Value', domain: 'theme', controlKind: 'radio', values: TOKEN_TOKEN_VALUE }
] satisfies readonly Token[];