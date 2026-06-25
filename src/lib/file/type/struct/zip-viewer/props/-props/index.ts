import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';
import type { RestProps } from '$stylist/file/type/struct/zip-viewer/props/rest-props';

export type Props = RestProps & {
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
};
