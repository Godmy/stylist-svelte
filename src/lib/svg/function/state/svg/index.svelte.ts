import { escapeAttr } from '$stylist/svg/function/script/attribute';
import { resolveSize } from '$stylist/svg/function/script/size';
import { buildSvgMarkup } from '$stylist/svg/function/script/svg-markup';
import type { RecipeSvg } from '$stylist/svg/interface/recipe/svg';

export function createSvgState(props: RecipeSvg) {
	const svg = $derived(props.svg);
	const size = $derived(props.size);
	const strokeWidth = $derived(props.strokeWidth);
	const className = $derived(props.class ?? '');
	const ariaLabel = $derived.by(() =>
		typeof props['aria-label'] === 'string' ? String(props['aria-label']) : undefined
	);
	const markup = $derived.by(() =>
		buildSvgMarkup(svg ?? '', { className, size, strokeWidth, ariaLabel })
	);

	const restProps = $derived.by(() => {
		const { class: _class, svg: _svg, size: _size, strokeWidth: _strokeWidth, ...rest } = props;
		return rest;
	});

	return {
		get svg() {
			return svg;
		},
		get size() {
			return size;
		},
		get strokeWidth() {
			return strokeWidth;
		},
		get className() {
			return className;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get markup() {
			return markup;
		},
		get restProps() {
			return restProps;
		},
		escapeAttr,
		resolveSize,
		buildSvgMarkup
	};
}

export default createSvgState;
