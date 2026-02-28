export const TRANSITION_DURATION = {
	none: '0ms',
	fastest: '75ms',
	faster: '100ms',
	fast: '150ms',
	normal: '200ms',
	slow: '300ms',
	slower: '400ms',
	slowest: '500ms'
} as const;

export type TransitionDurationKey = keyof typeof TRANSITION_DURATION;
