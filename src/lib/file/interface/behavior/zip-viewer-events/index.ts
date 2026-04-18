import type { Snippet } from 'svelte';
import type { SlotZipEntry } from '$stylist/file/interface/slot/zip-entry';

export interface BehaviorZipViewerEvents {
	onEntryClick?: (entry: SlotZipEntry) => void;
	onEntryPreview?: (entry: SlotZipEntry) => void;
	onEntryDownload?: (entry: SlotZipEntry) => void;
	onEntryExtract?: (entry: SlotZipEntry) => void;
}
