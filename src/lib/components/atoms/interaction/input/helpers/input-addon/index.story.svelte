<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import InputAddon from './index.svelte';
	import { Search } from 'lucide-svelte';

	const controls: ControlConfig[] = [
		{ name: 'position', type: 'select', defaultValue: 'left', options: ['left', 'right'] },
		{ name: 'variant', type: 'select', defaultValue: 'solid', options: ['solid', 'ghost', 'outline'] },
		{ name: 'withIcon', type: 'boolean', defaultValue: true },
		{ name: 'addonText', type: 'text', defaultValue: '$' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Search...' }
	];
</script>

<Story component={InputAddon} title="InputAddon" description="Prefix/suffix element attached to input controls." {controls}>
	{#snippet children(values: any)}
		<div class="flex items-center rounded-md border border-[--color-border-primary]">
			{#if values.position === 'left'}
				<InputAddon position="left" variant={values.variant}>
					{#if values.withIcon}<Search class="h-4 w-4" />{:else}{values.addonText}{/if}
				</InputAddon>
			{/if}
			<input type="text" placeholder={values.placeholder} class="flex-1 border-0 bg-transparent px-3 py-2 focus:outline-none" />
			{#if values.position === 'right'}
				<InputAddon position="right" variant={values.variant}>
					{#if values.withIcon}<Search class="h-4 w-4" />{:else}{values.addonText}{/if}
				</InputAddon>
			{/if}
		</div>
	{/snippet}
</Story>
