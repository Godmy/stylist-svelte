export const TOKEN_SOFTWARE_BADGE = ['version', 'downloads', 'license', 'size', 'custom'] as const;

export type TokenSoftwareBadge = (typeof TOKEN_SOFTWARE_BADGE)[number];
