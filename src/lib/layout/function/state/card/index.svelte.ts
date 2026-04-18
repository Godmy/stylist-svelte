import { CardStyleManager } from '$stylist/layout/class/style-manager/card';
import type { LayoutShape } from '$stylist/layout/type/struct/item-layout-shape';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { CardProps } from '$stylist/layout/type/struct/layout-extended/card-props';


export function createCardState(props: CardProps) {
	const shape = $derived<LayoutShape>(props.shape ?? 'rounded');
	const size = $derived<TokenSize>((props.size as TokenSize | undefined) ?? 'md');
	const elevation = $derived(props.elevation ?? 1);
	const clickable = $derived(props.clickable ?? false);
	const fullWidth = $derived(props.fullWidth ?? false);

	const classes = $derived(
		CardStyleManager.getHostClass(shape, size, elevation, clickable, fullWidth, props.class)
	);
	const mediaClass = $derived(CardStyleManager.getMediaClass());
	const bodyClass = $derived(CardStyleManager.getBodyClass());
	const footerClass = $derived(CardStyleManager.getFooterClass());

	const restProps = $derived.by(() => {
		const {
			class: _class,
			shape: _shape,
			size: _size,
			elevation: _elevation,
			clickable: _clickable,
			fullWidth: _fullWidth,
			children: _children,
			media: _media,
			header: _header,
			footer: _footer,
			...rest
		} = props;
		return rest;
	});

	return {
		get shape() { return shape; },
		get size() { return size; },
		get elevation() { return elevation; },
		get clickable() { return clickable; },
		get fullWidth() { return fullWidth; },
		get classes() { return classes; },
		get mediaClass() { return mediaClass; },
		get bodyClass() { return bodyClass; },
		get footerClass() { return footerClass; },
		get restProps() { return restProps; }
	};
}

export default createCardState;
