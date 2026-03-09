/** Skeleton variants. */
export const SKELETONS = ['text', 'circular', 'rectangular'] as const;
export type Skeleton = (typeof SKELETONS)[number];
