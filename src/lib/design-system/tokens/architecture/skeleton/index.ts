export const TOKEN_SKELETON = ['text', 'card', 'image', 'icon'] as const;

export type TokenSkeleton = (typeof TOKEN_SKELETON)[number];
