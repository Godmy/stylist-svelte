<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import AspectRatio from './index.svelte';
	
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	
	const controls: InterfaceControllerSettings[] = [
		{
			name: 'ratio',
			type: 'text',
			defaultValue: '1'
		}
	];
</script>

<Story {controls} component={AspectRatio} title="AspectRatio Component" description="Maintains a consistent aspect ratio for content containers">
	{#snippet children(values: any)}
		<div class="max-w-lg rounded border border-[var(--color-border-primary)] p-3">
			<AspectRatio ratio={Number(values.ratio) || 1}>
				{#snippet children()}
					<div class="flex h-full w-full items-center justify-center rounded [background-image:var(--gradient-ocean)] text-sm font-semibold text-[var(--color-text-primary)]">
						ratio: {values.ratio}
					</div>
				{/snippet}
			</AspectRatio>
		</div>
	{/snippet}
</Story>




