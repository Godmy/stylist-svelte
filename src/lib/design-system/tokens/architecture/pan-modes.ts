export const PAN_MODES = ['drag', 'space', 'always'] as const;

export type PanMode = (typeof PAN_MODES)[number];
