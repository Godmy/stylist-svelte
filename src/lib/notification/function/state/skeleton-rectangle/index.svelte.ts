import { SkeletonRectangleStyleManager } from '$stylist/notification/class/style-manager/skeleton-rectangle';
import type { SkeletonRectangleProps } from '$stylist/notification/type/struct/skeleton-rectangle-props';

export function createSkeletonRectangleState(props: SkeletonRectangleProps) {
	const content = $derived(props.content);
	const restProps = $derived.by(() => {
		const { class: _class, width: _width, height: _height, content: _content, ...rest } = props;
		return rest;
	});
	const rootClass = $derived(SkeletonRectangleStyleManager.root(props.class));
	const style = $derived(
		SkeletonRectangleStyleManager.style(props.width ?? 120, props.height ?? 80)
	);

	return {
		get content() {
			return content;
		},
		get restProps() {
			return restProps;
		},
		get rootClass() {
			return rootClass;
		},
		get style() {
			return style;
		}
	};
}

export default createSkeletonRectangleState;
