import { SkeletonRectangleStyleManager } from '$stylist/notification/class/style-manager/skeleton-rectangle';
import type { SkeletonRectangleProps } from '$stylist/notification/interface/component/skeleton-rectangle/other/skeleton-rectangle';

export function createSkeletonRectangleState(props: SkeletonRectangleProps) {
	let content = $derived(props.content);
	let restProps = $derived.by(() => {
		const {
			class: _class,
			width: _width,
			height: _height,
			content: _content,
			...rest
		} = props;
		return rest;
	});
	let rootClass = $derived(SkeletonRectangleStyleManager.root(props.class));
	let style = $derived(
		SkeletonRectangleStyleManager.style(props.width ?? 120, props.height ?? 80)
	);

	return {
		get content() { return content; },
		get restProps() { return restProps; },
		get rootClass() { return rootClass; },
		get style() { return style; }
	};
}

export default createSkeletonRectangleState;
