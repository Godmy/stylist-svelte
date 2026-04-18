import { SkeletonTextStyleManager } from '$stylist/notification/class/style-manager/skeleton-text';
import type { SkeletonTextProps } from '$stylist/notification/type/struct/skeleton-text-props';

export function createSkeletonTextState(props: SkeletonTextProps) {
	let content = $derived(props.content);
	let restProps = $derived.by(() => {
		const { class: _class, width: _width, content: _content, ...rest } = props;
		return rest;
	});
	let rootClass = $derived(SkeletonTextStyleManager.root(props.class));
	let style = $derived(SkeletonTextStyleManager.style(props.width ?? '100%'));

	return {
		get content() { return content; },
		get restProps() { return restProps; },
		get rootClass() { return rootClass; },
		get style() { return style; }
	};
}

export default createSkeletonTextState;
