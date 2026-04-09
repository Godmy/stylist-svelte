import { resolveAriaLabel } from '$stylist/information/function/script/resolve-aria-label';
import { StyleManagerCaption } from '$stylist/typography/class/style-manager/caption';
import type { ThemeCaptionRecipe } from '$stylist/typography/interface/recipe/caption';

export function createCaptionState(props: ThemeCaptionRecipe) {
	const children = $derived(props.children);
	const classes = $derived(StyleManagerCaption.root(typeof props.class === 'string' ? props.class : undefined));
	const ariaLabel = $derived(resolveAriaLabel(props.ariaLabel, props as Record<string, unknown>, ''));
	const attrs = $derived({ 'aria-label': ariaLabel || undefined });
	const restProps = $derived.by(() => {
		const { class: _class, variant: _variant, size: _size, disabled: _disabled, block: _block, children: _children, ariaLabel: _ariaLabel, ...rest } = props;
		return rest;
	});
	return { get children() { return children; }, get classes() { return classes; }, get attrs() { return attrs; }, get restProps() { return restProps; } };
}

export default createCaptionState;

