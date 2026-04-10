import type { IMessageComposerProps } from '$stylist/communication/interface/component/message-composer/other';
import { MessageComposerStyleManager } from '$stylist/communication/class/style-manager/message-composer';

export const createMessageComposerState = (props: IMessageComposerProps) => {
	let messageText = $state(props.value ?? '');

	$effect(() => {
		messageText = props.value ?? '';
	});

	const containerClasses = $derived(
		MessageComposerStyleManager.getContainerClasses(String(props.class ?? ''))
	);

	const formClasses = $derived(MessageComposerStyleManager.getFormClasses());

	const attachmentButtonClasses = $derived(MessageComposerStyleManager.getAttachmentButtonClasses());

	const inputContainerClasses = $derived(MessageComposerStyleManager.getInputContainerClasses());

	const inputClasses = $derived(
		MessageComposerStyleManager.getInputClasses(props.inputClass ?? '')
	);

	const sendButtonClasses = $derived(
		MessageComposerStyleManager.getSendButtonClasses(props.buttonClass ?? '')
	);

	const voiceButtonClasses = $derived(
		MessageComposerStyleManager.getVoiceButtonClasses(props.buttonClass ?? '')
	);

	const showSendButton = $derived(messageText.trim().length > 0);

	const showVoiceButton = $derived(!showSendButton && (props.showVoiceButton ?? true));

	const showAttachmentButton = $derived(props.showAttachmentButton ?? true);

	const disabled = $derived(props.disabled ?? false);

	function handleInput(e: Event) {
		const target = e.target as HTMLTextAreaElement;
		messageText = target.value;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (messageText.trim() && !disabled) {
			props.onSendMessage?.(messageText);
			messageText = '';
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e);
		}
	}

	function handleAttachmentClick() {
		props.onAttachmentClick?.();
	}

	function handleVoiceClick() {
		props.onVoiceClick?.();
	}

	return {
		get messageText() {
			return messageText;
		},
		set messageText(value: string) {
			messageText = value;
		},
		get containerClasses() {
			return containerClasses;
		},
		get formClasses() {
			return formClasses;
		},
		get attachmentButtonClasses() {
			return attachmentButtonClasses;
		},
		get inputContainerClasses() {
			return inputContainerClasses;
		},
		get inputClasses() {
			return inputClasses;
		},
		get sendButtonClasses() {
			return sendButtonClasses;
		},
		get voiceButtonClasses() {
			return voiceButtonClasses;
		},
		get showSendButton() {
			return showSendButton;
		},
		get showVoiceButton() {
			return showVoiceButton;
		},
		get showAttachmentButton() {
			return showAttachmentButton;
		},
		get disabled() {
			return disabled;
		},
		handleInput,
		handleSubmit,
		handleKeyDown,
		handleAttachmentClick,
		handleVoiceClick
	};
};

export default createMessageComposerState;
