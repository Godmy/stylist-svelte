<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import AspectRatio from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	
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
		<div class="max-w-lg rounded border border-slate-200 p-3">
			<AspectRatio ratio={Number(values.ratio) || 1}>
				{#snippet children()}
					<div class="flex h-full w-full items-center justify-center rounded bg-gradient-to-br from-sky-100 to-blue-200 text-sm font-semibold text-slate-700">
						ratio: {values.ratio}
					</div>
				{/snippet}
			</AspectRatio>
		</div>
	{/snippet}
</Story>
