<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DomainToolbar from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'orientation', type: 'select', defaultValue: 'vertical', options: ['horizontal', 'vertical'] },
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	let active = $state('interaction');
</script>

<Story
	{controls}
	component={DomainToolbar}
	title="DomainToolbar"
	description="Primary domain navigation rail used by the domain explorer."
>
	{#snippet children(values: any)}
		<div class="rounded-2xl border border-slate-200 bg-white p-4">
			<DomainToolbar
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
