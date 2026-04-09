export const GENERAL_TOOLBAR_DISPATCH_EVENTS = {
	togglelegend: 'togglelegend',
	togglesearch: 'togglesearch'
} as const;

export function getButtonSizeForToolbar(compact: boolean): 'sm' | 'md' {
	return compact ? 'sm' : 'md';
}
