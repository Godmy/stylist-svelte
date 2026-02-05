/**
 * Media domain tokens.
 * Used by:
 * - information/media/announcement-banner.ts
 * - information/media/image-with-caption.ts
 */

export const ANNOUNCEMENT_BANNER_CLASSES = {
  container: 'rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm p-6',
  icon: 'w-12 h-12 mr-4',
  content: 'flex-1',
  title: 'text-xl font-semibold mb-2',
  description: 'text-[--color-text-secondary] mb-4',
  childrenContainer: 'mt-4',
  flexContainer: 'flex items-start'
} as const;

export const IMAGE_WITH_CAPTION_CLASSES = {
  hostBase: 'image-with-caption flex flex-col',
  imageBase: 'w-full object-cover',
  text: 'mt-2 text-center text-sm text-[--color-text-secondary]',
  decoration: {
    rounded: 'rounded-lg',
    bordered: 'border border-[--color-border-default]',
    shadow: 'shadow-md'
  }
} as const;
