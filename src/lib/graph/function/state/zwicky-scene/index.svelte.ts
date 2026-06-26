import { InstancedGraphManager } from '$stylist/graph/class/manager/instanced-graph';
import { parseZwickyGraph } from '$stylist/graph/function/script/parse-zwicky-graph';
import { layoutZwickyNodes } from '$stylist/graph/function/script/layout-zwicky-nodes';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { ZwickySceneProps } from '$stylist/graph/type/struct/zwicky-scene-props';
import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';

export function createZwickySceneState(props: ZwickySceneProps) {
	const manager = new InstancedGraphManager();

	let selectedNode = $state<ZwickyNode | null>(null);
	let hoveredNode = $state<ZwickyNode | null>(null);
	let nodeCount = $state(0);
	let edgeCount = $state(0);
	let isLoaded = $state(false);

	const containerClass = $derived(mergeClassNames('zwicky-scene', props.class?.toString() ?? ''));
	const canvasClass = $derived(
		mergeClassNames('zwicky-scene__canvas', props.canvasClass?.toString() ?? '')
	);
	const overlayClass = $derived(
		mergeClassNames('zwicky-scene__overlay', props.overlayClass?.toString() ?? '')
	);
	const title = $derived(props.title ?? 'Zwicky Graph');

	const restProps = $derived.by(() => {
		const { title: _t, data: _d, canvasClass: _cc, overlayClass: _oc, class: _c, onNodeSelect: _ns, ...rest } = props;
		return rest;
	});

	manager.onSelect = (node: ZwickyNode) => {
		selectedNode = node;
		props.onNodeSelect?.(node.id, node.path);
	};

	function loadData(): void {
		const input = props.data;
		if (!input) return;

		const { nodes, edges } = parseZwickyGraph(input);
		layoutZwickyNodes(nodes);
		manager.setGraph(nodes, edges);
		nodeCount = nodes.length;
		edgeCount = edges.length;
		isLoaded = true;
	}

	function mount(canvas: HTMLCanvasElement | null): void {
		if (!canvas) return;
		manager.start(canvas);
		loadData();
	}

	function destroy(): void {
		manager.stop();
	}

	return {
		get containerClass() { return containerClass; },
		get canvasClass() { return canvasClass; },
		get overlayClass() { return overlayClass; },
		get title() { return title; },
		get restProps() { return restProps; },
		get selectedNode() { return selectedNode; },
		get hoveredNode() { return hoveredNode; },
		get nodeCount() { return nodeCount; },
		get edgeCount() { return edgeCount; },
		get isLoaded() { return isLoaded; },
		mount,
		destroy
	};
}
