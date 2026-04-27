<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AutoSearch from './index.svelte';

	let query = $state('');

	const controls: InterfaceControllerSettings[] = [
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



