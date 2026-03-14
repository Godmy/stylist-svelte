export const MESSAGE_ALIGNMENTS = ['left', 'right'] as const;
export type MessageAlign = (typeof MESSAGE_ALIGNMENTS)[number];
