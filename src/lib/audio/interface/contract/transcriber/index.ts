import type { HTMLAttributes } from 'svelte/elements';
import type { TypeAudioRecording } from '$stylist/audio/type/struct/audio-recording';
import type { TypeTranscriptionResult } from '$stylist/audio/type/struct/transcription-result';

export interface ContractTranscriber extends Omit<HTMLAttributes<HTMLElement>, 'class'> {
	class?: string;
	endpoint?: string;
	model?: string;
	language?: string;
	prompt?: string;
	mimeType?: string;
	fileName?: string;
	audioConstraints?: MediaTrackConstraints | boolean;
	disabled?: boolean;
	autoTranscribe?: boolean;
	recordLabel?: string;
	stopLabel?: string;
	copyLabel?: string;
	copiedLabel?: string;
	onRecordingReady?: (recording: TypeAudioRecording) => void | Promise<void>;
	onTranscribed?: (result: TypeTranscriptionResult) => void | Promise<void>;
	onError?: (error: Error) => void;
}
