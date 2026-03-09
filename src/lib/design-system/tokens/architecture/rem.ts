/** rem scale tokens without duplicate values */
const remEntries = {
	'0': '0',
	'0.5': '0.125rem',
	'1': '0.25rem',
	'1.5': '0.375rem',
	'2': '0.5rem',
	'3': '0.75rem',
	'4': '1rem',
	'5': '1.25rem',
	'6': '1.5rem',
	'8': '2rem',
	'10': '2.5rem',
	'12': '3rem',
	'16': '4rem',
	'20': '5rem',
	'24': '6rem',
	'32': '8rem',
	'40': '10rem',
	'48': '12rem',
	'56': '14rem',
	'64': '16rem',
	'72': '18rem',
	'80': '20rem',
	'96': '24rem',
	'112': '28rem',
	'128': '32rem',
	full: '9999px'
} as const;

export const REM = remEntries;
export type RemKey = keyof typeof REM;
export type GridGapKey = '0' | '2' | '4' | '6' | '8' | '12';
export type PaddingKey = '4' | '6' | '8' | '12';
export type RadiusKey = '0' | '0.5' | '1' | '1.5' | '2' | '3' | '4' | '6' | 'full';
export type SpacingKey =
	| '0'
	| '0.5'
	| '1'
	| '1.5'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '8'
	| '10'
	| '12'
	| '16'
	| '20'
	| '24'
	| '32'
	| '40'
	| '48'
	| '56'
	| '64'
	| '72'
	| '80'
	| '96'
	| '112'
	| '128';
