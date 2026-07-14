import type { Token } from '$stylist/token/type/struct/token';
import { PLAYGROUND_AI_ASSISTANT_AI_PROVIDER_ID } from '$stylist/ai/const/array/playground-ai-assistant-ai-provider-id';
import { PROMPT_VARIABLE_TYPE } from '$stylist/ai/const/array/prompt-variable-type';
import { SENTIMENT_ANALYSIS_STATUS } from '$stylist/ai/const/array/sentiment-analysis-status';

export const TOKEN_AI_SETTING = [
	{ key: 'playground-ai-assistant-ai-provider-id', label: 'Playground Ai Assistant Ai Provider Id', domain: 'ai', controlKind: 'radio', values: PLAYGROUND_AI_ASSISTANT_AI_PROVIDER_ID },
	{ key: 'prompt-variable-type', label: 'Prompt Variable Type', domain: 'ai', controlKind: 'radio', values: PROMPT_VARIABLE_TYPE },
	{ key: 'sentiment-analysis-status', label: 'Sentiment Analysis Status', domain: 'ai', controlKind: 'radio', values: SENTIMENT_ANALYSIS_STATUS }
] satisfies readonly Token[];
