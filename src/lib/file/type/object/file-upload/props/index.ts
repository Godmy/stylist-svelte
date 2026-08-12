import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type Props = HTMLAttributes<HTMLDivElement> & {
	accept?: string;
	maxSize?: number;
	multiple?: boolean;
	status?: 'idle' | 'uploading' | 'success' | 'error';
	file?: File | null;
	onFileSelect?: (file: File | FileList | null) => void;
	onUpload?: (file: File) => Promise<void>;
	children?: Snippet;
	disabled?: boolean;
	uploadText?: string;
};
