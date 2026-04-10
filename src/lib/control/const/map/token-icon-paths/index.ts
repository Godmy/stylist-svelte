import type { TokenIconKind } from '$stylist/control/type/struct/token-icon-kind';

export const TOKEN_ICON_PATHS: Record<TokenIconKind, string> = {
	layout: 'M4 7h16M2.5 12h19M6 17h12',
	shape: 'M5 5h6v6H5zM16 5a3 3 0 1 1 0 6M8 19a4 4 0 0 1 8 0',
	size: 'M4 12h16M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3',
	SPACING: 'M3 12h3m12 0h3M8 8v8m8-8v8M11 12h2',
	radius: 'M5 19V9a4 4 0 0 1 4-4h10v10a4 4 0 0 1-4 4H5Z',
	SHADOW: 'M6 8h10a4 4 0 0 1 4 4v6H10a4 4 0 0 1-4-4V8Z',
	border: 'M4 4h16v16H4zM4 9h16M4 15h16M9 4v16M15 4v16',
	TOKEN_OPACITY: 'M12 3 4 12l8 9 8-9-8-9Z',
	blur: 'M4 12a8 8 0 0 1 16 0M7 12a5 5 0 0 1 10 0M10 12a2 2 0 0 1 4 0',
	container: 'M3 5h18M3 19h18M6 8v8M18 8v8',
	grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
	aspect: 'M4 8h16v8H4zM8 8V5m8 11v3',
	layers: 'M4 7h10M8 12h12M4 17h16',
	palette: 'M12 4a8 8 0 1 0 0 16h1a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h4',
	gradient: 'M5 19 19 5M5 5h14v14',
	TYPOGRAPHY: 'M4 7h16M8 7v10M16 7v10M10 17h4',
	variant: 'M12 5v14M5 12h14',
	state: 'M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8',
	graph: 'M4 18h16M7 14l3-3 3 2 4-5',
	motion: 'M4 12h7m0 0-2.5-2.5M11 12l-2.5 2.5M13 12h7m0 0-2.5-2.5M20 12l-2.5 2.5',
	default: 'M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z'
};

export default TOKEN_ICON_PATHS;
