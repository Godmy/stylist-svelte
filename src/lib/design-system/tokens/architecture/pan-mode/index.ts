export const TOKEN_PAN_MODES = ['drag', 'space', 'always'] as const;

export type TokenPanMode = (typeof TOKEN_PAN_MODES)[number];
