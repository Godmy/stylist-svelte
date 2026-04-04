import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type DashboardLayoutVariant = 'default' | 'compact' | 'spacious';

export interface DashboardLayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	header?: Snippet;
	sidebar?: Snippet;
	sidebarOpen?: boolean;
	footer?: Snippet;
	children: Snippet;
	class?: string;
	headerClass?: string;
	sidebarClass?: string;
	contentClass?: string;
	footerClass?: string;
	collapsibleSidebar?: boolean;
	onSidebarToggle?: (open: boolean) => void;
	mobileBreakpoint?: string;
	showSidebarToggle?: boolean;
	variant?: DashboardLayoutVariant;
}

export function createDashboardLayoutState(props: DashboardLayoutProps) {
	// Props with defaults
	const sidebarOpen = $derived(props.sidebarOpen ?? true);
	const collapsibleSidebar = $derived(props.collapsibleSidebar ?? true);
	const onSidebarToggle = $derived(props.onSidebarToggle);
	const mobileBreakpoint = $derived(props.mobileBreakpoint ?? 'lg');
	const showSidebarToggle = $derived(props.showSidebarToggle ?? true);
	const variant = $derived<DashboardLayoutVariant>(props.variant ?? 'default');

	// State
	let isSidebarOpen = $state(props.sidebarOpen ?? true);

	// Sync with sidebarOpen prop
	$effect(() => {
		isSidebarOpen = props.sidebarOpen ?? true;
	});

	// Computed
	const variantClasses = $derived({
		default: 'p-4',
		compact: 'p-2',
		spacious: 'p-6'
	}[variant]);

	const sidebarWidthClass = $derived(isSidebarOpen ? 'w-64' : 'w-16');

	// Methods
	function toggleSidebar(): void {
		isSidebarOpen = !isSidebarOpen;
		onSidebarToggle?.(isSidebarOpen);
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			header: _header,
			sidebar: _sidebar,
			sidebarOpen: _sidebarOpen,
			footer: _footer,
			children: _children,
			headerClass: _headerClass,
			sidebarClass: _sidebarClass,
			contentClass: _contentClass,
			footerClass: _footerClass,
			collapsibleSidebar: _collapsibleSidebar,
			onSidebarToggle: _onSidebarToggle,
			mobileBreakpoint: _mobileBreakpoint,
			showSidebarToggle: _showSidebarToggle,
			variant: _variant,
			...rest
		} = props;
		return rest;
	});

	return {
		get isSidebarOpen() {
			return isSidebarOpen;
		},
		get collapsibleSidebar() {
			return collapsibleSidebar;
		},
		get mobileBreakpoint() {
			return mobileBreakpoint;
		},
		get showSidebarToggle() {
			return showSidebarToggle;
		},
		get variant() {
			return variant;
		},
		get variantClasses() {
			return variantClasses;
		},
		get sidebarWidthClass() {
			return sidebarWidthClass;
		},
		get restProps() {
			return restProps;
		},
		toggleSidebar
	};
}

export default createDashboardLayoutState;
