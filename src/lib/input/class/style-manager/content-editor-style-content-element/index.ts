import type { ContentType } from '$stylist/input/class/style-manager/content-editor-style-content-type';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}
