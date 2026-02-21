<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Container from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	
	const controls: ControlConfig[] = [
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
		<div class="w-full rounded-lg bg-slate-50 py-4">
			<Container {...values}>
			{#snippet children()}
				<div class="rounded bg-slate-100 p-4 text-center">
					Container size: <strong>{values.size}</strong>
				</div>
			{/snippet}
			</Container>
		</div>
	{/snippet}
</Story>
