export const PAGE_BUILDER_ELEMENT_TYPES = [
    'text',
    'image',
    'video',
    'button',
    'divider',
    'heading',
    'container',
    'grid'
] as const;
export type PageBuilderElementType = (typeof PAGE_BUILDER_ELEMENT_TYPES)[number];
