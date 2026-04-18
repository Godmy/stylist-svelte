import type { ContentType } from '$stylist/input/type/alias/content-type';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}
