import type { Token } from '$stylist/token/type/struct/token';
import { DATA_EXPORTER_FORMAT } from '$stylist/file/const/array/data-exporter-format';
import { TOKEN_DOCUMENT_FORMAT } from '$stylist/file/const/array/document-format';
import { FILE_EXPLORER_VIEW_MODE } from '$stylist/file/const/array/file-explorer-view-mode';
import { FILE_ITEM_TYPE } from '$stylist/file/const/array/file-item-type';
import { UPLOAD_PROGRESS_VARIANT } from '$stylist/file/const/array/upload-progress-variant';
import { UPLOAD_STATUS } from '$stylist/file/const/array/upload-status';

export const TOKEN_FILE_SETTING = [
	{ key: 'data-exporter-format', label: 'Data Exporter Format', domain: 'file', controlKind: 'radio', values: DATA_EXPORTER_FORMAT },
	{ key: 'document-format', label: 'Document Format', domain: 'file', controlKind: 'radio', values: TOKEN_DOCUMENT_FORMAT },
	{ key: 'file-explorer-view-mode', label: 'File Explorer View Mode', domain: 'file', controlKind: 'radio', values: FILE_EXPLORER_VIEW_MODE },
	{ key: 'file-item-type', label: 'File Item Type', domain: 'file', controlKind: 'radio', values: FILE_ITEM_TYPE },
	{ key: 'upload-progress-variant', label: 'Upload Progress Variant', domain: 'file', controlKind: 'radio', values: UPLOAD_PROGRESS_VARIANT },
	{ key: 'upload-status', label: 'Upload Status', domain: 'file', controlKind: 'radio', values: UPLOAD_STATUS }
] satisfies readonly Token[];