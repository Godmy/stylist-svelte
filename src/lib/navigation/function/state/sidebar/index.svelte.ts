import { SidebarStyleManager } from '$stylist/navigation/class/style-manager/sidebar';
import type { NavItem } from '$stylist/navigation/type/struct/sidebar';
import type { SidebarStateProps } from '$stylist/navigation/interface/recipe/sidebar-sidebar-state-props';

export function createSidebarState(props: SidebarStateProps) {
	// SlotState
	let isMobile = $state(false);
	let isSidebarOpen = $state(!props.collapsed);

	// Props with defaults
	const items = $derived(props.items ?? []);
	const title = $derived(props.title ?? 'Navigation');
	const collapsed = $derived(props.collapsed ?? false);
	const collapsible = $derived(props.collapsible ?? true);
	const mobileBreakpoint = $derived(props.mobileBreakpoint ?? 768);
	const width = $derived(props.width ?? '280px');
	const mobileWidth = $derived(props.mobileWidth ?? '280px');
	const disabled = $derived(props.disabled ?? false);

	// Handle window resize to detect mobile view
	$effect(() => {
		const handleResize = () => {
			isMobile = window.innerWidth < mobileBreakpoint;
			if (isMobile) {
				isSidebarOpen = false;
			} else {
				isSidebarOpen = !collapsed;
			}
		};

		// Initial check
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	// Sync with collapsed prop
	$effect(() => {
		if (!isMobile) {
			isSidebarOpen = !collapsed;
		}
	});

	// Computed classes
	const hostClass = $derived(SidebarStyleManager.getHostClasses(props.class));
	const mobileButtonClass = $derived(SidebarStyleManager.getMobileButtonClasses());
	const overlayClass = $derived(SidebarStyleManager.getOverlayClasses());
	const sidebarClass = $derived(
		SidebarStyleManager.getSidebarClasses(isMobile, isSidebarOpen, width, mobileWidth)
	);
	const sidebarStyle = $derived(
		SidebarStyleManager.getSidebarStyle(isMobile, isSidebarOpen, width, mobileWidth)
	);
	const sidebarContainerClass = $derived(SidebarStyleManager.getSidebarContainerClasses());
	const headerClass = $derived(SidebarStyleManager.getHeaderClasses(props.logoClass));
	const logoWrapperClass = $derived(SidebarStyleManager.getLogoWrapperClasses());
	const titleClassComputed = $derived(SidebarStyleManager.getTitleClasses(props.titleClass));
	const navClassComputed = $derived(SidebarStyleManager.getNavClasses(props.navClass));
	const navListClass = $derived(SidebarStyleManager.getNavListClasses());
	const footerClassComputed = $derived(SidebarStyleManager.getFooterClasses(props.footerClass));
	const contentAreaClass = $derived(
		SidebarStyleManager.getContentAreaClasses(isSidebarOpen, isMobile)
	);

	function getNavItemClass(item: NavItem): string {
		return SidebarStyleManager.getNavItemClasses(
			item.active ?? false,
			item.disabled ?? false,
			props.itemClass,
			props.activeItemClass,
			props.disabledItemClass
		);
	}

	const navItemIconWrapperClass = $derived(SidebarStyleManager.getNavItemIconWrapperClasses());
	const navItemLabelClass = $derived(SidebarStyleManager.getNavItemLabelClasses());
	const navItemBadgeClass = $derived(SidebarStyleManager.getNavItemBadgeClasses());

	// Methods
	function toggleSidebar(): void {
		isSidebarOpen = !isSidebarOpen;
	}

	function handleClick(item: NavItem): void {
		if (item.disabled || disabled) return;

		if (item.onClick) {
			item.onClick();
		} else if (item.href) {
			window.location.href = item.href;
		}
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			items: _items,
			title: _title,
			logo: _logo,
			footer: _footer,
			collapsed: _collapsed,
			collapsible: _collapsible,
			mobileBreakpoint: _mobileBreakpoint,
			width: _width,
			mobileWidth: _mobileWidth,
			variant: _variant,
			position: _position,
			disabled: _disabled,
			navClass: _navClass,
			itemClass: _itemClass,
			activeItemClass: _activeItemClass,
			disabledItemClass: _disabledItemClass,
			titleClass: _titleClass,
			logoClass: _logoClass,
			footerClass: _footerClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get isMobile() {
			return isMobile;
		},
		get isSidebarOpen() {
			return isSidebarOpen;
		},
		get items() {
			return items;
		},
		get title() {
			return title;
		},
		get collapsed() {
			return collapsed;
		},
		get collapsible() {
			return collapsible;
		},
		get mobileBreakpoint() {
			return mobileBreakpoint;
		},
		get width() {
			return width;
		},
		get mobileWidth() {
			return mobileWidth;
		},
		get disabled() {
			return disabled;
		},
		get hostClass() {
			return hostClass;
		},
		get mobileButtonClass() {
			return mobileButtonClass;
		},
		get overlayClass() {
			return overlayClass;
		},
		get sidebarClass() {
			return sidebarClass;
		},
		get sidebarStyle() {
			return sidebarStyle;
		},
		get sidebarContainerClass() {
			return sidebarContainerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get logoWrapperClass() {
			return logoWrapperClass;
		},
		get titleClassComputed() {
			return titleClassComputed;
		},
		get navClassComputed() {
			return navClassComputed;
		},
		get navListClass() {
			return navListClass;
		},
		get footerClassComputed() {
			return footerClassComputed;
		},
		get contentAreaClass() {
			return contentAreaClass;
		},
		get navItemIconWrapperClass() {
			return navItemIconWrapperClass;
		},
		get navItemLabelClass() {
			return navItemLabelClass;
		},
		get navItemBadgeClass() {
			return navItemBadgeClass;
		},
		get restProps() {
			return restProps;
		},
		toggleSidebar,
		handleClick,
		getNavItemClass
	};
}

export default createSidebarState;
