import type { FileItemType } from '$stylist/file/type/alias/file-item-type';
import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeZipViewer
	extends ComputeIntersectAll<[({
entries: SlotZipEntry[];
	archiveName?: string;
	class?: string;
	entryClass?: string;
	headerClass?: string;
	onEntryClick?: (entry: SlotZipEntry) => void;
	onEntryPreview?: (entry: SlotZipEntry) => void;
	onEntryDownload?: (entry: SlotZipEntry) => void;
	onEntryExtract?: (entry: SlotZipEntry) => void;
	searchable?: boolean;
	showPath?: boolean;
	enableFiltering?: boolean;
	defaultExpanded?: boolean;
	disabled?: boolean;
	[key: string]: unknown;
}), SlotChildren]> {
	onEntryClick?: (entry: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	compressedSize?: number;
	modified?: Date;
	isText?: boolean;
	path: string;
	parentPath?: string;
})) => void;
	onEntryPreview?: (entry: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	compressedSize?: number;
	modified?: Date;
	isText?: boolean;
	path: string;
	parentPath?: string;
})) => void;
	onEntryDownload?: (entry: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	compressedSize?: number;
	modified?: Date;
	isText?: boolean;
	path: string;
	parentPath?: string;
})) => void;
	onEntryExtract?: (entry: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	compressedSize?: number;
	modified?: Date;
	isText?: boolean;
	path: string;
	parentPath?: string;
})) => void;
}