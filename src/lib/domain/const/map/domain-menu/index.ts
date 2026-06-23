import type { IconToolbarItem } from '$stylist/control/component/molecule/icon-toolbar/index.svelte';

export const DOMAIN_MENU_ICONS: readonly IconToolbarItem[] = [
	{ name: 'dashboard', svg: 'layout-dashboard' },
	{ name: 'builder', svg: 'hammer' },
	{ name: 'backlog', svg: 'list-checks' },
	{ name: 'diagnostics', svg: 'activity' },
	{ name: 'settings', svg: 'settings' }
] as const;
