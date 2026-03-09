export const NODE_TITLE = ['default', 'selected', 'error', 'warning'] as const;

export type NodeTitleVariant = (typeof NODE_TITLE)[number];
