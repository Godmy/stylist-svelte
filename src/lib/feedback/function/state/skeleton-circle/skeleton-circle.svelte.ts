import { SkeletonCircleStyleManager } from '$stylist/feedback/class/style-manager/skeleton-circle/skeleton-circle';
import type { SkeletonCircleProps } from '$stylist/feedback/interface/component/skeleton-circle/other/skeleton-circle';

export function createSkeletonCircleState(props: SkeletonCircleProps) {
	let content = $derived(props.content);
	let restProps = $derived.by(() => {
		const { class: _class, size: _size, content: _content, ...rest } = props;
		return rest;
	});
	let rootClass = $derived(SkeletonCircleStyleManager.root(props.class));
	let style = $derived(SkeletonCircleStyleManager.style(props.size ?? 40));

	return {
		get content() { return content; },
		get restProps() { return restProps; },
		get rootClass() { return rootClass; },
		get style() { return style; }
	};
}

export default createSkeletonCircleState;
