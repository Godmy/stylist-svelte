export const CUBE_FACE_TITLES = ['Atomic Design', 'Contracts', 'Tokens', 'Styles Managers', 'Classes', 'Models'] as const;

export const CUBE_FACE_NAMES = ['front', 'back', 'right', 'left', 'top', 'bottom'] as const;

export const CUBE_FACE_THEMES = [
	{ accent: 'var(--color-primary-600)', tint: 'color-mix(in srgb, var(--color-primary-200) 60%, transparent)' },
	{ accent: 'var(--color-secondary-600)', tint: 'color-mix(in srgb, var(--color-secondary-200) 62%, transparent)' },
	{ accent: 'var(--color-success-600)', tint: 'color-mix(in srgb, var(--color-success-200) 58%, transparent)' },
	{ accent: 'var(--color-warning-600)', tint: 'color-mix(in srgb, var(--color-warning-200) 62%, transparent)' },
	{ accent: 'var(--color-info-600)', tint: 'color-mix(in srgb, var(--color-info-200) 64%, transparent)' },
	{ accent: 'var(--color-danger-600)', tint: 'color-mix(in srgb, var(--color-danger-200) 62%, transparent)' }
] as const;

export const CUBE_VERTICAL_ICONS = [
	{ type: 'atom', label: 'Atom', tone: 'var(--gradient-primary)' },
	{ type: 'molecule', label: 'Molecule', tone: 'var(--gradient-success)' },
	{ type: 'organism', label: 'Organism', tone: 'var(--gradient-secondary)' }
] as const;

export const CUBE_HORIZONTAL_ICONS = [
	{ type: 'architecture', label: 'Architecture', tone: 'var(--gradient-info)' },
	{ type: 'information', label: 'Information', tone: 'var(--gradient-primary)' },
	{ type: 'interaction', label: 'Interaction', tone: 'var(--gradient-warning)' }
] as const;

export const CUBE_FACE_NUMBERS_SNAPSHOT: number[][] = [
	[11, 75, 97, 18, 62, 57, 14, 58, 75],
	[19, 65, 65, 13, 43, 43, 44, 33, 28],
	[16, 7, 6, 53, 23, 20, 37, 4, 3],
	[15, 101, 55, 9, 59, 32, 35, 52, 24],
	[7, 25, 10, 16, 58, 23, 16, 13, 4],
	[11, 47, 60, 9, 39, 50, 26, 24, 26]
];

export default CUBE_FACE_TITLES;
