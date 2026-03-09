/** Hero height tokens */
export const HEIGHT = ['screen', 'large', 'medium'] as const;
export type Height = (typeof HEIGHT)[number];
