import type { Token } from '$stylist/token/type/struct/token';
import { PROMPT_VARIABLE_TYPE } from '$stylist/science/const/array/prompt-variable-type';
import { SENTIMENT_ANALYSIS_STATUS } from '$stylist/science/const/array/sentiment-analysis-status';

export const TOKEN_SCIENCE_SETTING = [
	{ key: 'prompt-variable-type', label: 'Prompt Variable Type', domain: 'science', controlKind: 'radio', values: PROMPT_VARIABLE_TYPE },
	{ key: 'sentiment-analysis-status', label: 'Sentiment Analysis Status', domain: 'science', controlKind: 'radio', values: SENTIMENT_ANALYSIS_STATUS }
] satisfies readonly Token[];