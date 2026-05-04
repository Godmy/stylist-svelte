<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import BreadcrumbDropdown from './index.svelte';

	const controls: InterfaceControllerSettings[] = [{ name: 'open', type: 'boolean', defaultValue: true }];

	const items = [
		{ id: 'controls', targetId: 'controls', label: 'controls', description: 'Interaction controls and wrappers' },
		{ id: 'state', targetId: 'state', label: 'state', description: 'State machines and stores' },
		{ id: 'stories', targetId: 'stories', label: 'stories', description: 'Story coverage and examples' }
	];

	let selected = $state('controls');
</script>

<Story
	{controls}
	component={BreadcrumbDropdown}
	title="BreadcrumbDropdown"
	description="Dropdown flyout used by breadcrumb items with hidden siblings."
>
	{#snippet children(values: any)}
		<div class="relative min-h-64 rounded-3xl bg-slate-50 p-6">
			<div class="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
				Active branch: {selected}
			</div>
			<div class="absolute left-6 top-20">
				<BreadcrumbDropdown
					open={Boolean(values.open)}
					items={items}
					onSelect={(targetId) => {
						selected = targetId;
					}}
				/>
			</div>
		</div>
	{/snippet}
</Story>
