import { StickyLayoutStyleManager } from '$stylist/layout/class/style-manager/sticky-layout';
import type { StickyLayoutProps } from '$stylist/layout/type/struct/layout-extended/sticky-layout-props';


export function createStickyLayoutState(props: StickyLayoutProps) {
	const fillHeight = $derived(props.fillHeight ?? true);
	const headerShadow = $derived(props.headerShadow ?? true);
	const footerShadow = $derived(props.footerShadow ?? true);

	const classes = $derived(StickyLayoutStyleManager.getHostClass(fillHeight, props.class));
	const headerClass = $derived(StickyLayoutStyleManager.getStickyHeaderClass(headerShadow));
	const contentClass = $derived(StickyLayoutStyleManager.getScrollableContentClass(fillHeight));
	const footerClass = $derived(StickyLayoutStyleManager.getStickyFooterClass(footerShadow));

	const restProps = $derived.by(() => {
		const {
			class: _class,
			fillHeight: _fillHeight,
			headerShadow: _headerShadow,
			footerShadow: _footerShadow,
			header: _header,
			footer: _footer,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get fillHeight() { return fillHeight; },
		get headerShadow() { return headerShadow; },
		get footerShadow() { return footerShadow; },
		get classes() { return classes; },
		get headerClass() { return headerClass; },
		get contentClass() { return contentClass; },
		get footerClass() { return footerClass; },
		get restProps() { return restProps; }
	};
}

export default createStickyLayoutState;
