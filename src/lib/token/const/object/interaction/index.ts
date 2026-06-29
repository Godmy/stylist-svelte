import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_APPEARANCE } from '$stylist/interaction/const/array/appearance';
import { TOKEN_AVAILABILITY } from '$stylist/interaction/const/array/availability';
import { CONTENT_EDITOR_CONTENT_TYPE } from '$stylist/interaction/const/array/content-editor-content-type';
import { TOKEN_FLOW } from '$stylist/interaction/const/array/flow';
import { TOKEN_INTERACTION } from '$stylist/interaction/const/array/interaction';
import { INTERACTION_FEEDBACK } from '$stylist/interaction/const/array/interaction-feedback';
import { TOKEN_LOADING } from '$stylist/interaction/const/array/loading';
import { TOKEN_SEVERITY } from '$stylist/interaction/const/array/sevetity';
import { TOKEN_SORT_DIRECTION } from '$stylist/interaction/const/array/sort-direction';
import { TOKEN_TEST } from '$stylist/interaction/const/array/test';
import { TOKEN_TRIGGER } from '$stylist/interaction/const/array/trigger';

export const TOKEN_INTERACTION_SETTING = [
	{ key: 'appearance', label: 'Appearance', domain: 'interaction', controlKind: 'radio', values: TOKEN_APPEARANCE },
	{ key: 'availability', label: 'Availability', domain: 'interaction', controlKind: 'radio', values: TOKEN_AVAILABILITY },
	{ key: 'content-editor-content-type', label: 'Content Editor Content Type', domain: 'interaction', controlKind: 'radio', values: CONTENT_EDITOR_CONTENT_TYPE },
	{ key: 'flow', label: 'Flow', domain: 'interaction', controlKind: 'radio', values: TOKEN_FLOW },
	{ key: 'interaction', label: 'Interaction', domain: 'interaction', controlKind: 'radio', values: TOKEN_INTERACTION },
	{ key: 'interaction-feedback', label: 'Interaction Feedback', domain: 'interaction', controlKind: 'radio', values: INTERACTION_FEEDBACK },
	{ key: 'loading', label: 'Loading', domain: 'interaction', controlKind: 'radio', values: TOKEN_LOADING },
	{ key: 'sevetity', label: 'Sevetity', domain: 'interaction', controlKind: 'radio', values: TOKEN_SEVERITY },
	{ key: 'sort-direction', label: 'Sort Direction', domain: 'interaction', controlKind: 'radio', values: TOKEN_SORT_DIRECTION },
	{ key: 'test', label: 'Test', domain: 'interaction', controlKind: 'radio', values: TOKEN_TEST },
	{ key: 'trigger', label: 'Trigger', domain: 'interaction', controlKind: 'radio', values: TOKEN_TRIGGER }
] satisfies readonly Token[];