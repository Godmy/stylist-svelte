import type { ContentType } from '$stylist/input/type/enum/content-editor-style-content-type';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}
