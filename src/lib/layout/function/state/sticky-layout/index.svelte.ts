import type { StickyLayoutProps } from '$stylist/layout/interface/recipe/sticky-layout';

export function createStickyLayoutState(props: StickyLayoutProps) {
	const fillHeight = $derived(props.fillHeight ?? true);
	const headerShadow = $derived(props.headerShadow ?? true);
	const footerShadow = $derived(props.footerShadow ?? true);

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
		get fillHeight() {
			return fillHeight;
		},
		get headerShadow() {
			return headerShadow;
		},
		get footerShadow() {
			return footerShadow;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createStickyLayoutState;
