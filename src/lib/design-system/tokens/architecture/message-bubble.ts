export const MESSAGE_BUBBLE_VARIANTS = ['default', 'system'] as const;
export type MessageBubbleVariant = (typeof MESSAGE_BUBBLE_VARIANTS)[number];
