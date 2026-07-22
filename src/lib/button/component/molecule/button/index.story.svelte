<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Button from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
		},
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'loading', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: false }
	];

	let pressed = $state(0);
</script>

<Story
	{controls}
	component={Button}
	title="Button Molecule"
	description="Higher-level button assembled from container, background, border, and click states."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Button
				variant={values.variant as any}
				size={values.size as any}
				loading={Boolean(values.loading)}
				disabled={Boolean(values.disabled)}
				block={Boolean(values.block)}
				onclick={() => {
					pressed += 1;
				}}
			>
				Launch review
			</Button>
			<p class="_c2">Clicks recorded: {pressed}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 1.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
