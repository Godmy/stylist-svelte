import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
import type { PopoverPosition } from '$stylist/layout/type/enum/popover-position';
import type { SidebarLayoutWidth } from '$stylist/layout/type/enum/sidebar-layout-width';
import type { SidebarLayoutProps } from '$stylist/layout/type/struct/layout-extended/sidebar-layout-props';

export function createSidebarLayoutState(props: SidebarLayoutProps) {
	const side = $derived<PopoverPosition>(props.side ?? 'left');
	const sidebarLabel = $derived(props.sidebarLabel ?? 'Sidebar');
	const sidebarWidth = $derived<SidebarLayoutWidth>(props.sidebarWidth ?? 'md');
	const gap = $derived<SplitLayoutGap>(props.gap ?? 'md');
	const collapsed = $derived(props.collapsed ?? false);
	const fillHeight = $derived(props.fillHeight ?? false);
	const responsive = $derived(props.responsive ?? true);

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
		get side() {
			return side;
		},
		get sidebarWidth() {
			return sidebarWidth;
		},
		get gap() {
			return gap;
		},
		get collapsed() {
			return collapsed;
		},
		get fillHeight() {
			return fillHeight;
		},
		get responsive() {
			return responsive;
		},
		get sidebarLabel() {
			return sidebarLabel;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createSidebarLayoutState;
