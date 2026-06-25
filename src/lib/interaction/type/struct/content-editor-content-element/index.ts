import type { ContentType } from '$stylist/token/type/alias/content-editor-content-type';

export type ContentElement = {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
};

