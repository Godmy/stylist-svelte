<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import FunctionalTaxonomy from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'domain', type: 'text', defaultValue: 'interaction' },
		{ name: 'cluster', type: 'text', defaultValue: 'component' },
		{ name: 'joint', type: 'text', defaultValue: 'atom' },
		{ name: 'family', type: 'text', defaultValue: 'clickable' }
	];
</script>

<Story
	{controls}
	component={FunctionalTaxonomy}
	title="FunctionalTaxonomy"
	description="Compact taxonomy row for domain, cluster, joint, and family coordinates."
>
	{#snippet children(values: any)}
		<div class="rounded-2xl border border-slate-200 bg-white">
			<FunctionalTaxonomy
				domain={values.domain as string}
				cluster={values.cluster as string}
				joint={values.joint as string}
				family={values.family as string}
			/>
		</div>
	{/snippet}
</Story>
