/** Justification tokens */
export const JUSTIFICATIONS = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
export type Justification = (typeof JUSTIFICATIONS)[number];
