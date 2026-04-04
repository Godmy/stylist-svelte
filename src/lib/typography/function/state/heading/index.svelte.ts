import { computeAriaLabel } from '$stylist/information/function/script/resolve-aria-label';
import { StyleManagerHeading } from '$stylist/typography/class/style-manager/heading';
import type { ThemeHeadingRecipe } from '$stylist/typography/interface/recipe/heading';

export function createHeadingState(props: ThemeHeadingRecipe) {
	const children = $derived(props.children);
	const classes = $derived(StyleManagerHeading.root(props.class));
	const ariaLabel = $derived(computeAriaLabel(props.ariaLabel, props as Record<string, unknown>, ''));
	const attrs = $derived({ 'aria-label': ariaLabel || undefined });
	const restProps = $derived.by(() => {
		const { class: _class, variant: _variant, size: _size, disabled: _disabled, block: _block, children: _children, ariaLabel: _ariaLabel, ...rest } = props;
		return rest;
	});
	return { get children() { return children; }, get classes() { return classes; }, get attrs() { return attrs; }, get restProps() { return restProps; } };
}

export default createHeadingState;

