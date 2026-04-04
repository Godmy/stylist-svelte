import { PresenterNodeShellStyleManager } from '$stylist/architecture/class/style-manager/presenter-node-shell';
import { useSemanticZoom } from '$stylist/architecture/function/script/semantic-zoom';
import type { PresenterNodeShellProps } from '$stylist/architecture/type/struct/presenter-node-shell/presenter-node-shell';

export function createPresenterNodeShellState(props: PresenterNodeShellProps) {
	const zoom = useSemanticZoom({
		node: props.node,
		get cameraDepth() {
			return props.camera.depth;
		}
	});

	const presentation = $derived.by(() => zoom.presentation);
	const projectedScale = $derived.by(() => presentation.scale * props.camera.zoom);
	const hostClass = $derived(
		PresenterNodeShellStyleManager.getHostClass(
			presentation,
			props.selected ?? false,
			props.class ?? ''
		)
	);
	const hostStyle = $derived.by(() =>
		PresenterNodeShellStyleManager.getHostStyle(
			(props.node.position.x - props.camera.x) * props.camera.zoom,
			(props.node.position.y - props.camera.y) * props.camera.zoom,
			presentation.width,
			presentation.height,
			projectedScale,
			props.node.accent,
			props.selected ?? false
		)
	);
	const showCard = $derived.by(
		() =>
			presentation.stage === 'compact' ||
			presentation.stage === 'detailed' ||
			presentation.stage === 'screen'
	);

	function select(): void {
		props.onselect?.(props.node);
	}

	return {
		get presentation() {
			return presentation;
		},
		get hostClass() {
			return hostClass;
		},
		get hostStyle() {
			return hostStyle;
		},
		get showCard() {
			return showCard;
		},
		select
	};
}

export default createPresenterNodeShellState;
