<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DomainEntity from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'name', type: 'text', defaultValue: 'price-history' },
		{ name: 'fileCount', type: 'number', defaultValue: 3 },
		{ name: 'active', type: 'boolean', defaultValue: false }
	];

	let selectedPath = $state('');
</script>

<Story
	{controls}
	component={DomainEntity}
	title="DomainEntity"
	description="Selectable item in the domain explorer entity list."
>
	{#snippet children(values: any)}
		<div class="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
			<DomainEntity
				name={values.name as string}
				path={`/src/lib/commerce/component/molecule/${values.name as string}`}
				fileCount={Number(values.fileCount)}
				active={Boolean(values.active)}
				onSelect={(path) => {
					selectedPath = path;
				}}
			/>
			<p class="text-sm text-slate-500">Selected path: {selectedPath || 'none'}</p>
		</div>
	{/snippet}
</Story>
