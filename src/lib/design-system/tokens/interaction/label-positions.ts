export const LABEL_POSITIONS = ['start', 'end'] as const;

export type LabelPosition = (typeof LABEL_POSITIONS)[number];
