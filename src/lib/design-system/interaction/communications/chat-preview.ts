import type { ChatMessageStatus } from './chat-message';

export interface ChatPreviewMessage {
  text: string;
  sender: string;
  timestamp?: string;
  isOwn?: boolean;
  avatar?: string;
  status?: ChatMessageStatus;
}

export interface ChatPreviewProps {
  title: string;
  participants: string[];
  messages: ChatPreviewMessage[];
  maxMessages?: number;
  showAvatars?: boolean;
  class?: string;
}

export const DEFAULT_CHAT_PREVIEW_MAX_MESSAGES = 5;
export const DEFAULT_CHAT_PREVIEW_SHOW_AVATARS = true;

const CONTAINER_CLASSES = 'chat-preview border rounded-lg bg-white shadow-sm overflow-hidden';
const HEADER_CLASSES = 'p-4 border-b bg-gray-50 flex items-center justify-between';
const CHAT_INFO_CLASSES = 'flex items-center';
const TITLE_CLASSES = 'font-semibold text-gray-900';
const PARTICIPANTS_CLASSES = 'text-sm text-gray-500 ml-2';
const MESSAGES_CONTAINER_CLASSES = 'max-h-80 overflow-y-auto p-4 space-y-4';
const AVATAR_CLASSES = 'w-6 h-6 rounded-full mr-2 flex-shrink-0';

export const getChatPreviewContainerClasses = (className = '') => {
  return [CONTAINER_CLASSES, className].filter(Boolean).join(' ');
};

export const getChatPreviewHeaderClasses = () => HEADER_CLASSES;
export const getChatPreviewChatInfoClasses = () => CHAT_INFO_CLASSES;
export const getChatPreviewTitleClasses = () => TITLE_CLASSES;
export const getChatPreviewParticipantsClasses = () => PARTICIPANTS_CLASSES;
export const getChatPreviewMessagesContainerClasses = () => MESSAGES_CONTAINER_CLASSES;
export const getChatPreviewAvatarClasses = () => AVATAR_CLASSES;
