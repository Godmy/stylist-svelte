import { SidebarLayoutStyleManager } from '$stylist/layout/class/style-manager/sidebar-layout';
import type { SidebarLayoutGap } from '$stylist/layout/type/enum/sidebar-layout-gap';
import type { SidebarLayoutSide } from '$stylist/layout/type/enum/sidebar-layout-side';
import type { SidebarLayoutWidth } from '$stylist/layout/type/enum/sidebar-layout-width';
import type { SidebarLayoutProps } from '$stylist/layout/type/struct/layout-extended/sidebar-layout-props';


export function createSidebarLayoutState(props: SidebarLayoutProps) {
	const side = $derived<SidebarLayoutSide>(props.side ?? 'left');
	const sidebarLabel = $derived(props.sidebarLabel ?? 'Sidebar');
	const sidebarWidth = $derived<SidebarLayoutWidth>(props.sidebarWidth ?? 'md');
	const gap = $derived<SidebarLayoutGap>(props.gap ?? 'md');
	const collapsed = $derived(props.collapsed ?? false);
	const fillHeight = $derived(props.fillHeight ?? false);
	const responsive = $derived(props.responsive ?? true);

	const classes = $derived(
		responsive
			? SidebarLayoutStyleManager.getResponsiveHostClass(gap, fillHeight, props.class)
			: SidebarLayoutStyleManager.getHostClass(gap, fillHeight, props.class)
	);

	const sidebarClass = $derived(
		responsive
			? SidebarLayoutStyleManager.getResponsiveSidebarClass(sidebarWidth, collapsed)
			: SidebarLayoutStyleManager.getSidebarWidthClass(sidebarWidth, collapsed)
	);

	const contentClass = $derived(SidebarLayoutStyleManager.getContentClass(fillHeight));

	const restProps = $derived.by(() => {
		const {
			class: _class,
			side: _side,
			sidebarWidth: _sidebarWidth,
			gap: _gap,
			collapsed: _collapsed,
			fillHeight: _fillHeight,
			responsive: _responsive,
			sidebarLabel: _sidebarLabel,
			sidebar: _sidebar,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get side() { return side; },
		get sidebarWidth() { return sidebarWidth; },
		get gap() { return gap; },
		get collapsed() { return collapsed; },
		get fillHeight() { return fillHeight; },
		get responsive() { return responsive; },
		get classes() { return classes; },
		get sidebarLabel() { return sidebarLabel; },
		get sidebarClass() { return sidebarClass; },
		get contentClass() { return contentClass; },
		get restProps() { return restProps; }
	};
}

export default createSidebarLayoutState;
