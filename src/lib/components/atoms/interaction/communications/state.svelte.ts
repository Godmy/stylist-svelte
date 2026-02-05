import {
  DEFAULT_MESSAGE_INPUT_DISABLED,
  DEFAULT_MESSAGE_INPUT_PLACEHOLDER,
  DEFAULT_MESSAGE_INPUT_SHOW_ATTACHMENT,
  DEFAULT_MESSAGE_INPUT_SHOW_EMOJI,
  DEFAULT_MESSAGE_INPUT_SHOW_SEND,
  getMessageInputActionButtonClasses,
  getMessageInputActionButtonsClasses,
  getMessageInputContainerClasses,
  getMessageInputFieldClasses,
  getMessageInputSendButtonClasses
} from './helpers';
import {
  DEFAULT_MESSAGE_THREAD_MESSAGE_VARIANT,
  DEFAULT_MESSAGE_THREAD_VARIANT,
  getMessageThreadContainerClasses,
  getMessageThreadHeaderClasses,
  getMessageThreadHostClasses,
  getMessageThreadLoadingClasses,
  getMessageThreadMessageContainerClasses,
  getMessageThreadSpinnerClasses,
  getMessageThreadVariantClass
} from './helpers';
import type { ChatMessageStatus, ChatMessageVariant } from './helpers';
import type { MessageThreadMessage, MessageThreadVariant } from './helpers';

export type MessageInputProps = {
  class?: string;
  disabled?: boolean;
  placeholder?: string;
  showAttachment?: boolean;
  showEmoji?: boolean;
  showSend?: boolean;
};

export type MessageThreadProps = {
  class?: string;
  title?: string;
  messages?: MessageThreadMessage[];
  containerClass?: string;
  messageContainerClass?: string;
  headerClass?: string;
  loading?: boolean;
  variant?: MessageThreadVariant;
  messageVariant?: ChatMessageVariant;
};

export type ChatMessageProps = {
  id: string;
  text: string;
  sender: string;
  senderAvatar?: string;
  timestamp: string;
  status?: ChatMessageStatus;
  isOwn: boolean;
};

export const createMessageInputState = (props: MessageInputProps) => {
  const disabled = props.disabled ?? DEFAULT_MESSAGE_INPUT_DISABLED;
  const placeholder = props.placeholder ?? DEFAULT_MESSAGE_INPUT_PLACEHOLDER;
  const showAttachment = props.showAttachment ?? DEFAULT_MESSAGE_INPUT_SHOW_ATTACHMENT;
  const showEmoji = props.showEmoji ?? DEFAULT_MESSAGE_INPUT_SHOW_EMOJI;
  const showSend = props.showSend ?? DEFAULT_MESSAGE_INPUT_SHOW_SEND;

  return {
    disabled,
    placeholder,
    showAttachment, // Keep original for backward compatibility
    showEmoji,      // Keep original for backward compatibility
    showSend,       // Keep original for backward compatibility
    showAttachmentButton: showAttachment, // New property name as used in component
    showEmojiButton: showEmoji,           // New property name as used in component
    showSendButton: showSend,             // New property name as used in component
    containerClasses: getMessageInputContainerClasses(props.class),
    fieldClasses: getMessageInputFieldClasses(),
    actionButtonsClasses: getMessageInputActionButtonsClasses(),
    actionButtonClasses: getMessageInputActionButtonClasses(), // New property as used in component
    attachmentButtonClasses: getMessageInputActionButtonClasses(),
    emojiButtonClasses: getMessageInputActionButtonClasses(),
    sendButtonClasses: getMessageInputSendButtonClasses(),
    inputContainerClasses: getMessageInputFieldClasses(), // New property as used in component
    inputClasses: getMessageInputFieldClasses()            // New property as used in component
  };
};

export const createMessageThreadState = (props: MessageThreadProps) => {
  const loading = props.loading ?? false;
  const variant = props.variant ?? DEFAULT_MESSAGE_THREAD_VARIANT;
  const messageVariant = props.messageVariant ?? DEFAULT_MESSAGE_THREAD_MESSAGE_VARIANT;
  const messages = props.messages ?? [];

  return {
    loading,
    title: props.title,
    messages,
    variant,
    messageVariant,
    hostClasses: getMessageThreadHostClasses(props.class),
    headerClasses: getMessageThreadHeaderClasses(props.headerClass),
    containerClasses: getMessageThreadContainerClasses(props.containerClass),
    messageContainerClasses: getMessageThreadMessageContainerClasses(props.messageContainerClass),
    loadingClasses: getMessageThreadLoadingClasses(),
    spinnerClasses: getMessageThreadSpinnerClasses(),
    variantClass: getMessageThreadVariantClass(variant)
  };
};
