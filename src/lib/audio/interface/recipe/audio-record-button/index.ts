import type { TypeAudioRecording } from '$stylist/audio/type/struct/audio-recording';
import type { HTMLButtonAttributes } from 'svelte/elements';

export interface RecipeAudioRecordButton extends Omit<HTMLButtonAttributes, 'class'> {
	class?: string;
	mimeType?: string;
	fileName?: string;
	audioConstraints?: MediaTrackConstraints | boolean;
	disabled?: boolean;
	startLabel?: string;
	stopLabel?: string;
	saveLabel?: string;
	onRecordingStart?: () => void;
	onRecorded?: (recording: TypeAudioRecording) => void | Promise<void>;
	onError?: (error: Error) => void;
}
