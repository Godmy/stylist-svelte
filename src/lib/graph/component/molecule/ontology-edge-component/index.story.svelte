<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OntologyEdgeComponent from './index.svelte';

	type Position2D = { x: number; y: number };
	type OntologyNode = {
		id: string;
		name: string;
		type: string;
		position: Position2D;
		width: number;
		height: number;
	};
	type OntologyEdge = {
		id: string;
		source: string;
		target: string;
		relationship: string;
		label?: string;
		cardinality?: string;
	};

	type Props = { showLabel: boolean };

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	const accountNode: OntologyNode = {
		id: 'account',
		name: 'Account',
		type: 'entity',
		position: { x: 80, y: 60 },
		width: 140,
		height: 80
	};
	const subscriptionNode: OntologyNode = {
		id: 'subscription',
		name: 'SlotSubscription',
		type: 'entity',
		position: { x: 260, y: 220 },
		width: 160,
		height: 90
	};
	const relationship: OntologyEdge = {
		id: 'edge-1',
		source: accountNode.id,
		target: subscriptionNode.id,
		relationship: 'owns',
		label: 'Owns',
		cardinality: '1..*'
	};
</script>

<Story
	id="molecules-ontology-edge-component"
	title="Molecules / Information / Ontology / OntologyEdgeComponent"
	component={OntologyEdgeComponent}
	category="Molecules/Information/Ontology"
	description="Edge renderer for ontology graph relationships."
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-molecules-ontology-edge-component _c1">
			<div class="_c2">
				<OntologyEdgeComponent
					showLabel={values.showLabel}
					edge={relationship}
					sourceNode={accountNode}
					targetNode={subscriptionNode}
				/>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c2 {
		position: relative;
		margin-left: auto;
		margin-right: auto;
		height: 16rem;
		max-width: 28rem;
		overflow: hidden;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		background-color: var(--color-background-primary);
	}
</style>
