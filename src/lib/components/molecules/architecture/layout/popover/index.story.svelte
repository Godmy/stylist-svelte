<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Popover from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Team members' },
		{ name: 'open', type: 'boolean', defaultValue: true },
		{ name: 'position', type: 'select', defaultValue: 'bottom', options: ['top', 'bottom', 'left', 'right'] }
	];
</script>

<Story component={Popover} title="Popover" description="Floating contextual panel anchored to a trigger." {controls}>
	{#snippet children(values: any)}
		<Popover title={values.title} open={values.open} position={values.position}>
			{#snippet trigger()}
				<button class="rounded-md bg-[--color-primary-600] px-3 py-2 text-sm font-semibold text-white">Toggle popover</button>
			{/snippet}
			{#snippet content()}
				<ul class="space-y-1 text-sm">
					<li>Ana Trujillo</li>
					<li>Devon Lane</li>
					<li>Leslie Alexander</li>
				</ul>
			{/snippet}
		</Popover>
	{/snippet}
</Story>
