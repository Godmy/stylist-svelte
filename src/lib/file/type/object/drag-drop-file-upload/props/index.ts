import type { HTMLAttributes } from 'svelte/elements';

export type Props = {
	multiple?: boolean;
	accept?: string;
	maxSize?: number;
	disabled?: boolean;
	class?: string;
	dropZoneClass?: string;
	fileListClass?: string;
	fileItemClass?: string;
	buttonClass?: string;
	preview?: boolean;
	onFileSelect?: (files: FileList) => void;
	onFileUpload?: (file: File) => void;
} & HTMLAttributes<HTMLDivElement>;
