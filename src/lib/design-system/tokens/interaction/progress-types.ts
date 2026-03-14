/** Progress indicator types. */
export const PROGRESS_TYPES = ['determinate', 'indeterminate'] as const;
export type ProgressType = (typeof PROGRESS_TYPES)[number];


