import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';

export const CLUSTER_TOOLBAR_ITEMS = [
	{ name: 'data',      svg: TOKEN_ICON_REGISTRY['data'] },
	{ name: 'const',     svg: TOKEN_ICON_REGISTRY['const'] },
	{ name: 'type',      svg: TOKEN_ICON_REGISTRY['type'] },
	{ name: 'interface', svg: TOKEN_ICON_REGISTRY['interface'] },
	{ name: 'class',     svg: TOKEN_ICON_REGISTRY['class'] },
	{ name: 'function',  svg: TOKEN_ICON_REGISTRY['function'] },
	{ name: 'component', svg: TOKEN_ICON_REGISTRY['component'] }
] as const;
