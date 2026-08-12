export type TypeAudioRecording = {
	blob: Blob;
	file: File;
	url: string;
	mimeType: string;
	durationMs: number;
	fileName: string;
	createdAt: Date;
};
