import {
	DEFAULT_CHAT_PREVIEW_MAX_MESSAGES,
	DEFAULT_CHAT_PREVIEW_SHOW_AVATARS,
	getChatPreviewAvatarClasses,
	getChatPreviewChatInfoClasses,
	getChatPreviewContainerClasses,
	getChatPreviewHeaderClasses,
	getChatPreviewMessagesContainerClasses,
	getChatPreviewParticipantsClasses,
	getChatPreviewTitleClasses
} from '../helpers';
import type { ChatMessageStatus } from '../helpers';
import type { ChatPreviewMessage } from '../helpers';

export type ChatPreviewProps = {
	class?: string;
	title: string;
	participants: string[];
	messages: ChatPreviewMessage[];
	maxMessages?: number;
	showAvatars?: boolean;
};

export type ChatPreviewItem = ChatPreviewMessage & {
	status?: ChatMessageStatus;
};

export const createChatPreviewState = (props: ChatPreviewProps) => {
	const maxMessages = props.maxMessages ?? DEFAULT_CHAT_PREVIEW_MAX_MESSAGES;
	const showAvatars = props.showAvatars ?? DEFAULT_CHAT_PREVIEW_SHOW_AVATARS;

	return {
		title: props.title,
		participants: props.participants,
		displayMessages: props.messages.slice(0, maxMessages),
		showAvatars,
		classes: getChatPreviewContainerClasses(props.class),
		headerClasses: getChatPreviewHeaderClasses(),
		chatInfoClasses: getChatPreviewChatInfoClasses(),
		titleClasses: getChatPreviewTitleClasses(),
		participantsClasses: getChatPreviewParticipantsClasses(),
		messagesContainerClasses: getChatPreviewMessagesContainerClasses(),
		avatarClasses: getChatPreviewAvatarClasses()
	};
};
