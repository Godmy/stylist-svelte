<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TokenChipSet from './index.svelte';

	const tokens = ['React', 'Vue', 'Svelte', 'Angular', 'Solid'];

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Frameworks' },
		{ name: 'dedupe', type: 'boolean', defaultValue: true },
		{
			name: 'selected',
			type: 'select',
			defaultValue: '',
			options: ['', 'React', 'Vue', 'Svelte', 'Angular', 'Solid']
		}
	];
</script>

<Story
	{controls}
	component={TokenChipSet}
	title="Token Chip Set"
	category="Atoms/Interaction/Controls"
	description="Compact chip-set control for choosing one value from a token list."
	tags={['token', 'chip', 'select', 'control']}
>
	{#snippet children(values: any)}
		<div class="token-story-panel">
			<TokenChipSet
				title={values.title as string}
				{tokens}
				dedupe={values.dedupe as boolean}
				value={(values.selected as string) || undefined}
				onSelect={(token: string) => console.log('Selected:', token)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	.token-story-panel {
		display: grid;
		gap: 1rem;
		max-width: 42rem;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 1.25rem;
	}
</style>
