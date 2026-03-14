export const MESSAGE_VARIANTS = ['default', 'system', 'incoming', 'outgoing', 'error', 'warning', 'success'] as const;
export type MessageVariant = (typeof MESSAGE_VARIANTS)[number];

export const MESSAGE_STATUSES = ['sent', 'delivered', 'read', 'error'] as const;
export type MessageStatus = (typeof MESSAGE_STATUSES)[number];

export const MESSAGE_AVATAR_SIZES = ['sm', 'md', 'lg'] as const;
export type MessageAvatarSize = (typeof MESSAGE_AVATAR_SIZES)[number];
