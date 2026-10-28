import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) =>
	['components', 'playground', 'about', 'settings'].includes(param);
