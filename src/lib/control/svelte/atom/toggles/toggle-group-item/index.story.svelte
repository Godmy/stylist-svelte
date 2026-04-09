<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import ToggleGroupItem from './index.svelte';
	import ToggleGroupRoot from '../toggle-group-root/index.svelte';

	let selected = $state<string | null>(null);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'type', type: 'select', defaultValue: 'single', options: ['single', 'multiple'] }
	];
</script>

<Story component={ToggleGroupItem} title="ToggleGroupItem" description="Selectable item managed by ToggleGroupRoot context." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3">
			<ToggleGroupRoot
				type={values.type}
				onValueChange={(e) => (selected = Array.isArray(e.detail.value) ? e.detail.value.join(', ') : e.detail.value)}
			>
				<ToggleGroupItem value="bold" disabled={values.disabled}>Bold</ToggleGroupItem>
				<ToggleGroupItem value="italic" disabled={values.disabled}>Italic</ToggleGroupItem>
				<ToggleGroupItem value="underline" disabled={values.disabled}>Underline</ToggleGroupItem>
			</ToggleGroupRoot>
			<p class="text-sm text-[--color-text-secondary]">Selected: {selected || 'none'}</p>
		</div>
	{/snippet}
</Story>



