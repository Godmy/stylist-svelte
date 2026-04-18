import type { DashboardLayoutVariant } from '$stylist/management/type/alias/dashboard-layout-variant';
import type { DashboardLayoutProps } from '$stylist/management/interface/recipe/dashboard-layout';

export function createDashboardLayoutState(props: DashboardLayoutProps) {
	// Props with defaults
	const sidebarOpen = $derived(props.sidebarOpen ?? true);
	const collapsibleSidebar = $derived(props.collapsibleSidebar ?? true);
	const onSidebarToggle = $derived(props.onSidebarToggle);
	const mobileBreakpoint = $derived(props.mobileBreakpoint ?? 'lg');
	const showSidebarToggle = $derived(props.showSidebarToggle ?? true);
	const variant = $derived<DashboardLayoutVariant>(props.variant ?? 'default');

	// SlotState
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
