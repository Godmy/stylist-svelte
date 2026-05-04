<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ClusterToolbar from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'orientation', type: 'select', defaultValue: 'horizontal', options: ['horizontal', 'vertical'] },
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	let active = $state('component');
</script>

<Story
	{controls}
	component={ClusterToolbar}
	title="ClusterToolbar"
	description="Cluster switcher backed by the shared icon toolbar."
>
	{#snippet children(values: any)}
		<div class="rounded-2xl border border-slate-200 bg-white p-4">
			<ClusterToolbar
				active={active}
				orientation={values.orientation as 'horizontal' | 'vertical'}
				showLabel={Boolean(values.showLabel)}
				onSelect={(name) => {
					active = name;
				}}
			/>
		</div>
	{/snippet}
</Story>
