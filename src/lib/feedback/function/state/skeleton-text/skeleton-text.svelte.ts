import { SkeletonTextStyleManager } from '$stylist/feedback/class/style-manager/skeleton-text/skeleton-text';
import type { SkeletonTextProps } from '$stylist/feedback/interface/component/skeleton-text/other/skeleton-text';

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
