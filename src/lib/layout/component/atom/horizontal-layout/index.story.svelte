<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import HorizontalLayout from './index.svelte';
	
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	
	const controls: InterfaceControllerSettings[] = [
		{
			name: 'gap',
			type: 'select',
			options: ['none', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md'
		},
		{
			name: 'alignItems',
			type: 'select',
			options: ['start', 'center', 'end', 'stretch'],
			defaultValue: 'center'
		},
		{
			name: 'justifyContent',
			type: 'select',
			options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
			defaultValue: 'start'
		},
		{
			name: 'wrap',
			type: 'boolean',
			defaultValue: true
		}
	];
</script>

<Story {controls} component={HorizontalLayout} title="HorizontalLayout Component" description="A flexible horizontal layout component">
	{#snippet children(values: any)}
		<div class="rounded border border-[var(--color-border-primary)] p-3">
			<HorizontalLayout {...values}>
				{#snippet children()}
					<div class="rounded bg-[var(--color-background-secondary)] p-2">Item 1</div>
					<div class="rounded bg-[var(--color-background-secondary)] p-2">Item 2</div>
					<div class="rounded bg-[var(--color-background-secondary)] p-2">Item 3</div>
				{/snippet}
			</HorizontalLayout>
		</div>
	{/snippet}
</Story>




