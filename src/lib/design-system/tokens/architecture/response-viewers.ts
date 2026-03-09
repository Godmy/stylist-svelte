import { STATUSES } from '../interaction/statuses';

export const RESPONSE_VIEWER_STATUSES = [
	STATUSES.lifecycle.loading[2],
	STATUSES.lifecycle.loading[3],
	STATUSES.lifecycle.loading[1],
	'info'
] as const;
export type ResponseViewerStatus = (typeof RESPONSE_VIEWER_STATUSES)[number];

export const DOCUMENT_PREVIEW_FORMATS = ['json', 'xml', 'text', 'html'] as const;
export type DocumentPreviewFormat = (typeof DOCUMENT_PREVIEW_FORMATS)[number];
