import type { ContentType } from '$stylist/interaction/class/object-manager/content-editor-content-type';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}
