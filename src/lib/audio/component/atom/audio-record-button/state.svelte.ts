import type { RecipeAudioRecordButton } from '$stylist/audio/interface/recipe/audio-record-button';
import type { TypeAudioRecording } from '$stylist/audio/type/struct/audio-recording';
import { TOKEN_AUDIO_ICON } from '$stylist/audio/const/record/audio-icon';

export function createAudioRecordButtonState(props: RecipeAudioRecordButton) {
	let mediaRecorder = $state<MediaRecorder | null>(null);
	let stream = $state<MediaStream | null>(null);
	let chunks = $state<BlobPart[]>([]);
	let recording = $state<TypeAudioRecording | null>(null);
	let isRecording = $state(false);
	let isProcessing = $state(false);
	let errorMessage = $state('');
	let startedAt = $state(0);

	const isSupported = $derived(
		typeof navigator !== 'undefined' &&
			Boolean(navigator.mediaDevices?.getUserMedia) &&
			typeof MediaRecorder !== 'undefined'
	);
	const mimeType = $derived(props.mimeType ?? 'audio/webm');
	const fileName = $derived(props.fileName ?? `audio-message-${Date.now()}.webm`);
	const isDisabled = $derived(Boolean(props.disabled || isProcessing || !isSupported));
	const buttonLabel = $derived(isRecording ? (props.stopLabel ?? 'Stop') : (props.startLabel ?? 'Record'));
	const statusLabel = $derived(
		isRecording
			? (props.saveLabel ?? 'Recording')
			: recording
				? (props.saveLabel ?? 'Audio ready')
				: ''
	);
	const iconName = $derived(isRecording ? TOKEN_AUDIO_ICON.SQUARE : TOKEN_AUDIO_ICON.MIC);
	const className = $derived(props.class ?? '');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			mimeType: _mimeType,
			fileName: _fileName,
			audioConstraints: _audioConstraints,
			disabled: _disabled,
			startLabel: _startLabel,
			stopLabel: _stopLabel,
			saveLabel: _saveLabel,
			onRecordingStart: _onRecordingStart,
			onRecorded: _onRecorded,
			onError: _onError,
			...rest
		} = props;
		return rest;
	});

	function reportError(error: unknown) {
		const nextError = error instanceof Error ? error : new Error(String(error));
		errorMessage = nextError.message;
		props.onError?.(nextError);
	}

	function stopStream() {
		stream?.getTracks().forEach((track) => track.stop());
		stream = null;
	}

	async function finishRecording() {
		isProcessing = true;
		try {
			const blob = new Blob(chunks, { type: mediaRecorder?.mimeType || mimeType });
			const url = URL.createObjectURL(blob);
			const nextRecording = {
				blob,
				file: new File([blob], fileName, { type: blob.type }),
				url,
				mimeType: blob.type,
				durationMs: Date.now() - startedAt,
				fileName,
				createdAt: new Date()
			};
			recording = nextRecording;
			await props.onRecorded?.(nextRecording);
		} catch (error) {
			reportError(error);
		} finally {
			isProcessing = false;
			stopStream();
		}
	}

	async function startRecording() {
		if (isDisabled || isRecording) return;
		try {
			errorMessage = '';
			recording = null;
			chunks = [];
			stream = await navigator.mediaDevices.getUserMedia({
				audio: props.audioConstraints ?? true
			});
			const options =
				mimeType && MediaRecorder.isTypeSupported(mimeType) ? { mimeType } : undefined;
			mediaRecorder = new MediaRecorder(stream, options);
			mediaRecorder.ondataavailable = (event) => {
				if (event.data.size > 0) chunks = [...chunks, event.data];
			};
			mediaRecorder.onstop = () => {
				void finishRecording();
			};
			startedAt = Date.now();
			isRecording = true;
			mediaRecorder.start();
			props.onRecordingStart?.();
		} catch (error) {
			isRecording = false;
			stopStream();
			reportError(error);
		}
	}

	function stopRecording() {
		if (!mediaRecorder || !isRecording) return;
		isRecording = false;
		mediaRecorder.stop();
	}

	function toggleRecording() {
		if (isRecording) {
			stopRecording();
		} else {
			void startRecording();
		}
	}

	return {
		get isSupported() {
			return isSupported;
		},
		get isRecording() {
			return isRecording;
		},
		get isProcessing() {
			return isProcessing;
		},
		get isDisabled() {
			return isDisabled;
		},
		get recording() {
			return recording;
		},
		get errorMessage() {
			return errorMessage;
		},
		get buttonLabel() {
			return buttonLabel;
		},
		get statusLabel() {
			return statusLabel;
		},
		get iconName() {
			return iconName;
		},
		get className() {
			return className;
		},
		get restProps() {
			return restProps;
		},
		toggleRecording
	};
}
