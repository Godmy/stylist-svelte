export const CHAT_STATUS_VARIANTS = ['online', 'offline', 'away', 'typing'] as const;
export type ChatStatusIndicatorVariant = (typeof CHAT_STATUS_VARIANTS)[number];
