<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
	import DomainToolbar from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'orientation',
			type: 'select',
			defaultValue: TOKEN_ORIENTATION[1],
			options: TOKEN_ORIENTATION
		},
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	const domains = ['workspace', 'button', 'dialog', 'tree', 'webgl'];
	let active = $state('button');
</script>

<Story
	{controls}
	component={DomainToolbar}
	title="DomainToolbar"
	description="Primary domain navigation rail used by the domain explorer."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<DomainToolbar
				{active}
				{domains}
				orientation={values.orientation as TokenOrientation}
				showLabel={Boolean(values.showLabel)}
				onSelect={(name) => {
					active = name;
				}}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 1rem;
	}
</style>
