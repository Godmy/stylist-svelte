import type { Token } from '$stylist/token/type/struct/token';
import { PLAYGROUND_AI_ASSISTANT_AI_PROVIDER_ID } from '$stylist/ai/const/array/playground-ai-assistant-ai-provider-id';

export const TOKEN_AI_SETTING = [
	{ key: 'playground-ai-assistant-ai-provider-id', label: 'Playground Ai Assistant Ai Provider Id', domain: 'ai', controlKind: 'radio', values: PLAYGROUND_AI_ASSISTANT_AI_PROVIDER_ID }
] satisfies readonly Token[];