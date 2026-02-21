/**
 * Data display-related types and constants
 */

export type BadgeType = 'version' | 'downloads' | 'license' | 'size' | 'custom';

export const BADGE_LABELS = {
	version: 'yarn version',
	downloads: 'yarn downloads',
	license: 'license',
	size: 'bundle size',
	custom: 'yarn'
};