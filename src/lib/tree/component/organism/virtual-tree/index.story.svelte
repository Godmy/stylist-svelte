<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TreeView from './index.svelte';

	type Props = {
		expandable: boolean;
		selectable: boolean;
		showIcons: boolean;
		indentSize: number;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'expandable', type: 'boolean', defaultValue: true },
		{ name: 'selectable', type: 'boolean', defaultValue: true },
		{ name: 'showIcons', type: 'boolean', defaultValue: true },
		{ name: 'indentSize', type: 'number', defaultValue: 20 }
	];

	const nodes = [
		{
			id: '1',
			label: 'Root 1',
			icon: '📁',
			children: [
				{ id: '1-1', label: 'Child 1-1', icon: '📄' },
				{
					id: '1-2',
					label: 'Child 1-2',
					icon: '📄',
					children: [
						{ id: '1-2-1', label: 'Grandchild 1-2-1', icon: '📄' },
						{ id: '1-2-2', label: 'Grandchild 1-2-2', icon: '📄' }
					]
				}
			]
		},
		{
			id: '2',
			label: 'Root 2',
			icon: '📁',
			children: [
				{ id: '2-1', label: 'Child 2-1', icon: '📄' },
				{ id: '2-2', label: 'Child 2-2', icon: '📄' }
			]
		},
		{
			id: '3',
			label: 'Root 3',
			icon: '📁',
			children: [
				{ id: '3-1', label: 'Child 3-1', icon: '📄' },
				{ id: '3-2', label: 'Child 3-2', icon: '📄' },
				{ id: '3-3', label: 'Child 3-3', icon: '📄' }
			]
		}
	];

	function handleNodeSelect(node: any) {
		console.log('Node selected:', node);
	}

	function handleNodeExpand(node: any) {
		console.log('Node expanded:', node);
	}

	function handleNodeCollapse(node: any) {
		console.log('Node collapsed:', node);
	}
</script>

<Story
	id="organisms-virtual-tree"
	title="Organisms / Interaction / Controls / Trees / Virtual Tree"
	component={TreeView}
	category="Organisms/Interaction/Controls/Trees"
	description="A virtual tree component for displaying hierarchical data with expand/collapse functionality."
	tags={['tree', 'hierarchy', 'navigation']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-virtual-tree _c1">
			<h1 class="_c2">VirtualTree Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive VirtualTree</h2>
				<div class="_c5">
					<TreeView {nodes} />
				</div>

				<div class="_c6">
					<div class="_c7">
						<label for="expandable" class="_c8">
							<input id="expandable" type="checkbox" bind:checked={values.expandable} />
							Expandable
						</label>
					</div>

					<div class="_c7">
						<label for="selectable" class="_c8">
							<input id="selectable" type="checkbox" bind:checked={values.selectable} />
							Selectable
						</label>
					</div>

					<div class="_c7">
						<label for="show-icons" class="_c8">
							<input id="show-icons" type="checkbox" bind:checked={values.showIcons} />
							Show Icons
						</label>
					</div>

					<div>
						<label for="indent-size" class="_c9">Indent Size:</label>
						<input
							id="indent-size"
							type="number"
							bind:value={values.indentSize}
							class="_c10"
							min="10"
							max="40"
							step="5"
						/>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c10 {
		width: 4rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.25rem;
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
	._c6 {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	._c7 {
		display: flex;
		align-items: flex-end;
	}
	._c8 {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	._c9 {
		margin-bottom: 0.25rem;
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
