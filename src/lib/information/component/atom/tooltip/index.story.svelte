<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Tooltip from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'content', type: 'text', defaultValue: 'Helpful contextual info' },
		{
			name: 'placement',
			type: 'select',
			defaultValue: 'top',
			options: ['top', 'bottom', 'left', 'right']
		},
		{
			name: 'trigger',
			type: 'select',
			defaultValue: 'hover',
			options: ['hover', 'click', 'focus']
		},
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'arrow',
			options: ['line', 'arrow', 'invisible']
		},
		{ name: 'delay', type: 'number', defaultValue: 0, min: 0, max: 1200, step: 50 },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	component={Tooltip}
	title="Tooltip"
	description="Context helper with trigger, placement, and variant controls."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Tooltip
				content={values.content}
				placement={values.placement}
				trigger={values.trigger}
				variant={values.variant}
				delay={values.delay}
				disabled={values.disabled}
			>
				{#snippet children()}
					<button class="_c2">Target element</button>
				{/snippet}
			</Tooltip>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		min-height: 10rem;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		border-radius: 0.5rem;
		background-color: var(--color-primary-600);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-inverse);
	}
</style>
