export type DrawerProps = ThemeAttributes<HTMLDivElement> & {
	open?: boolean;
	position?: DrawerPosition;
	size?: string;
	closable?: boolean;
	showBackdrop?: boolean;
	class?: string;
	header?: Snippet;
	actions?: Snippet;
	children?: Snippet;
}
