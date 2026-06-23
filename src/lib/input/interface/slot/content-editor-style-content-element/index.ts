import type { ContentType } from '$stylist/interaction/type/enum/content-editor-content-type';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}
