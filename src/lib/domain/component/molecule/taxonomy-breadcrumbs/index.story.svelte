<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TaxonomyBreadcrumbs from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'domain', type: 'text', defaultValue: 'interaction' },
		{ name: 'cluster', type: 'text', defaultValue: 'component' },
		{ name: 'joint', type: 'text', defaultValue: 'atom' },
		{ name: 'family', type: 'text', defaultValue: 'clickable' },
		{ name: 'file', type: 'text', defaultValue: 'index.story.svelte' }
	];
</script>

<Story
	{controls}
	component={TaxonomyBreadcrumbs}
	title="TaxonomyBreadcrumbs"
	description="Compact path breadcrumb for the active taxonomy coordinates and current file."
>
	{#snippet children(values: any)}
		<div class="rounded-2xl border border-slate-200 bg-white">
			<TaxonomyBreadcrumbs
				domain={values.domain as string}
				cluster={values.cluster as string}
				joint={values.joint as string}
				family={values.family as string}
				file={values.file as string}
			/>
		</div>
	{/snippet}
</Story>
