<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Container from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'maxWidth',
			type: 'select',
			options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
			defaultValue: 'full'
		}
	];
</script>

<Story {controls} component={Container} title="Container Component" description="A responsive container with max-width constraints">
	{#snippet children(values: any)}
		<Container {...values}>
			{#snippet children()}
				<div class="rounded bg-slate-100 p-4">Container content</div>
			{/snippet}
		</Container>
	{/snippet}
</Story>
