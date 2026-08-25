<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Dot from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'color',
			type: 'select',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gray'],
			defaultValue: 'primary'
		},
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
	];
</script>

<Story
	id="atoms-dot"
	title="Dot"
	component={Dot}
	category="Atoms/Information/Indicators"
	description="A small status dot indicator."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Dot color={values.color} size={values.size} />
			<span class="_c2">Status Indicator</span>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		align-items: center;
	}
	._c1 > * + * {
		margin-left: 0.75rem;
	}
	._c2 {
		color: var(--color-text-primary);
	}
</style>
