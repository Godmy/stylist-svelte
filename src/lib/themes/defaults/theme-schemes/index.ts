import type { ThemeScheme } from '../../contracts/theme-scheme';
import type { ThemeSchemeId } from '../../contracts/theme-scheme-id';
export type { ThemeScheme } from '../../contracts/theme-scheme';
export type { ThemeSchemeId } from '../../contracts/theme-scheme-id';

export const THEME_SCHEMES: ThemeScheme[] = [
	{
		id: 'minimal',
		label: 'Minimal',
		description: 'Neutral light palette',
		colors: {
			bg: '#f7f7f9',
			surface: '#ffffff',
			text: '#171923',
			muted: '#5f6572',
			line: '#d8deea',
			accent: '#3253d4'
		}
	},
	{
		id: 'ocean',
		label: 'Ocean',
		description: 'Cold blue palette',
		colors: {
			bg: '#ecf3fa',
			surface: '#ffffff',
			text: '#0f2942',
			muted: '#47617a',
			line: '#c4d9ee',
			accent: '#0f7ad8'
		}
	},
	{
		id: 'forest',
		label: 'Forest',
		description: 'Natural green palette',
		colors: {
			bg: '#eff6f1',
			surface: '#ffffff',
			text: '#193126',
			muted: '#496355',
			line: '#cadece',
			accent: '#22754b'
		}
	},
	{
		id: 'sunset',
		label: 'Sunset',
		description: 'Warm orange palette',
		colors: {
			bg: '#fdf2ea',
			surface: '#ffffff',
			text: '#402417',
			muted: '#7f5946',
			line: '#f0d5c6',
			accent: '#d86a2f'
		}
	}
];

export const THEME_SCHEMES_BY_ID: Record<ThemeSchemeId, ThemeScheme> = THEME_SCHEMES.reduce(
	(result, scheme) => {
		result[scheme.id] = scheme;
		return result;
	},
	{} as Record<ThemeSchemeId, ThemeScheme>
);


