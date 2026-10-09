// jsdom has no matchMedia; svelte/motion (prefersReducedMotion) and ManagerTheme
// subscribe to media queries at import/mount time, so provide a static stub.
// It emulates an OS with a dark colour-scheme preference and no other matches,
// which is what the theme tests assume when resolving the 'default' mode.
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
	window.matchMedia = (query: string): MediaQueryList => ({
		matches: query.replace(/\s+/g, '') === '(prefers-color-scheme:dark)',
		media: query,
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false
	});
}
