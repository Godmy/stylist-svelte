<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import Container from './index.svelte';
	
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	
	const controls: InterfaceControllerSettings[] = [
		{
			name: 'size',
			type: 'select',
			options: ['sm', 'md', 'lg', 'xl', 'full'],
			defaultValue: 'full'
		}
	];
</script>

<Story {controls} component={Container} title="Container Component" description="A responsive container with max-width constraints">
	{#snippet children(values: any)}
		<div class="w-full rounded-lg bg-[var(--color-background-secondary)] py-4">
			<Container {...values}>
			{#snippet children()}
				<div class="rounded bg-[var(--color-background-secondary)] p-4 text-center">
					Container size: <strong>{values.size}</strong>
				</div>
			{/snippet}
			</Container>
		</div>
	{/snippet}
</Story>




