import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface FileMetadataContract {
	/** Имя файла */
	name: string;
	/** Размер файла (в байтах или строковом формате) */
	size: string | number;
	/** Тип файла (MIME type или расширение) */
	type: string;
	/** Дата создания/обновления */
	date?: string;
}

export interface AttachmentContract {
	id: string;
	name: string;
	type: string;
	size: number;
	url?: string;
	previewUrl?: string;
}

export interface AttachmentPreviewEventsContract {
	onDownload?: (attachment: AttachmentContract) => void;
	onRemove?: (attachment: AttachmentContract) => void;
}

export interface AttachmentPreviewContract extends AttachmentPreviewEventsContract {
	/** Attachment data */
	attachment: AttachmentContract;
	/** Show actions */
	showActions?: boolean;
}
