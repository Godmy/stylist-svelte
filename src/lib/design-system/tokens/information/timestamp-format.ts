export const TIMESTAMP_FORMAT = ['datetime', 'time', 'date'] as const;

export type MessageTimestampFormatStyle = (typeof TIMESTAMP_FORMAT)[number];
