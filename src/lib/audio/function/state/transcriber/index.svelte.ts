import type { RecipeTranscriber } from '$stylist/audio/interface/recipe/transcriber';
import type { TypeAudioRecording } from '$stylist/audio/type/struct/audio-recording';
import type { TypeTranscriberStatus } from '$stylist/audio/type/alias/transcriber-status';
import type { TypeTranscriptionResult } from '$stylist/audio/type/struct/transcription-result';

export function createTranscriberState(props: RecipeTranscriber) {
	let mediaRecorder = $state<MediaRecorder | null>(null);
	let stream = $state<MediaStream | null>(null);
	let chunks = $state<BlobPart[]>([]);
	let recording = $state<TypeAudioRecording | null>(null);
	let transcription = $state<TypeTranscriptionResult | null>(null);
	let status = $state<TypeTranscriberStatus>('idle');
	let progress = $state(0);
	let errorMessage = $state('');
	let copied = $state(false);
	let startedAt = $state(0);

	const isSupported = $derived(
		typeof navigator !== 'undefined' &&
			Boolean(navigator.mediaDevices?.getUserMedia) &&
			typeof MediaRecorder !== 'undefined'
	);
	const endpoint = $derived(props.endpoint ?? '/api/transcription');
	const model = $derived(props.model ?? 'faster-whisper-base');
	const mimeType = $derived(props.mimeType ?? 'audio/webm');
	const fileName = $derived(props.fileName ?? `transcriber-${Date.now()}.webm`);
	const isRecording = $derived(status === 'recording');
	const isBusy = $derived(status === 'processing' || status === 'uploading' || status === 'transcribing');
	const canRecord = $derived(Boolean(isSupported && !props.disabled && !isBusy));
	const canCopy = $derived(Boolean(transcription?.text && status === 'done'));
	const className = $derived(props.class ?? '');
	const actionLabel = $derived(
		isRecording ? (props.stopLabel ?? 'Stop') : (props.recordLabel ?? 'Record')
	);
	const copyLabel = $derived(copied ? (props.copiedLabel ?? 'Copied') : (props.copyLabel ?? 'Copy'));
	const statusLabel = $derived.by(() => {
		if (!isSupported) return 'Recording is not supported in this browser';
		if (status === 'recording') return 'Recording audio';
		if (status === 'processing') return 'Preparing audio';
		if (status === 'uploading') return 'Uploading audio';
		if (status === 'transcribing') return 'Transcribing audio';
		if (status === 'done') return 'Transcription ready';
		if (status === 'error') return 'Transcription failed';
		return 'Ready';
	});

	const restProps = $derived.by(() => {
		const {
			class: _class,
			endpoint: _endpoint,
			model: _model,
			language: _language,
			prompt: _prompt,
			mimeType: _mimeType,
			fileName: _fileName,
			audioConstraints: _audioConstraints,
			disabled: _disabled,
			autoTranscribe: _autoTranscribe,
			recordLabel: _recordLabel,
			stopLabel: _stopLabel,
			copyLabel: _copyLabel,
			copiedLabel: _copiedLabel,
			onRecordingReady: _onRecordingReady,
			onTranscribed: _onTranscribed,
			onError: _onError,
			...rest
		} = props;
		return rest;
	});

	function reportError(error: unknown) {
		const nextError = error instanceof Error ? error : new Error(String(error));
		status = 'error';
		progress = 0;
		errorMessage = nextError.message;
		props.onError?.(nextError);
	}

	function stopStream() {
		stream?.getTracks().forEach((track) => track.stop());
		stream = null;
	}

	async function createRecording() {
		status = 'processing';
		progress = 25;
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
		await props.onRecordingReady?.(nextRecording);
		if (props.autoTranscribe ?? true) {
			await transcribeRecording(nextRecording);
		} else {
			status = 'done';
			progress = 100;
		}
	}

	async function transcribeRecording(nextRecording: TypeAudioRecording) {
		status = 'uploading';
		progress = 45;
		const body = new FormData();
		body.set('file', nextRecording.file);
		body.set('model', model);
		if (props.language) body.set('language', props.language);
		if (props.prompt) body.set('prompt', props.prompt);

		const response = await fetch(endpoint, {
			method: 'POST',
			body
		});
		progress = 75;
		status = 'transcribing';
		const payload = await response.json();
		if (!response.ok) {
			throw new Error(payload.error ?? 'Transcription failed');
		}

		const result = {
			text: String(payload.text ?? ''),
			model: String(payload.model ?? model),
			language: typeof payload.language === 'string' ? payload.language : props.language,
			durationMs: Date.now() - startedAt,
			fileName: nextRecording.fileName,
			createdAt: new Date()
		};
		transcription = result;
		status = 'done';
		progress = 100;
		await props.onTranscribed?.(result);
	}

	async function startRecording() {
		if (!canRecord || isRecording) return;
		try {
			errorMessage = '';
			copied = false;
			recording = null;
			transcription = null;
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
				void createRecording().catch(reportError).finally(stopStream);
			};
			startedAt = Date.now();
			status = 'recording';
			progress = 10;
			mediaRecorder.start();
		} catch (error) {
			stopStream();
			reportError(error);
		}
	}

	function stopRecording() {
		if (!mediaRecorder || !isRecording) return;
		mediaRecorder.stop();
	}

	function toggleRecording() {
		if (isRecording) {
			stopRecording();
		} else {
			void startRecording();
		}
	}

	async function copyTranscript() {
		if (!transcription?.text) return;
		await navigator.clipboard.writeText(transcription.text);
		copied = true;
		window.setTimeout(() => {
			copied = false;
		}, 1600);
	}

	return {
		get isSupported() {
			return isSupported;
		},
		get isRecording() {
			return isRecording;
		},
		get isBusy() {
			return isBusy;
		},
		get canRecord() {
			return canRecord;
		},
		get canCopy() {
			return canCopy;
		},
		get status() {
			return status;
		},
		get statusLabel() {
			return statusLabel;
		},
		get progress() {
			return progress;
		},
		get errorMessage() {
			return errorMessage;
		},
		get recording() {
			return recording;
		},
		get transcription() {
			return transcription;
		},
		get actionLabel() {
			return actionLabel;
		},
		get copyLabel() {
			return copyLabel;
		},
		get className() {
			return className;
		},
		get restProps() {
			return restProps;
		},
		toggleRecording,
		copyTranscript
	};
}
