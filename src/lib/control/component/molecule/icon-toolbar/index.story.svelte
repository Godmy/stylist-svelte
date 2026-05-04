<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import IconToolbar from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'orientation', type: 'select', defaultValue: 'horizontal', options: ['horizontal', 'vertical'] },
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	const items = [
		{
			name: 'select',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 4 10 8-6 1 1 6-2 .5-1.2-6.1L3 14z"/></svg>'
		},
		{
			name: 'text',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16"/><path d="M12 6v12"/><path d="M8 18h8"/></svg>'
		},
		{
			name: 'comment',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 17.5 3 20V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z"/></svg>'
		}
	] as const;

	let active = $state('select');
</script>

<Story
	{controls}
	component={IconToolbar}
	title="IconToolbar"
	description="Compact icon toolbar for domain and cluster pickers."
>
	{#snippet children(values: any)}
		<div class="rounded-2xl border border-slate-200 bg-white p-4">
			<IconToolbar
				{items}
				active={active}
				label="tool"
				orientation={values.orientation as 'horizontal' | 'vertical'}
				showLabel={Boolean(values.showLabel)}
				onSelect={(name) => {
					active = name;
				}}
			/>
		</div>
	{/snippet}
</Story>
