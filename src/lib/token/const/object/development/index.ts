import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_CODE_LANGUAGE } from '$stylist/development/const/array/code-language';
import { TOKEN_CODE_VIEW } from '$stylist/development/const/array/code-view';
import { DEBUG_CONSOLE_LOG_LEVEL } from '$stylist/development/const/array/debug-console-log-level';

export const TOKEN_DEVELOPMENT_SETTING = [
	{ key: 'code-language', label: 'Code Language', domain: 'development', controlKind: 'radio', values: TOKEN_CODE_LANGUAGE },
	{ key: 'code-view', label: 'Code View', domain: 'development', controlKind: 'radio', values: TOKEN_CODE_VIEW },
	{ key: 'debug-console-log-level', label: 'Debug Console Log Level', domain: 'development', controlKind: 'radio', values: DEBUG_CONSOLE_LOG_LEVEL }
] satisfies readonly Token[];