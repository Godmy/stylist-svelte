export const GRADIENT_VARIANTS = [
    'dynamic',
    'static',
    'particles'
] as const;
export type GradientVariant = (typeof GRADIENT_VARIANTS)[number];
