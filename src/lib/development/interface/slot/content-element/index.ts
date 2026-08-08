import type { ContentType } from '$stylist/development/type/alias/content-editor-content-type';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}
