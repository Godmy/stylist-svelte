import type { Snippet } from 'svelte';

export interface BehaviorFileUploadEvents {
	onFileSelect?: (file: File | FileList | null) => void;
	onUpload?: (file: File) => Promise<void>;
}
