export const TRANSLATIONS = ['translated', 'needs-review', 'untranslated'] as const;

export type Translation = (typeof TRANSLATIONS)[number];
