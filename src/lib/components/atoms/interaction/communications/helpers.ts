export type ChatMessageStatus = 'sent' | 'delivered' | 'read';
export type ChatMessageVariant = 'default' | 'primary' | 'secondary';

export const DEFAULT_CHAT_MESSAGE_VARIANT: ChatMessageVariant = 'default';

export const getChatMessageAlignmentClass = (isOwn: boolean) => (isOwn ? 'justify-end' : 'justify-start');

export const getChatMessageBubbleClasses = (
  isOwn: boolean,
  variant: ChatMessageVariant,
  className = ''
) => {
  const base = ['rounded-lg px-4 py-2 text-sm'];
  if (isOwn) base.push('bg-blue-500 text-white rounded-br-none');
  else {
    const variantClasses: Record<ChatMessageVariant, string> = {
      default: 'bg-gray-100 text-gray-800 rounded-bl-none',
      primary: 'bg-blue-100 text-blue-800 rounded-bl-none',
      secondary: 'bg-gray-200 text-gray-900 rounded-bl-none'
    };
    base.push(variantClasses[variant]);
  }
  if (className) base.push(className);
  return base.join(' ');
};

export const getChatMessageHeaderClasses = (className = '') =>
  ['flex items-center mb-1 text-xs font-semibold text-gray-600', className].filter(Boolean).join(' ');

export const getChatMessageFooterClasses = (className = '') =>
  ['flex items-center justify-end mt-1 text-xs text-gray-500', className].filter(Boolean).join(' ');

export const getChatMessageStatusIconClasses = (status: ChatMessageStatus) =>
  `ml-1 h-3 w-3 ${status === 'read' ? 'text-blue-500' : 'text-gray-400'}`.trim();

export type ChatPreviewMessage = {
  text: string;
  sender: string;
  timestamp?: string;
  isOwn?: boolean;
  avatar?: string;
  status?: ChatMessageStatus;
};

export const DEFAULT_CHAT_PREVIEW_MAX_MESSAGES = 5;
export const DEFAULT_CHAT_PREVIEW_SHOW_AVATARS = true;
export const getChatPreviewContainerClasses = (className = '') =>
  ['chat-preview border rounded-lg bg-white shadow-sm overflow-hidden', className].filter(Boolean).join(' ');
export const getChatPreviewHeaderClasses = () => 'p-4 border-b bg-gray-50 flex items-center justify-between';
export const getChatPreviewChatInfoClasses = () => 'flex items-center';
export const getChatPreviewTitleClasses = () => 'font-semibold text-gray-900';
export const getChatPreviewParticipantsClasses = () => 'text-sm text-gray-500 ml-2';
export const getChatPreviewMessagesContainerClasses = () => 'max-h-80 overflow-y-auto p-4 space-y-4';
export const getChatPreviewAvatarClasses = () => 'w-6 h-6 rounded-full mr-2 flex-shrink-0';

export const DEFAULT_MESSAGE_INPUT_PLACEHOLDER = 'Type a message...';
export const DEFAULT_MESSAGE_INPUT_DISABLED = false;
export const DEFAULT_MESSAGE_INPUT_SHOW_ATTACHMENT = true;
export const DEFAULT_MESSAGE_INPUT_SHOW_EMOJI = true;
export const DEFAULT_MESSAGE_INPUT_SHOW_SEND = true;
export const getMessageInputContainerClasses = (className = '') =>
  [
    'message-input flex items-end gap-2 p-3 rounded-xl border border-slate-200 bg-white',
    className
  ].filter(Boolean).join(' ');
export const getMessageInputFieldClasses = () =>
  'w-full border-none resize-none px-4 py-2 rounded-full bg-slate-50 max-h-40 overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500';
export const getMessageInputActionButtonsClasses = () => 'flex gap-1';
export const getMessageInputActionButtonClasses = () =>
  'flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-none cursor-pointer text-slate-500 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed';
export const getMessageInputSendButtonClasses = () =>
  'flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed';

export type MessageThreadVariant = 'default' | 'compact' | 'spacious';
export type MessageThreadMessage = {
  id: string;
  text: string;
  sender: string;
  senderAvatar?: string;
  timestamp: string;
  status?: ChatMessageStatus;
  isOwn: boolean;
};
export const DEFAULT_MESSAGE_THREAD_VARIANT: MessageThreadVariant = 'default';
export const DEFAULT_MESSAGE_THREAD_MESSAGE_VARIANT: ChatMessageVariant = 'default';
export const getMessageThreadVariantClass = (variant: MessageThreadVariant) =>
  ({ default: 'p-4', compact: 'p-2', spacious: 'p-6' }[variant]);
export const getMessageThreadHostClasses = (className = '') => `message-thread flex flex-col h-full ${className}`.trim();
export const getMessageThreadHeaderClasses = (className = '') => `bg-white border-b p-4 ${className}`.trim();
export const getMessageThreadContainerClasses = (className = '') => `flex-1 overflow-y-auto ${className}`.trim();
export const getMessageThreadMessageContainerClasses = (className = '') => `space-y-4 ${className}`.trim();
export const getMessageThreadLoadingClasses = () => 'flex justify-center items-center h-full';
export const getMessageThreadSpinnerClasses = () => 'animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500';
