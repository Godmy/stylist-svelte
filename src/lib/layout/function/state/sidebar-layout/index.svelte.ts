import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';
import type { SidebarLayoutProps } from '$stylist/layout/type/struct/layout-extended/sidebar-layout-props';

import type { TOKEN_ALIGNMENT } from '$stylist/layout/const/array/alignment';
import type { TOKEN_SIZE } from '$stylist/layout/const/array/size';
export function createSidebarLayoutState(props: SidebarLayoutProps) {
	const side = $derived<(typeof TOKEN_ALIGNMENT)[number]>(props.side ?? 'left');
	const sidebarLabel = $derived(props.sidebarLabel ?? 'Sidebar');
	const sidebarWidth = $derived<(typeof TOKEN_SIZE)[number]>(props.sidebarWidth ?? 'md');
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

