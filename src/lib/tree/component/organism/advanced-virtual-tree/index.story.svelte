<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TreeView from './index.svelte';

	type Props = {
		expandable: boolean;
		selectable: boolean;
		showIcons: boolean;
		indentSize: number;
		virtualScroll: boolean;
		showCheckboxes: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'expandable', type: 'boolean', defaultValue: true },
		{ name: 'selectable', type: 'boolean', defaultValue: true },
		{ name: 'showIcons', type: 'boolean', defaultValue: true },
		{ name: 'indentSize', type: 'number', defaultValue: 20 },
		{ name: 'virtualScroll', type: 'boolean', defaultValue: true },
		{ name: 'showCheckboxes', type: 'boolean', defaultValue: false }
	];

	// Generate a large tree for virtual scrolling demo
	const generateLargeTree = () => {
		const roots = [];
		for (let i = 1; i <= 10; i++) {
			const root = {
				id: `root-${i}`,
				label: `Root ${i}`,
				icon: '📁',
				children: [] as any[]
			};
			for (let j = 1; j <= 5; j++) {
				const child = {
					id: `root-${i}-child-${j}`,
					label: `Child ${i}-${j}`,
					icon: '📁',
					children: [] as any[]
				};
				for (let k = 1; k <= 3; k++) {
					child.children.push({
						id: `root-${i}-child-${j}-leaf-${k}`,
						label: `Leaf ${i}-${j}-${k}`,
						icon: '📄',
						type: 'leaf'
					});
				}
				root.children.push(child);
			}
			roots.push(root);
		}
		return roots;
	};

	const nodes = generateLargeTree();

	function handleNodeSelect(node: any) {
		console.log('Node selected:', node);
	}

	function handleNodeExpand(node: any) {
		console.log('Node expanded:', node);
	}

	function handleNodeCollapse(node: any) {
		console.log('Node collapsed:', node);
	}

	function handleCheck(node: any) {
		console.log('Node checked:', node);
	}
</script>

<Story
	id="organisms-advanced-virtual-tree"
	title="Organisms / Interaction / Controls / Trees / Advanced Virtual Tree"
	component={TreeView}
	category="Organisms/Interaction/Controls/Trees"
	description="An advanced virtual tree component for displaying large hierarchical datasets with optimal performance."
	tags={['tree', 'virtual', 'large-data', 'performance']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-advanced-virtual-tree _c1">
			<h1 class="_c2">AdvancedVirtualTree Component</h1>

			<div class="_c3">
				<h2 class="_c4">
					Interactive AdvancedVirtualTree ({nodes.length} root nodes, ~{nodes.length * 5} children)
				</h2>
				<div class="_c5" style="height: 400px; overflow: auto;">
					<TreeView {nodes} />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		max-width: 28rem;
	}
</style>
