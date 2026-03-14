export const CTA_BANNER_BACKGROUND_VARIANTS = ['gradient', 'solid', 'image'] as const;
export type CtaBannerBackgroundVariant = (typeof CTA_BANNER_BACKGROUND_VARIANTS)[number];
