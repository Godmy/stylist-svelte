import type { Token } from '$stylist/token/type/struct/token';
import { CHAT_MESSAGE_STATUS } from '$stylist/chat/const/array/chat-message-status';
import { TOKEN_MESSAGE_STATUS } from '$stylist/chat/const/array/message-status';

export const TOKEN_CHAT_SETTING = [
	{ key: 'chat-message-status', label: 'Chat Message Status', domain: 'chat', controlKind: 'radio', values: CHAT_MESSAGE_STATUS },
	{ key: 'message-status', label: 'Message Status', domain: 'chat', controlKind: 'radio', values: TOKEN_MESSAGE_STATUS }
] satisfies readonly Token[];