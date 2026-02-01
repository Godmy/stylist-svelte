export interface MessageInputProps {
  placeholder?: string;
  disabled?: boolean;
  showAttachmentButton?: boolean;
  showEmojiButton?: boolean;
  showSendButton?: boolean;
  class?: string;
}

export const DEFAULT_MESSAGE_INPUT_PLACEHOLDER = 'Type a message...';
export const DEFAULT_MESSAGE_INPUT_DISABLED = false;
export const DEFAULT_MESSAGE_INPUT_SHOW_ATTACHMENT = true;
export const DEFAULT_MESSAGE_INPUT_SHOW_EMOJI = true;
export const DEFAULT_MESSAGE_INPUT_SHOW_SEND = true;

const CONTAINER_CLASSES =
  'message-input flex items-end gap-2 p-3 rounded-xl border border-slate-200 bg-white';
const INPUT_CONTAINER_CLASSES = 'flex-1 relative';
const INPUT_FIELD_CLASSES =
  'w-full border-none resize-none px-4 py-2 rounded-full bg-slate-50 max-h-40 overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500';
const ACTION_BUTTONS_CLASSES = 'flex gap-1';
const ACTION_BUTTON_CLASSES =
  'flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-none cursor-pointer text-slate-500 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed';
const SEND_BUTTON_CLASSES =
  'flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed';

export const getMessageInputContainerClasses = (className = '') => {
  return [CONTAINER_CLASSES, className].filter(Boolean).join(' ');
};

export const getMessageInputContainerClass = () => INPUT_CONTAINER_CLASSES;
export const getMessageInputFieldClasses = () => INPUT_FIELD_CLASSES;
export const getMessageInputActionButtonsClasses = () => ACTION_BUTTONS_CLASSES;
export const getMessageInputActionButtonClasses = () => ACTION_BUTTON_CLASSES;
export const getMessageInputSendButtonClasses = () => SEND_BUTTON_CLASSES;
