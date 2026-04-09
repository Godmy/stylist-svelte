import { StyleManagerText } from '$stylist/typography/class/style-manager/text';
import type { ThemeTextRecipe } from '$stylist/typography/interface/recipe/text';

export function createTextState(props: ThemeTextRecipe) {
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);
	const classes = $derived(StyleManagerText.root(disabled, block, typeof props.class === 'string' ? props.class : undefined));
	const restProps = $derived.by(() => {
		const { class: _class, variant: _variant, size: _size, disabled: _disabled, block: _block, children: _children, ...rest } = props;
		return rest;
	});
	return { get children() { return children; }, get classes() { return classes; }, get restProps() { return restProps; } };
}

export default createTextState;
