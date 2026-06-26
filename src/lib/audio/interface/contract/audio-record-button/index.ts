import type { HTMLButtonAttributes } from 'svelte/elements';
import type { TypeAudioRecording } from '$stylist/audio/type/struct/audio-recording';

export interface ContractAudioRecordButton extends Omit<HTMLButtonAttributes, 'class'> {
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
