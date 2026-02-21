<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import AutoSearch from './index.svelte';

	let query = $state('');

	const controls: ControlConfig[] = [
		{ name: 'placeholder', type: 'text', defaultValue: 'Search projects...' }
	];
</script>

<Story component={AutoSearch} title="AutoSearch" description="Text search field with immediate change callbacks." {controls}>
	{#snippet children(values: any)}
		<div class="max-w-md space-y-2">
			<AutoSearch value={query} placeholder={values.placeholder} onValueChange={(next) => (query = next)} />
			<p class="text-sm text-[--color-text-secondary]">Query: {query || 'empty'}</p>
		</div>
	{/snippet}
</Story>
