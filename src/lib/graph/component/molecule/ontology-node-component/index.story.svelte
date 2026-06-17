<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OntologyNodeComponent from './index.svelte';

	type Position2D = { x: number; y: number };
	type OntologyNode = {
		id: string;
		name: string;
		type: string;
		position: Position2D;
		width: number;
		height: number;
	};

	type Props = { showLabel: boolean };

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	const node: OntologyNode = {
		id: 'test-node',
		name: 'Test Node',
		type: 'class',
		position: { x: 100, y: 100 },
		width: 120,
		height: 60
	};
</script>

<Story
	id="molecules-ontology-node-component"
	title="Molecules / Information / Ontology / OntologyNodeComponent"
	component={OntologyNodeComponent}
	category="Molecules/Information/Ontology"
	description="Node renderer for ontology graph nodes."
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-molecules-ontology-node-component _c1">
			<div class="_c2">
				<OntologyNodeComponent {node} showLabel={values.showLabel} />
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c2 {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		height: 16rem;
		max-width: 28rem;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
	}
</style>
