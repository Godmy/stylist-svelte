/** Message delivery status indicators. */
export const MESSAGE_STATUSES = ['sent', 'delivered', 'read'] as const;
export type MessageStatusType = (typeof MESSAGE_STATUSES)[number];
