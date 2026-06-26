export type TypeTranscriptionResult = {
	text: string;
	model: string;
	language?: string;
	durationMs: number;
	fileName: string;
	createdAt: Date;
};
