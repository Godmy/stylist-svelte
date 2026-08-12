import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
﻿import type { SlotZipEntry } from '$stylist/file/type/object/zip-viewer/entry';

export type Props = (Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
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
