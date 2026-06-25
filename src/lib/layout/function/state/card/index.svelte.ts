import type { LayoutShape } from '$stylist/token/type/alias/item-layout-shape';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { RecipeCard } from '$stylist/layout/interface/recipe/card';

export function createCardState(props: RecipeCard) {
	const shape = $derived<LayoutShape>(props.shape ?? 'rounded');
	const size = $derived<TokenSize>((props.size as TokenSize | undefined) ?? 'md');
	const elevation = $derived(props.elevation ?? 1);
	const clickable = $derived(props.clickable ?? false);
	const fullWidth = $derived(props.fullWidth ?? false);

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
		get shape() {
			return shape;
		},
		get size() {
			return size;
		},
		get elevation() {
			return elevation;
		},
		get clickable() {
			return clickable;
		},
		get fullWidth() {
			return fullWidth;
		},
		get restProps() {
			return restProps;
		}
	};
}

