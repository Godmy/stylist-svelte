export interface BehaviorDragDropFileUploadEvents {
	onFileSelect?: (files: FileList) => void;
	onFileUpload?: (file: File) => void;
}
