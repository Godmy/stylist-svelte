import type { ContentType } from '../content-editor-state-content-type/index.svelte.ts';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}
