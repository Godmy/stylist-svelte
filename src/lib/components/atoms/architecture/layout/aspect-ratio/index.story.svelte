<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import AspectRatio from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'ratio',
			type: 'text',
			defaultValue: '1'
		}
	];
</script>

<Story {controls} component={AspectRatio} title="AspectRatio Component" description="Maintains a consistent aspect ratio for content containers">
	{#snippet children(values: any)}
		<AspectRatio {...values}>
			{#snippet children()}
				<div class="h-full w-full bg-slate-200"></div>
			{/snippet}
		</AspectRatio>
	{/snippet}
</Story>
